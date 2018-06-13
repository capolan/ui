const AVAILABLE_TOUCHABLE_ELEMENTS = [
  'TouchableHighlight',
  'TouchableNativeFeedback',
  'TouchableWithoutFeedback',
  'TouchableOpacity',
  'Button',
  // FormGroup component has TouchableWithoutFeedback as container
  // So its considered a Touchable element
  'FormGroup',
];

export { AVAILABLE_TOUCHABLE_ELEMENTS };
