import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { connectStyle } from '@shoutem/theme';

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

const StyledButton = connectStyle('lh.ui.Button')(Button);

export { StyledButton as Button };
