import { View } from 'react-native';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

const AnimatedDivider = connectAnimation(View);
const StyledDivider = connectStyle('lh.ui.Divider')(AnimatedDivider);

export { StyledDivider as Divider };
