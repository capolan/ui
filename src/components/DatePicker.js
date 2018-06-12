import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import RMCDatePicker from 'rmc-date-picker/lib/DatePicker';
import { getTranslations } from '../utils';
import { Popup } from '../';

import { connectStyle } from '@shoutem/theme';

class DatePicker extends Component {
  static defaultProps = {
    date: new Date(),
    defaultDate: new Date(),
    mode: 'datetime',
    use12hours: true,
  };

  static propTypes = {
    onValueChange: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(['datetime', 'date', 'year', 'month', 'time']),
    date: PropTypes.instanceOf(Date),
    defaultDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
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

    return React.cloneElement(children, {
      onPress: () => this.popupRef.open(),
    });
  }

  render() {
    const {
      date,
      defaultDate,
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
            date={date}
            defaultDate={defaultDate}
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
