import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { isTouchableElement, invalidTouchableChildrenElement } from '../utils';
import { Popup, Calendar, Button, Text } from '../';

import { connectStyle } from '@shoutem/theme';

class CalendarPicker extends Component {
  static defaultProps = {
    clearText: 'Clear',
  };

  static propTypes = {
    ...Calendar.propTypes,
    clearText: PropTypes.string,
    children: PropTypes.node,
  };

  renderClearButton = () => (
    <Button styleName="clear end" onPress={() => this.calendarRef.clear()}>
      <Text styleName="bold dark">{this.props.clearText}</Text>
    </Button>
  );

  renderChildren = () => {
    const { children } = this.props;

    if (isTouchableElement(children)) {
      return React.cloneElement(children, {
        onPress: () => this.popupRef.open(),
      });
    } else {
      invalidTouchableChildrenElement('CalendarPicker');
    }

    return null;
  }

  render() {
    const children = this.renderChildren();
    const clear = this.renderClearButton();

    return (
      <View>
        {children}
        <Popup
          onRef={ref => { this.popupRef = ref; }}
          headerLeft={clear}
        >
          <Calendar
            onRef={ref => { this.calendarRef = ref; }}
            {...this.props}
          />
        </Popup>
      </View>
    );
  }
}

const StyledCalendarPicker = connectStyle('lh.ui.CalendarPicker')(CalendarPicker);

export { StyledCalendarPicker as CalendarPicker };
