import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Icon extends Component {
  static defaultProps = {
    size: 24,
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
  };

  render() {
    const IconComponent = Feather;
    const style = { ...this.props.style };
    delete style.color;
    const color = this.props.style.color;

    return (
      <IconComponent
        style={style}
        name={this.props.name}
        size={this.props.size}
        color={color}
      />
    );
  }
}

const AnimatedIcon = connectAnimation(Icon);
const StyledIcon = connectStyle('lh.ui.Icon')(AnimatedIcon);

export { StyledIcon as Icon };
