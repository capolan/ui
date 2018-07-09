import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

class Collapsible extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.element.isRequired,
    headerComponent: PropTypes.func.isRequired,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    expanded: false,
    disabled: false,
    onPress: () => null,
  };

  constructor(props) {
    super(props);

    this.state = {
      isVisible: props.expanded,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }));
  }

  onPress = () => {
    const { onPress } = this.props;
    this.toggle();
    onPress(this.state.isVisible);
  }

  render() {
    const { children, headerComponent, disabled } = this.props;
    const { isVisible } = this.state;

    return (
      <View>
        <TouchableOpacity onPress={() => this.onPress()} disabled={disabled}>
          {headerComponent(isVisible)}
        </TouchableOpacity>
        <View>
          {isVisible && children}
        </View>
      </View>
    );
  }
}

export { Collapsible };
