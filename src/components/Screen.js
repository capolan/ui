import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
} from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Screen extends Component {
  static propTypes = {
    ...ScrollViewProps,
    renderNavigationHeader: PropTypes.element,
  }

  renderNavigationHeader = () => {
    if (!this.props.renderNavigationHeader) return null;
    return this.props.renderNavigationHeader;
  }

  render() {
    const navigationHeader = this.renderNavigationHeader();

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        {navigationHeader}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardDismissMode="interactive"
          bounces={false}
        >
          <SafeAreaView style={this.props.style}>
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
