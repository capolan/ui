import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabView } from 'react-native-tab-view';
import _ from 'lodash';
import { TabBar } from '../../';

import { connectStyle } from '@shoutem/theme';

class Tabs extends Component {
  static defaultProps = {
    tabBarPosition: 'top',
    initialTab: 0,
    scrollEnabled: true,
  };

  static propTypes = {
    tabBarPosition: PropTypes.oneOf(['top', 'bottom']),
    initialTab: PropTypes.number,
    scrollEnabled: PropTypes.bool,
    renderIcon: PropTypes.func,
    renderLabel: PropTypes.func,
    onTabPress: PropTypes.func,
    onChange: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      index: props.initialTab || 0,
      routes: [],
    };
  }

  componentWillMount() {
    this.getRoutes();
  }

  onIndexChange = (index) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(index);
    }
    this.setState({ index });
  }

  getRoutes = () => {
    const { children } = this.props;
    const routes = React.Children.map(children, (child, index) => {
      const key = child.key || `tab${index}`;
      return {
        key,
        title: child.props.label,
        icon: child.props.icon,
      };
    });
    this.setState({ routes });
  }

  renderScene = ({ route }) => {
    const { children } = this.props;

    return React.Children.map(children, (child, index) => {
      const key = child.key || `tab${index}`;
      if (route.key !== key) return null;
      return child.props.children;
    });
  }

  renderTabBar = (props) => {
    const { scrollEnabled, renderIcon, renderLabel, onTabPress } = this.props;
    return (
      <TabBar
        {...props}
        scrollEnabled={scrollEnabled}
        renderIcon={renderIcon}
        renderLabel={renderLabel}
        onTabPress={onTabPress}
      />
    );
  };

  render() {
    const { style, tabBarPosition } = this.props;

    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={style.initialLayout}
        tabBarPosition={tabBarPosition}
      />
    );
  }
}

const StyledTabs = connectStyle('lh.ui.Tabs')(Tabs);

export { StyledTabs as Tabs };
