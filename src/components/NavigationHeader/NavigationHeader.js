import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, StatusBarProps, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // not sure package name

import { SafeAreaView } from '@react-navigation/native';
import _ from 'lodash';
import color from 'tinycolor2';

import { connectStyle } from '@shoutem/theme';

import composeComponents from './ComposeComponents';

class NavigationHeader extends Component {
  static propTypes = {
    leftComponent: PropTypes.element,
    centerComponent: PropTypes.element,
    rightComponent: PropTypes.element,
    statusBarOptions: PropTypes.object,
    style: PropTypes.object,
  };

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps, this.props);
  }

  componentDidMount() {
    this.setStatusBarStyle();
  }

  componentWillUpdate() {
    this.setStatusBarStyle();
  }

  getBackgroundColor = () => {
    const { style } = this.props;
    const bgColor = _.find(style, (styleDef) =>
      styleDef.backgroundColor && styleDef.backgroundColor !== 'transparent'
    );
    return bgColor && bgColor.backgroundColor || 'transparent';
  }

  getBackgroundColorBrightness = (backgroundColor) => {
    return color(backgroundColor).isDark();
  }

  setStatusBarStyle = () => {
    const backgroundColor = this.getBackgroundColor();
    const barStyle = this.getBackgroundColorBrightness(backgroundColor)
      ? 'light-content'
      : 'dark-content';

    StatusBar.setBarStyle(barStyle, true);

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(backgroundColor);
      StatusBar.setTranslucent(false);
    }
  }

  render() {
    const {
      leftComponent,
      rightComponent,
      centerComponent,
      style,
    } = this.props;

    return (
      <SafeAreaView style={style.container} forceInset={{ top: 'always' }}>
        <View style={style.componentsContainer}>
          <View style={style.leftComponent}>{leftComponent}</View>
          <View style={style.centerComponent}>{centerComponent}</View>
          <View style={style.rightComponent}>{rightComponent}</View>
        </View>
      </SafeAreaView>
    );
  }
}

const StyledNavigationHeader = connectStyle('lh.ui.NavigationHeader')(NavigationHeader);

const ComposedNavigationHeader = () => {
return () => {
  const navigation = useNavigation();
  return <StyledNavigationHeader navigation={navigation} {...props} />;
}
}


export {
  ComposedNavigationHeader as NavigationHeader,
};
