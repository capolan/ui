import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Icon extends Component {
  static defaultProps = {
    library: 'Feather',
    size: 24,
  };

  static propTypes = {
    library: PropTypes.oneOf(['Feather', 'MaterialIcons', 'Ionicons']),
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
  };

  renderIcon = () => {
    if (this.props.library === 'Feather') {
      return Feather;
    } else if (this.props.library === 'MaterialIcons') {
      return MaterialIcons;
    } else if (this.props.library === 'Ionicons') {
      return Ionicons;
    }
    return null;
  }

  render() {
    const IconComponent = this.renderIcon();
    const color = this.props.style.color;

    return (
      <IconComponent name={this.props.name} size={this.props.size} color={color} />
    );
  }
}

const AnimatedIcon = connectAnimation(Icon);
const StyledIcon = connectStyle('lh.ui.Icon')(AnimatedIcon);

export { StyledIcon as Icon };
