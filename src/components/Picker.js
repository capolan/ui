import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import RMCPicker from 'rmc-picker/lib/Picker';
import { isTouchableElement, invalidTouchableChildrenElement } from '../utils';
import { Popup } from '../';

import { connectStyle } from '@shoutem/theme';

class Picker extends Component {
  static defaultProps = {
    onClose: () => undefined,
  };

  static propTypes = {
    selectedValue: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    onClose: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })).isRequired,
    children: PropTypes.node,
  };

  renderChildren = () => {
    const { children } = this.props;

    if (isTouchableElement(children)) {
      return React.cloneElement(children, {
        onPress: () => this.popupRef.open(),
      });
    } else {
      invalidTouchableChildrenElement('Picker');
    }

    return null;
  }

  render() {
    const { data, selectedValue, onValueChange, onClose, style } = this.props;
    const children = this.renderChildren();

    return (
      <View>
        {children}
        <Popup onRef={ref => { this.popupRef = ref; }} onClose={onClose}>
          <RMCPicker
            itemStyle={style.item}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
          >
            {data.map(item => (
              <RMCPicker.Item key={item.value} value={item.value}>
                {item.label}
              </RMCPicker.Item>
            ))}
          </RMCPicker>
        </Popup>
      </View>
    );
  }
}

const StyledPicker = connectStyle('lh.ui.Picker')(Picker);

export { StyledPicker as Picker };
