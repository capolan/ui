import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import RMCPicker from 'rmc-picker/lib/Picker';
import { Popup } from '../';

import { connectStyle } from '@shoutem/theme';

class Picker extends Component {
  static propTypes = {
    selectedValue: PropTypes.string,
    onValueChange: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })).isRequired,
    children: PropTypes.node,
  };

  renderChildren = () => {
    const { children } = this.props;

    return React.cloneElement(children, {
      onPress: () => this.popupRef.open(),
    });
  }

  render() {
    const { data, selectedValue, onValueChange, style } = this.props;
    const children = this.renderChildren();

    return (
      <View>
        {children}
        <Popup onRef={ref => { this.popupRef = ref; }}>
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
