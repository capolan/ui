import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, ScrollView, ScrollViewProps, View } from 'react-native';

import { connectStyle } from '@shoutem/theme';

class Screen extends Component {
  static defaultProps = {
    scrollEnable: true,
  };

  static propTypes = {
    headerComponent: PropTypes.element,
    scrollEnable: PropTypes.bool,
  };

  renderHeaderComponent = () => {
    if (!this.props.headerComponent) return null;
    return this.props.headerComponent;
  }

  render() {
    const { style, children, scrollEnable } = this.props;
    const header = this.renderHeaderComponent();

    if (!scrollEnable) {
      return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          {header}
          <View style={style}>
            {children}
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
          <View style={style}>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const StyledScreen = connectStyle('lh.ui.Screen')(Screen);

export { StyledScreen as Screen };
