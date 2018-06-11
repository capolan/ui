import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import I18n from '../i18n';
import { Modal, Card, Button, Text } from '../';

import { connectStyle } from '@shoutem/theme';

class Popup extends Component {
  static defaultProps = {
    onRef: () => undefined,
  };

  static propTypes = {
    onRef: PropTypes.func,
    headerCenter: PropTypes.element,
    headerLeft: PropTypes.element,
    headerRight: PropTypes.element,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  onRef = (ref) => {
    this.modalRef = ref;
    this.props.onRef(ref);
  }

  renderHeader = () => {
    const { headerCenter, headerLeft, headerRight, style } = this.props;

    console.log(I18n())

    return (
      <View style={style.header}>
        <View>{headerLeft}</View>
        <View>{headerCenter}</View>
        <View>
          {headerRight ? headerRight : (
            <Button styleName="clear" onPress={() => this.modalRef.close()}>
              <Text styleName="bold dark">
                {I18n('done')}
              </Text>
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
