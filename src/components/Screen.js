import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView, ScrollViewProps } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Screen extends Component {
  static defaultProps = {
    scrolled: true
  }

  static propTypes = {
    ...ScrollViewProps,
    navigationHeaderComponent: PropTypes.element,
    scrolled: PropTypes.bool
  }

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
          <SafeAreaView style={this.props.style} forceInset={{ top: 'always' }}>
            {this.props.children}
          </SafeAreaView>
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
          <SafeAreaView style={this.props.style} forceInset={{ top: 'always' }}>
            {this.props.children}
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const AnimatedScreen = connectAnimation(Screen);
const StyledScreen = connectStyle('lh.ui.Screen')(AnimatedScreen);

export { StyledScreen as Screen };
