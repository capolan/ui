import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar as RNTabBar, TabBarProps } from 'react-native-tab-view';
import { View, Text } from '../../';

import { connectStyle } from '@shoutem/theme';

class TabBar extends Component {
  static propTypes = {
    ...TabBarProps,
    style: PropTypes.object,
  };

  renderLabel = ({ route }) => {
    const { style, renderLabel } = this.props;
    if (renderLabel) {
      return (
        <View>
          {renderLabel(route)}
        </View>
      );
    }

    return (
      <View>
        <Text style={style.label}>{route.title}</Text>
      </View>
    );
  }

  render() {
    const { ...props } = this.props;
    const style = { ...props.style };
    delete style.tab;
    delete style.label;
    delete style.indicator;

    return (
      <RNTabBar
        {...props}
        style={style}
        tabStyle={props.style.tab}
        labelStyle={props.style.label}
        indicatorStyle={props.style.indicator}
        renderLabel={this.renderLabel}
      />
    );
  }
}

const StyledTabBar = connectStyle('lh.ui.TabBar')(TabBar);

export { StyledTabBar as TabBar };
