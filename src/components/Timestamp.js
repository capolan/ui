import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import { getCurrentLocale } from '../utils';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class Timestamp extends Component {
  static defaultProps = {
    format: 'L LT',
    date: moment(),
  };

  static propTypes = {
    format: PropTypes.string, // Moment format
    date: PropTypes.oneOfType([
      PropTypes.string, // ISO-8601 string
      PropTypes.object, // Moment object
    ]),
  };

  state = {};

  componentDidMount() {
    this.setDataFormat(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setDataFormat(nextProps);
  }

  setDataFormat = async ({ date, format }) => {
    const deviceLocale = await getCurrentLocale();
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

const AnimatedTimestamp = connectAnimation(Timestamp);
const StyledTimestamp = connectStyle('lh.ui.Timestamp')(AnimatedTimestamp);

export { StyledTimestamp as Timestamp };
