import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput as RNTextInput } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class TextInput extends Component {
  static propTypes = {
    ...RNTextInput.propTypes,
    onRef: PropTypes.func,
    style: PropTypes.object,
  };

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(undefined);
    }
  }

  focus = () => {
    this.inputRef.focus();
  }

  render() {
    const { ...props } = this.props;
    const style = { ...props.style };
    delete style.placeholderTextColor;
    delete style.selectionColor;
    delete style.underlineColorAndroid;

    return (
      <RNTextInput
        ref={ref => { this.inputRef = ref; }}
        {...props}
        style={style}
        placeholderTextColor={props.style.placeholderTextColor}
        selectionColor={props.style.selectionColor}
        underlineColorAndroid={props.style.underlineColorAndroid}
      />
    );
  }
}

const AnimatedTextInput = connectAnimation(TextInput);
const StyledTextInput = connectStyle('lh.ui.TextInput')(AnimatedTextInput);

export { StyledTextInput as TextInput };
