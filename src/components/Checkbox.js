import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

import { View } from './View';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation, TimingDriver } from '@shoutem/animation';

class Checkbox extends Component {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    onValueChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
      container: PropTypes.object,
    }),
  };

  constructor(props) {
    super(props);

    this.timingDriver = new TimingDriver();
    this.setValue(props.value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value === this.props.value) {
      return;
    }
    this.setValue(nextProps.value);
  }

  setValue = (value) => {
    this.timingDriver.toValue(value ? 1 : 0);
  };

  handlePressed = () => {
    const { value, onValueChange } = this.props;
    onValueChange(!value);
  };

  render() {
    const { style } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={this.handlePressed}
        styleName="clear"
      >
        <View>
          <View
            animationName="thumb"
            driver={this.timingDriver}
            style={style.container}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const AnimatedCheckbox = connectAnimation(Checkbox);
const StyledCheckbox = connectStyle('lh.ui.Checkbox')(AnimatedCheckbox);

export { StyledCheckbox as Checkbox };
