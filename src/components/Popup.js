import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import _ from 'lodash';
import { Modal, Card, Button, Text } from '../';

import { connectStyle } from '@shoutem/theme';

class Popup extends Component {
  static defaultProps = {
    onRef: () => undefined,
    doneText: 'Done',
  };

  static propTypes = {
    onRef: PropTypes.func,
    headerCenter: PropTypes.element,
    headerLeft: PropTypes.element,
    headerRight: PropTypes.element,
    doneText: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps, this.props);
  }

  onRef = (ref) => {
    this.modalRef = ref;
    this.props.onRef(ref);
  }

  renderHeader = () => {
    const { style, headerCenter, headerLeft, headerRight, doneText } = this.props;

    return (
      <View style={style.header}>
        <View>{headerLeft}</View>
        <View>{headerCenter}</View>
        <View>
          {headerRight ? headerRight : (
            <Button styleName="clear" onPress={() => this.modalRef.close()}>
              <Text styleName="bold dark">{doneText}</Text>
            </Button>
          )}
        </View>
      </View>
    );
  }

  render() {
    const { children, ...props } = this.props;
    const style = { ...props.style };
    delete style.header;
    const header = this.renderHeader();

    return (
      <Modal onRef={this.onRef}>
        <View style={style} pointerEvents={'box-none'}>
          <Card styleName="rounded-corners">
            {header}
            {children}
          </Card>
        </View>
      </Modal>
    );
  }
}

const StyledPopup = connectStyle('lh.ui.Popup')(Popup);

export { StyledPopup as Popup };
