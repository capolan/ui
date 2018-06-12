import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native';
import _ from 'lodash';

import { connectStyle } from '@shoutem/theme';

class FormGroup extends Component {
  static defaultProps = {
    onPress: () => null,
  };

  static propTypes = {
    ...ViewPropTypes,
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
  };

  onPress = () => {
    if (this.childRef && _.has(this.childRef, 'focus')) {
      this.childRef.focus();
    } else if (this.childRef && _.has(this.childRef, 'toggle')) {
      this.childRef.toggle();
    }

    this.props.onPress();
  }

  renderChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      if (child.children) return this.renderChildren(children);

      return React.cloneElement(child, {
        onRef: ref => this.childRef = ref,
      });
    });
  }

  render() {
    const { ...props } = this.props
    const style = { ...props.style };

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View {...props} style={style}>
          {this.renderChildren()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const StyledFormGroup = connectStyle('lh.ui.FormGroup')(FormGroup);

export { StyledFormGroup as FormGroup };
