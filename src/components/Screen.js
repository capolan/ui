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
    headerComponent: PropTypes.element,
    scrolled: PropTypes.bool,
  };

  renderHeaderComponent = () => {
    if (!this.props.headerComponent) return null;
    return this.props.headerComponent;
  }

  render() {
    const header = this.renderHeaderComponent();

    if (!this.props.scrolled) {
      return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          {header}
          <View style={this.props.style}>
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
      );
    }

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        {header}
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
