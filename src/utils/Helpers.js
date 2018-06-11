import React from 'react';
import _ from 'lodash';

const isChildrenTouchable = (children) => {
  // FormGroup has TouchableWithoutFeedback as container
  // so it's considered a touchable
  const isTouchable = ['Touchable', 'Button', 'FormGroup'];
  return _.some(isTouchable, (el) => _.includes(children.type.displayName, el));
}

export { isChildrenTouchable };
