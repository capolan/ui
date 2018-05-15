import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

import composeComponents from './ComposeComponents';

class NavigationHeader extends Component {
  static defaultProps = {
    id: 'default',
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    leftComponent: PropTypes.node,
    centerComponent: PropTypes.node,
    rightComponent: PropTypes.node,
    style: PropTypes.object,
    id: PropTypes.string,
  };

  render() {
    const {
      leftComponent,
      rightComponent,
      centerComponent,
      style,
      id,
    } = this.props;

    return (
      <SafeAreaView style={style.container} key={id}>
        <View style={style.componentsContainer}>
          <View style={style.leftComponent}>{leftComponent}</View>
          <View style={style.centerComponent}>{centerComponent}</View>
          <View style={style.rightComponent}>{rightComponent}</View>
        </View>
      </SafeAreaView>
    );
  }
}

const AnimatedNavigationHeader = connectAnimation(
  composeComponents(NavigationHeader)
);
const StyledNavigationHeader = connectStyle('lh.ui.NavigationHeader')(AnimatedNavigationHeader);

export {
  StyledNavigationHeader as NavigationHeader,
};
