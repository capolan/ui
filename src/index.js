import { setDefaultThemeStyle } from './init';
import { defaultVariables } from './themes/variables';
import getTheme from './theme';

setDefaultThemeStyle();

// Theme
export { getTheme, defaultVariables };

// Components
export { NavigationHeader } from './components/NavigationHeader';
export { View } from './components/View';
export { Screen } from './components/Screen';

export {
  Heading,
  Title,
  Subtitle,
  Text,
  Caption,
  Label,
} from './components/Text';

export { Accordion } from './components/Accordion';
export { Badge } from './components/Badge';
export { Button } from './components/Button';
export { Checkbox } from './components/Checkbox';
export { Divider } from './components/Divider';
export { FormGroup } from './components/FormGroup';
export { Icon } from './components/Icon';
export { Radio } from './components/Radio';
export { Switch } from './components/Switch';
export { TextInput } from './components/TextInput';
export { Timestamp } from './components/Timestamp';
