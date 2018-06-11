import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, ScrollView, TouchableOpacity } from 'react-native';
import { TabBar as RNTabBar, TabBarProps } from 'react-native-tab-view';
import { Text } from '../../';

import { connectStyle } from '@shoutem/theme';

class TabBar extends Component {
  static propTypes = {
    ...TabBarProps,
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.indicatorsValue = {};
  }

  onTabPress = ({ scene }) => {
    const { onTabPress, jumpTo } = this.props;

    if (onTabPress) {
      onTabPress({ scene });
    }

    jumpTo(scene.key);
  }

  renderLabel = ({ scene }) => {
    const { style, renderLabel } = this.props;

    if (renderLabel) {
      return renderLabel(scene);
    }

    if (typeof scene.title !== 'string') {
      return null;
    }

    return (
      <Text styleName={scene.focused ? 'bold' : ''} style={style.label}>
        {scene.title}
      </Text>
    );
  }

  renderIcon = ({ scene }) => {
    const { style, renderIcon } = this.props;

    if (renderIcon) {
      return renderIcon(scene);
    }

    if (typeof scene.icon !== 'string') {
      return null;
    }

    return <Icon name={scene.icon} />;
  }

  renderIndicator = ({ scene }) => {
    const { style, ...props } = this.props;
    const { focused } = scene;
    const position = new Animated.Value(focused ? 1 : 0);

    const bottom = position.interpolate({
      inputRange: [0, 1],
      outputRange: [-3, 0],
    });

    return (
      <Animated.View style={[style.indicator, { bottom }]} />
    );
  }

  renderTabs = () => {
    const { scrollEnabled, navigationState, layout, style } = this.props;
    const { routes } = navigationState;

    return routes.map((route, index) => {
      const focused = index === navigationState.index;
      const scene = { ...route, focused };
      const icon = this.renderIcon({ scene });
      const label = this.renderLabel({ scene });
      const indicator = this.renderIndicator({ scene });

      const tabStyle = [
        style.tab,
        !scrollEnabled && { width: layout.width / routes.length },
      ];

      return (
        <TouchableOpacity
          key={route.key}
          onPress={() => this.onTabPress({ scene })}
          delayPressIn={0}
          activeOpacity={0.8}
        >
          <View style={tabStyle}>
            {icon}
            {label}
            {indicator}
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    const { scrollEnabled, ...props } = this.props;
    const style = { ...props.style };
    delete style.scroll;
    delete style.tab;
    delete style.tabFocused;
    delete style.label;
    delete style.indicator;

    const tabs = this.renderTabs();

    return (
      <View style={[style, { width: props.layout.width }]}>
          <ScrollView
            contentContainerStyle={props.style.scroll}
            keyboardShouldPersistTaps="handled"
            overScrollMode="never"
            scrollEnabled={scrollEnabled}
            showsHorizontalScrollIndicator={false}
            scrollsToTop={false}
            alwaysBounceHorizontal={false}
            bounces={false}
            horizontal
          >
            {tabs}
          </ScrollView>
        </View>
    );
  }
}

const StyledTabBar = connectStyle('lh.ui.TabBar')(TabBar);

export { StyledTabBar as TabBar };
