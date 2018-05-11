import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class FormGroup extends Component {
  static propTypes = {
    ...ViewPropTypes,
    style: PropTypes.object,
  };

  render() {
    const style = { ...this.props.style };

    return (
      <View {...this.props} style={style}>
        {this.props.children}
      </View>
    );
  }
}

const AnimatedFormGroup = connectAnimation(FormGroup);
const StyledFormGroup = connectStyle('lh.ui.FormGroup')(AnimatedFormGroup);

export { StyledFormGroup as FormGroup };
