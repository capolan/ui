import React, { Component } from 'react';
import { Text as RNText } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

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

const AnimatedText = connectAnimation(Text);
const StyledText = connectStyle('lh.ui.Text')(AnimatedText);
const Heading = connectStyle('lh.ui.Heading')(AnimatedText);
const Title = connectStyle('lh.ui.Title')(AnimatedText);
const Subtitle = connectStyle('lh.ui.Subtitle')(AnimatedText);
const Caption = connectStyle('lh.ui.Caption')(AnimatedText);
const Label = connectStyle('lh.ui.Label')(AnimatedText);

export {
  StyledText as Text,
  Heading,
  Title,
  Subtitle,
  Caption,
  Label,
};
