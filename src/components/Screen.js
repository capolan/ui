import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView, ScrollViewProps, View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Screen extends Component {
  static defaultProps = {
    scrolled: true,
  };

  static propTypes = {
    navigationHeaderComponent: PropTypes.element,
    scrolled: PropTypes.bool,
  };

  renderNavigationHeader = () => {
    if (!this.props.navigationHeaderComponent) return null;
    return this.props.navigationHeaderComponent;
  }

  render() {
    const navigationHeader = this.renderNavigationHeader();

    if (!this.props.scrolled) {
      return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          {navigationHeader}
          <View style={this.props.style}>
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
      );
    }

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        {navigationHeader}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardDismissMode="interactive"
          bounces={false}
        >
          <View style={this.props.style}>
            {this.props.children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const AnimatedScreen = connectAnimation(Screen);
const StyledScreen = connectStyle('lh.ui.Screen')(AnimatedScreen);

export { StyledScreen as Screen };
