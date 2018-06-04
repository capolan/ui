import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

import { View } from './View';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation, TimingDriver } from '@shoutem/animation';

class Radio extends Component {
  static propTypes = {
    onRef: PropTypes.func,
    value: PropTypes.bool.isRequired,
    onValueChange: PropTypes.func.isRequired,
    style: PropTypes.shape({
      container: PropTypes.object,
    }),
  };

  constructor(props) {
    super(props);

    this.timingDriver = new TimingDriver({ duration: 150 });
    this.setValue(props.value);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setValue(nextProps.value);
    }
  }

  setValue = (value) => {
    this.timingDriver.toValue(value ? 1 : 0);
  };

  toggle = () => {
    const { value, onValueChange } = this.props;
    onValueChange(!value);
  };

  render() {
    const { style } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={this.toggle}
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

const AnimatedRadio = connectAnimation(Radio);
const StyledRadio = connectStyle('lh.ui.Radio')(AnimatedRadio);

export { StyledRadio as Radio };
