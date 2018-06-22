import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';

/**
 * The underlying scrollContainerRef should be an actual node, not a Fragment. Otherwise, it will just be null
 * You HAVE to make sure overflow-x is not set on the scrollContainerRef or body. This will make scrollTop default to 0 on Chrome Mobile
 */
export default class Screenfull extends React.PureComponent {
  static propTypes = {
    scrollContainerRef: PropTypes.element,
    forceFullScreen: PropTypes.bool,
    mobileOnly: PropTypes.bool,
    maxPixelsForMobile: PropTypes.number
  };

  static defaultProps = {
    scrollContainerRef: null,
    forceFullScreen: false,
    mobileOnly: true,
    maxPixelsForMobile: 768
  };

  constructor(props) {
    super(props);
    this.scroll = 0;
  }

  componentDidMount() {
    const { forceFullScreen, mobileOnly } = this.props;
    if (mobileOnly && !this.isMobile()) return;
    if (forceFullScreen) {
      if (screenfull.enabled) screenfull.request(this.getFullScreenNode());
      return;
    }

    const node = this.getNode();
    if (node && screenfull.enabled) {
      node.addEventListener('scroll', this.handleScroll, { passive: true }, true);
    }
  }

  componentWillUnmount() {
    const { forceFullScreen, mobileOnly } = this.props;
    if (mobileOnly && !this.isMobile()) return;
    if (screenfull.enabled) screenfull.exit();
    if (forceFullScreen) {
      return;
    }
    const node = this.getNode();
    if (node && screenfull.enabled) {
      node.removeEventListener('scroll', this.handleScroll);
    }
  }

  getNode = () => {
    const { scrollContainerRef } = this.props;
    return scrollContainerRef
      ? ReactDOM.findDOMNode(scrollContainerRef) // eslint-disable-line react/no-find-dom-node
      : typeof document !== 'undefined' && document.body;
  };

  getFullScreenNode = () => document.documentElement || document.body;

  isMobile() {
    const { maxPixelsForMobile } = this.props;
    if (typeof window === 'undefined') return false;
    const width = window.innerWidth;
    return width <= maxPixelsForMobile;
  }

  handleScroll = event => {
    const scrollPos = event.currentTarget.scrollTop;
    let going = 'down';
    if (this.scroll !== 0 && scrollPos < this.scroll) going = 'up';

    this.scroll = scrollPos;

    if (going === 'up' && screenfull.isFullscreen) {
      screenfull.exit();
    } else if (going === 'down' && !screenfull.isFullscreen) {
      screenfull.request(this.getFullScreenNode());
    }
  };

  render() {
    return null;
  }
}
