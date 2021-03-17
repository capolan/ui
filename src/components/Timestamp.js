import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment/min/moment-with-locales';
import { getCurrentLocale } from '../utils';

import { connectStyle } from '@shoutem/theme';

class Timestamp extends Component {
  static defaultProps = {
    format: 'DD/MM/YYYY HH:mm',
    date: new Date(),
  };

  static propTypes = {
    format: PropTypes.string,
    date: PropTypes.instanceOf(Date),
  };

  state = {};

  componentDidMount() {
    this.setDataFormat(this.props);
  }

  (nextProps) {
    this.setDataFormat(nextProps);
  }

  setDataFormat = ({ date, format }) => {
    const deviceLocale = getCurrentLocale();
    const dateObj = moment(date).locale(deviceLocale);
    const finalDate = dateObj.format(format);
    this.setState({ date: finalDate });
  }

  render() {
    const { ...props } = this.props;
    delete props.date;
    delete props.format;

    return <Text {...props}>{this.state.date}</Text>;
  }
}

const StyledTimestamp = connectStyle('lh.ui.Timestamp')(Timestamp);

export { StyledTimestamp as Timestamp };
