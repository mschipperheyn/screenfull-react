/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';

/**
 * The underlying scrollContainerRef should be an actual node, not a Fragment. Otherwise, it will just be null
 * You HAVE to make sure overflow-x is not set on the scrollContainerRef or body. This will make scrollTop default to 0 on Chrome Mobile
 */

const getFullScreenNode = () => document.documentElement || document.body;

const Screenfull = ({ scrollContainerRef, forceFullScreen, mobileOnly, maxPixelsForMobile }) => {
  const scroll = React.useRef(0);

  const isMobile = React.useCallback(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    const width = window.innerWidth;
    return width <= maxPixelsForMobile;
  }, []);

  const handleScroll = React.useCallback(event => {
    const scrollPos = event.currentTarget.scrollTop;
    let going = 'down';
    const scrollCurrent = scroll.current;
    if (scrollCurrent !== 0 && scrollPos < scrollCurrent) {
      going = 'up';
    }

    scroll.current = scrollPos;

    if (going === 'up' && screenfull.isFullscreen) {
      screenfull.exit();
    } else if (going === 'down' && !screenfull.isFullscreen) {
      screenfull.request(getFullScreenNode());
    }
  }, []);

  const getNode = React.useCallback(() => {
    return scrollContainerRef
      ? ReactDOM.findDOMNode(scrollContainerRef) // eslint-disable-line react/no-find-dom-node
      : typeof document !== 'undefined' && document.body;
  })

  React.useEffect(() => {
    if (mobileOnly && !isMobile()) {
      return;
    }
    if (forceFullScreen) {
      if (screenfull.enabled) {
        screenfull.request(getFullScreenNode());
      }
      return;
    }
    const node = getNode();
    if (node && screenfull.enabled) {
      node.addEventListener('scroll', handleScroll, { passive: true }, true);
    }

    return () => {
      if (mobileOnly && !isMobile()) {
        return;
      }
      if (screenfull.enabled) {
        screenfull.exit();
      }
      if (forceFullScreen) {
        return;
      }
      const node = getNode();
      if (node && screenfull.enabled) {
        node.removeEventListener('scroll', handleScroll);
      }
    }
  }, []);

    return null;
  
}

Screenfull.propTypes = {
  scrollContainerRef: PropTypes.element,
  forceFullScreen: PropTypes.bool,
  mobileOnly: PropTypes.bool,
  maxPixelsForMobile: PropTypes.number
};

Screenfull.defaultProps = {
  scrollContainerRef: null,
  forceFullScreen: false,
  mobileOnly: true,
  maxPixelsForMobile: 768
};

export default Screenfull;