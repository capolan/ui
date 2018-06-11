import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import RMCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { getTranslations, isChildrenTouchable } from '../utils';
import { Popup } from '../';

import { connectStyle } from '@shoutem/theme';

class DatePicker extends Component {
  static defaultProps = {
    date: new Date(),
    mode: 'datetime',
    use12hours: true,
  };

  static propTypes = {
    onValueChange: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(['datetime', 'date', 'year', 'month', 'time']),
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.object]),
    minDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.object]),
    maxDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.object]),
    use12hours: PropTypes.bool,
    children: PropTypes.node,
  };

  monthNumToName = (month) => {
    const { mode } = this.props;
    const translations = getTranslations();
    if (mode === 'datetime') {
      return translations.monthsShort[month];
    }
    return translations.months[month];
  }

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
    const {
      date,
      mode,
      minDate,
      maxDate,
      use12hours,
      onValueChange,
      style,
    } = this.props;
    const children = this.renderChildren();

    return (
      <View>
        {children}
        <Popup onRef={ref => { this.popupRef = ref; }}>
          <RMCDatePicker
            mode={mode}
            defaultDate={date}
            minDate={minDate}
            maxDate={maxDate}
            onDateChange={onValueChange}
            formatMonth={this.monthNumToName}
            use12Hours={use12hours}
          />
        </Popup>
      </View>
    );
  }
}

const StyledDatePicker = connectStyle('lh.ui.DatePicker')(DatePicker);

export { StyledDatePicker as DatePicker };
