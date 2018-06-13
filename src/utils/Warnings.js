import { AVAILABLE_TOUCHABLE_ELEMENTS } from './Constants';

const invalidTouchableChildrenElement = (componentName) => {
  console.warn(`${componentName} component children Prop doesn't a Touchable element. \n List of available Touchable elements: \n\n ${AVAILABLE_TOUCHABLE_ELEMENTS}`);
};

export { invalidTouchableChildrenElement };
