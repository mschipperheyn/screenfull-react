/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import screenfull from "screenfull";

/**
 * The underlying scrollContainerRef should be an actual node, not a Fragment. Otherwise, it will just be null
 * You HAVE to make sure overflow-x is not set on the scrollContainerRef or body. This will make scrollTop default to 0 on Chrome Mobile
 */

const getFullScreenNode = () => document.documentElement || document.body;

const isMobile = maxPixelsForMobile => {
  if (typeof window === "undefined") {
    return false;
  }
  const width = window.innerWidth;
  return width <= maxPixelsForMobile;
};

const Screenfull = ({
  scrollContainerRef,
  forceFullScreen,
  mobileOnly,
  maxPixelsForMobile
}) => {
  const scroll = React.useRef(0);

  const handleScroll = React.useCallback(event => {
    const scrollPos = event.currentTarget.scrollTop;
    let going = "down";
    const scrollCurrent = scroll.current;
    if (scrollCurrent !== 0 && scrollPos < scrollCurrent) {
      going = "up";
    }

    scroll.current = scrollPos;

    if (going === "up" && screenfull.isFullscreen) {
      screenfull.exit();
    } else if (going === "down" && !screenfull.isFullscreen) {
      screenfull.request(getFullScreenNode());
    }
  }, []);

  const getNode = React.useCallback(() => {
    return scrollContainerRef
      ? ReactDOM.findDOMNode(scrollContainerRef) // eslint-disable-line react/no-find-dom-node
      : typeof document !== "undefined" && document.body;
  });

  React.useEffect(() => {
    if (mobileOnly && !isMobile(maxPixelsForMobile)) {
      return;
    }
    if (forceFullScreen) {
      if (screenfull.isEnabled) {
        screenfull.request(getFullScreenNode());
      }
      return;
    }
    const node = getNode();
    if (node && screenfull.isEnabled) {
      node.addEventListener("scroll", handleScroll, { passive: true }, true);
    }
  }, [mobileOnly, forceFullScreen]);

  React.useEffect(() => {
    return () => {
      if (screenfull.isEnabled) {
        screenfull.exit();
      }
      const node = getNode();
      if (node) {
        node.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return null;
};

Screenfull.propTypes /* remove-proptypes */ = {
  scrollContainerRef: PropTypes.element,
  forceFullScreen: PropTypes.bool,
  mobileOnly: PropTypes.bool,
  maxPixelsForMobile: PropTypes.number
};

Screenfull.defaultProps /* remove-proptypes */ = {
  scrollContainerRef: null,
  forceFullScreen: false,
  mobileOnly: true,
  maxPixelsForMobile: 768
};

export default Screenfull;
