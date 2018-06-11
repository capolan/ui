import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import RMCDatePicker from 'rmc-date-picker/lib/DatePicker';
import I18n from 'ex-react-native-i18n';
import { isChildrenTouchable } from '../utils';
import { Popup, Calendar, Button, Text } from '../';

import { connectStyle } from '@shoutem/theme';

class CalendarPicker extends Component {
  static propTypes = {
    ...Calendar.propTypes,
    children: PropTypes.node,
  };

  renderClearButton = () => (
    <Button styleName="clear end" onPress={() => this.calendarRef.clear()}>
      <Text styleName="bold dark">
        {I18n.t('clear')}
      </Text>
    </Button>
  );

  renderChildren = () => {
    const { children } = this.props;
    if (isChildrenTouchable(children)) {
      return React.cloneElement(children, {
        onPress: () => this.popupRef.open(),
      });
    }
    return children;
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
