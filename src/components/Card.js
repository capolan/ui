import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

const AnimatedCard = connectAnimation(View);
const Card = connectStyle('lh.ui.Card')(AnimatedCard);

export {
  Card,
};
