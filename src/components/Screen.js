import React, { Component } from 'react';
import { KeyboardAvoidingView, ScrollView, ViewPropTypes } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Screen extends Component {
  static propTypes = {
    ...ViewPropTypes,
  }

  render() {
    const { props } = this;
    const style = {
      ...props.style,
    };
    delete style.keyboardAvoidingView;

    return (
      <KeyboardAvoidingView style={props.style.keyboardAvoidingView} behavior="padding">
        <ScrollView
          contentContainerStyle={style}
          keyboardDismissMode="interactive"
          bounces={false}
        >
          {this.props.children}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const AnimatedScreen = connectAnimation(Screen);
const StyledScreen = connectStyle('lh.ui.Screen')(AnimatedScreen);

export { StyledScreen as Screen };
