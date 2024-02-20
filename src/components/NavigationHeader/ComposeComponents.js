import React, { Component } from 'react';
import { View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import _ from 'lodash';

import { Button } from '../Button';
import { Title } from '../Text';
import { Icon } from '../Icon';

const components = {
  title: (value, props) => ({
    centerComponent: (
      <Title animationName={props.animationName} numberOfLines={1}>
        {value || ''}
      </Title>
    ),
  }),
  hasDrawer: (value, props) => {
    const leftComponent = value ? (
      <Button
        styleName="clear"
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Icon name="menu" animationName={props.animationName} />
      </Button>
    ) : <View />;

    return { leftComponent };
  },
  hasHistory: (value, props) => {
    const leftComponent = value ? (
      <Button
        styleName="clear"
        onPress={() => props.navigation.goBack(null)}
      >
        <Icon name="arrow-left" animationName={props.animationName} />
      </Button>
    ) : <View />;

    return { leftComponent };
  },
}

/**
 * If source (usually state set by component) has undefined
 * property values, ignore those properties.
 * @param objValue
 * @param srcValue
 * @returns {*}
 */
function skipUndefined(objValue, srcValue) {
  return _.isUndefined(srcValue) ? objValue : srcValue;
}

const composeComponents = NavigationHeaderComponent => class extends Component {
  render() {
    const newProps = {};
    if (this.props.hasDrawer && this.props.hasHistory) {
      console.warn(`Can't use hasDrawer and hasHistory props at the same time on NavigationHeader`);
    }

    _.forEach(this.props, (value, key) => {
      if (_.isFunction(components[key])) {
        _.assign(newProps, components[key](value, this.props));
      }
    });

    return (
      <NavigationHeaderComponent
        {..._.assignWith(newProps, this.props, skipUndefined)}
      />
    );
  }
};

export default composeComponents;
