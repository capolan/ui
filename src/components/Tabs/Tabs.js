import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabView, SceneMap } from 'react-native-tab-view';
import _ from 'lodash';
import { TabBar } from '../../';

import { connectStyle } from '@shoutem/theme';

class Tabs extends Component {
  static defaultProps = {
    initialTab: 0,
    tabBarPosition: 'top',
  };

  static propTypes = {
    initialTab: PropTypes.number,
    tabBarPosition: PropTypes.oneOf(['top', 'bottom']),
    onChange: PropTypes.func,
    renderIcon: PropTypes.func,
    renderLabel: PropTypes.func,
    onTabPress: PropTypes.func,
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

  getScenes = () => {
    const { children } = this.props;
    const scenes = React.Children.map(children, (child, index) => {
      const key = child.key || `tab${index}`;
      return {
        [key]: child.props.children,
      };
    });
    return Object.assign({}, ...scenes);
  }

  renderTabBar = (props) => {
    const { renderIcon, renderLabel, onTabPress } = this.props;
    return (
      <TabBar
        {...props}
        renderIcon={renderIcon}
        renderLabel={renderLabel}
        onTabPress={onTabPress}
      />
    );
  };

  render() {
    const { style, tabBarPosition } = this.props;
    const scenes = this.getScenes();

    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap(scenes)}
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
