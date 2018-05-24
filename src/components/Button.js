import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Button extends Component {
  static propTypes = {
    ...TouchableOpacity.propTypes,
  };

  render() {
    const { style } = this.props;

    return (
      <TouchableOpacity
        {...this.props}
        style={style}
        activeOpacity={0.8}
      />
    );
  }
}

const AnimatedButton = connectAnimation(Button);
const StyledButton = connectStyle('lh.ui.Button')(AnimatedButton);

export { StyledButton as Button };
