import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import { connectStyle } from '@shoutem/theme';

class Text extends Component {
  static propTypes = {
    ...RNText.propTypes,
  };

  render() {
    return (
      <RNText {...this.props} />
    );
  }
}

const StyledText = connectStyle('lh.ui.Text')(Text);
const Heading = connectStyle('lh.ui.Heading')(Text);
const Title = connectStyle('lh.ui.Title')(Text);
const Subtitle = connectStyle('lh.ui.Subtitle')(Text);
const Caption = connectStyle('lh.ui.Caption')(Text);
const Label = connectStyle('lh.ui.Label')(Text);

export {
  StyledText as Text,
  Heading,
  Title,
  Subtitle,
  Caption,
  Label,
};
