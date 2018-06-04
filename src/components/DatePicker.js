import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import twix from 'twix';
import _ from 'lodash';
import { CalendarList } from 'react-native-calendars';
import { Card, View, Button, Text } from '../';

import { connectStyle } from '@shoutem/theme';

class DatePicker extends Component {
  static defaultProps = {
    markedDates: {},
    doneText: 'Done',
    clearText: 'Clear',
  };

  static propTypes = {
    ...CalendarList.propTypes,
    onValueChange: PropTypes.func,
    onDone: PropTypes.func,
    doneText: PropTypes.string,
    clearText: PropTypes.string,
    style: PropTypes.shape({
      container: PropTypes.object,
      calendar: PropTypes.object,
    }),
  };

  constructor(props) {
    super(props);

    this.state = {
      markedDates: props.markedDates || {},
    };
  };

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.markedDates, this.props.markedDates)) {
      this.setState({ markedDates: this.props.markedDates });
    }
  }

  // TODO (Donald): Reset marking when clicked day < fromDate;
  selectPeriodDate = day => {
    let newDates = { ...this.state.markedDates };
    const selectedDate = day.dateString;

    if (_.keys(newDates).length > 1) {
      newDates = {};
      this.clear();
    }

    if (!_.keys(newDates).length) {
      newDates[selectedDate] = {
        selected: true,
        startingDay: true,
        endingDay: true,
        color: this.props.style.calendar.selectedDateColor,
      };
    } else if (_.keys(newDates).length === 1) {
      const firstDate = _.keys(newDates)[0];
      const fromDate = moment(firstDate);
      const toDate = moment(selectedDate).toISOString();
      const range = moment(fromDate).twix(toDate).toArray('days');

      _.forEach(range, (value, index) => {
        const date = moment(value).format('YYYY-MM-DD');

        if (index === 0 && fromDate !== toDate) {
          newDates[date] = {
            selected: true,
            startingDay: true,
            color: this.props.style.calendar.selectedDateColor,
          };
        } else if (index === range.length - 1) {
          newDates[date] = {
            selected: true,
            endingDay: true,
            color: this.props.style.calendar.selectedDateColor,
          };
        } else {
          newDates[date] = {
            selected: true,
            color: this.props.style.calendar.selectedDateColor,
          };
        }
      });
    }
    this.setState({ markedDates: newDates });
    this.onValueChange(newDates);
  }

  onDayPress = day => {
    if (this.props.markingType === 'period') {
      this.selectPeriodDate(day);
    } else {
      this.onValueChange(day);
    }
  }

  onValueChange = (day) => {
    if (this.props.onValueChange) {
      this.props.onValueChange(day);
    }
  }

  clear = () => {
    this.setState({ markedDates: {} });
    this.onValueChange({});
  }

  done = () => {
    if (this.props.onDone) {
      this.props.onDone();
    }
  }

  render() {
    const props = { ...this.props };
    const style = { ...props.style };
    delete props.style;
    delete style.calendar;

    return (
      <Card styleName="rounded-corners" style={style}>
        <View styleName="horizontal space-between">
          <Button styleName="clear end" onPress={this.clear}>
            <Text>{this.props.clearText}</Text>
          </Button>
          <Button styleName="clear end" onPress={this.done}>
            <Text>{this.props.doneText}</Text>
          </Button>
        </View>

        <CalendarList
          {...props}
          markedDates={this.state.markedDates}
          onDayPress={this.onDayPress}
        />
      </Card>
    );
  }
}

const StyledDatePicker = connectStyle('lh.ui.DatePicker')(DatePicker);

export { StyledDatePicker as DatePicker };
