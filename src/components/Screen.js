import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView, ScrollViewProps, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Screen extends Component {
  static defaultProps = {
    safeAreaView: false,
    scrolled: true
  };

  static propTypes = {
    ...ScrollViewProps,
    navigationHeaderComponent: PropTypes.element,
    safeAreaView: PropTypes.bool,
    scrolled: PropTypes.bool
  };

  renderNavigationHeader = () => {
    if (!this.props.navigationHeaderComponent) return null;
    return this.props.navigationHeaderComponent;
  }

  renderContent = () => {
    if (this.props.safeAreaView) {
      return (
        <SafeAreaView style={this.props.style} forceInset={{ top: 'always' }}>
          {this.props.children}
        </SafeAreaView>
      );
    }

    return (
      <View style={this.props.style}>
        {this.props.children}
      </View>
    );
  }

  render() {
    const navigationHeader = this.renderNavigationHeader();

    if (!this.props.scrolled) {
      return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          {navigationHeader}
          {this.renderContent()}
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
          {this.renderContent()}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const AnimatedScreen = connectAnimation(Screen);
const StyledScreen = connectStyle('lh.ui.Screen')(AnimatedScreen);

export { StyledScreen as Screen };
