import _ from 'lodash';
import { AVAILABLE_TOUCHABLE_ELEMENTS } from './Constants';

const isTouchableElement = (element) => {
  return _.some(AVAILABLE_TOUCHABLE_ELEMENTS, (name) => {
    return name === element.type.displayName;
  });
}

export { isTouchableElement };
