import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal as RNModal, View, TouchableWithoutFeedback } from 'react-native';
import _ from 'lodash';

import { connectStyle } from '@shoutem/theme';

class Modal extends Component {
  static defaultProps = {
    onRef: () => undefined,
  };

  static propTypes = {
    onRef: PropTypes.func,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  };

  shouldComponentUpdate(nextState) {
    return !_.isEqual(nextState, this.state);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  }

  open = () => {
    this.toggle();
  }

  close = () => {
    this.toggle();
  }

  renderBackdrop = () => (
    <TouchableWithoutFeedback onPress={() => this.close()}>
      <View style={this.props.style.backdrop} />
    </TouchableWithoutFeedback>
  );

  render() {
    const { visible } = this.state;
    const { children, ...props } = this.props;
    const style = { ...this.props.style };
    delete style.backdrop;
    const backdrop = this.renderBackdrop();

    return (
      <RNModal
        visible={visible}
        onRequestClose={() => this.close()}
        animationType="fade"
        transparent
      >
        <View style={style} pointerEvents={'box-none'}>
          {backdrop}
          {children}
        </View>
      </RNModal>
    );
  }
}

const StyledModal = connectStyle('lh.ui.Modal')(Modal);

export { StyledModal as Modal };
