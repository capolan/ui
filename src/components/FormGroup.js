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
    if (this.textInputRef) {
      this.textInputRef.focus();
    } else if (this.toggleRef) {
      this.toggleRef.toggle();
    }

    this.props.onPress();
  }

  renderChildren = () => {
    const { children } = this.props;
    const TOGGLE_ELEMENTS = ['Checkbox', 'Radio', 'Switch'];

    return React.Children.map(children, (child, index) => {
      if (child.children) return this.renderChildren(children);

      if (child.type.displayName === 'TextInput') {
        return React.cloneElement(child, {
          onRef: ref => this.textInputRef = ref,
        });
      } else if (_.find(TOGGLE_ELEMENTS, (name) => name === child.type.displayName)) {
        return React.cloneElement(child, {
          onRef: ref => this.toggleRef = ref,
        });
      }

      return child;
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

StyledFormGroup.displayName = 'FormGroup';

export { StyledFormGroup as FormGroup };
