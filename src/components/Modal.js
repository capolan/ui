import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal as RNModal,
  View as RNView,
  TouchableWithoutFeedback,
} from 'react-native';
import { View } from '../';

import { connectStyle } from '@shoutem/theme';

class Modal extends Component {
  static defaultProps = {
    visible: false,
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  close = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState({ visible: false });
  }

  renderBackdrop = () => (
    <TouchableWithoutFeedback onPress={this.close}>
      <RNView style={this.props.style.backdrop} />
    </TouchableWithoutFeedback>
  );

  render() {
    const style = { ...this.props.style };
    delete style.backdrop;

    return (
      <RNModal
        visible={this.state.visible}
        onRequestClose={this.close}
        animationType="fade"
        transparent
      >
        <View
          style={style}
          styleName="vertical v-center h-center md-gutter"
          pointerEvents={'box-none'}
        >
          {this.renderBackdrop()}
          {this.props.children}
        </View>
      </RNModal>
    );
  }
}

const StyledModal = connectStyle('lh.ui.Modal')(Modal);

export { StyledModal as Modal };
