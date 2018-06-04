import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View, ViewPropTypes } from 'react-native';
import _ from 'lodash';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class FormGroup extends Component {
  static propTypes = {
    ...ViewPropTypes,
    children: PropTypes.node,
    style: PropTypes.object,
    onPress: PropTypes.func,
  };

  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }

    if (this.textInputRef) {
      this.textInputRef.focus();
    } else if (this.toggleRef) {
      this.toggleRef.toggle();
    }
  }

  renderChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => {
      if (child.children) return this.renderChildren(children);
      if (_.includes(child.type.displayName, 'TextInput')) {
        return React.cloneElement(child, {
          onRef: ref => this.textInputRef = ref,
        });
      } else if (_.includes(child.type.displayName, 'Radio')) {
        return React.cloneElement(child, {
          onRef: ref => this.toggleRef = ref,
        });
      } else if (_.includes(child.type.displayName, 'Checkbox')) {
        return React.cloneElement(child, {
          onRef: ref => this.toggleRef = ref,
        });
      } else if (_.includes(child.type.displayName, 'Switch')) {
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

const AnimatedFormGroup = connectAnimation(FormGroup);
const StyledFormGroup = connectStyle('lh.ui.FormGroup')(AnimatedFormGroup);

export { StyledFormGroup as FormGroup };
