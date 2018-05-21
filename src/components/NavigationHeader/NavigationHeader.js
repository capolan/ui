import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Platform, View } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import * as _ from 'lodash';
import color from 'tinycolor2';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

import composeComponents from './ComposeComponents';

class NavigationHeader extends Component {
  static defaultProps = {
    id: 'default',
  };

  static propTypes = {
    navigation: PropTypes.object,
    leftComponent: PropTypes.node,
    centerComponent: PropTypes.node,
    rightComponent: PropTypes.node,
    style: PropTypes.object,
    id: PropTypes.string,
  };

  getBackgroundColor = (style) => {
    const bgColor = _.find(style, (styleDef) =>
      styleDef.backgroundColor && styleDef.backgroundColor !== 'transparent'
    );
    return bgColor && bgColor.backgroundColor || 'transparent';
  }

  setStatusBarStyle = (backgroundColor) => {
    const barStyle = color(backgroundColor).isDark()
      ? 'light-content'
      : 'dark-content';

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(backgroundColor);
    }
    StatusBar.setBarStyle(barStyle);
  }

  render() {
    const {
      leftComponent,
      rightComponent,
      centerComponent,
      style,
      id,
    } = this.props;

    const backgroundColor = this.getBackgroundColor(style);
    this.setStatusBarStyle(backgroundColor);

    return (
      <SafeAreaView key={id} style={style.container} forceInset={{ top: 'always' }}>
        <View style={style.componentsContainer}>
          <View style={style.leftComponent}>{leftComponent}</View>
          <View style={style.centerComponent}>{centerComponent}</View>
          <View style={style.rightComponent}>{rightComponent}</View>
        </View>
      </SafeAreaView>
    );
  }
}

const NavigatedNavigationHeader = withNavigation(NavigationHeader);
const AnimatedNavigationHeader = connectAnimation(
  composeComponents(NavigatedNavigationHeader)
);
const StyledNavigationHeader = connectStyle('lh.ui.NavigationHeader')(AnimatedNavigationHeader);

export {
  StyledNavigationHeader as NavigationHeader,
};
