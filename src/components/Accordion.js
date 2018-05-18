import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, TouchableOpacity } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Accordion extends Component {
  static defaultProps = {
    duration: 100,
    expanded: false,
  };

  static propTypes = {
    renderHeader: PropTypes.func.isRequired,
    renderContent: PropTypes.func.isRequired,
    easing: PropTypes.string,
    duration: PropTypes.number,
    expanded: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
  };

  state = {
    visible: false,
    height: new Animated.Value(),
    contentHeight: null,
  };

  componentDidMount() {
    setTimeout(() => this.getContentHeight());
  }

  getContentHeight = () => {
    if (this.contentRef) {
      this.contentRef.measure((x, y, width, height) => {
        this.setState({
          visible: this.props.expanded,
          contentHeight: height
        });
        this.state.height.setValue(this.props.expanded ? height : 0);
      });
    }
  }

  toggle = () => {
    Animated.timing(
      this.state.height,
      {
        toValue: this.state.visible ? 0 : this.state.contentHeight,
        duration: this.props.duration,
      }
    ).start(() => this.setState({ visible: !this.state.visible }));
  }

  onPress = () => {
    this.toggle();

    if (this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {
    const { props } = this;
    const style = { ...props.style };
    let animatedViewStyle = {};
    delete style.content;

    if (this.state.contentHeight) {
      animatedViewStyle = {
        height: this.state.height,
      }
    }

    return (
      <View style={style}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.onPress}
        >
          {props.renderHeader(this.state.visible)}
        </TouchableOpacity>
        <Animated.View style={animatedViewStyle}>
          <View ref={ref => { this.contentRef = ref; }} style={this.props.style.content}>
            {props.renderContent(this.state.visible)}
          </View>
        </Animated.View>
      </View>
    );
  }
}

const AnimatedAccordion = connectAnimation(Accordion);
const StyledAccordion = connectStyle('lh.ui.Accordion')(AnimatedAccordion);

export { StyledAccordion as Accordion };
