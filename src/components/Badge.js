import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from './Text';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Badge extends Component {
  static defaultProps = {
    count: null,
    overflowCount: 99,
  };

  static propTypes = {
    count: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    overflowCount: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    children: PropTypes.node,
    style: PropTypes.object,
  };

  render() {
    const { count, overflowCount, children } = this.props;
    const style = { ...this.props.style };
    delete style.count;
    const displayCount = Number(count) > Number(overflowCount) ? `${overflowCount}+` : Number(count);

    return (
      <View style={style}>
        {children}
        <View style={this.props.style.count}>
          <Text>{displayCount}</Text>
        </View>
      </View>
    );
  }
}

const AnimatedBadge = connectAnimation(Badge);
const StyledBadge = connectStyle('lh.ui.Badge')(AnimatedBadge);

export { StyledBadge as Badge };
