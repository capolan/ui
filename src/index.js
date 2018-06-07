import { setDefaultThemeStyle, setCalendarsLocale } from './init';
import getTheme, { defaultVariables } from './theme';

setDefaultThemeStyle();
setCalendarsLocale();

// Theme
export { getTheme, defaultVariables };

// Components
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
export { Card } from './components/Card';
export { Checkbox } from './components/Checkbox';
export { DatePicker } from './components/DatePicker';
export { Divider } from './components/Divider';
export { FormGroup } from './components/FormGroup';
export { Icon } from './components/Icon';
export { Modal } from './components/Modal';
export { NavigationHeader } from './components/NavigationHeader';
export { Radio } from './components/Radio';
export { Screen } from './components/Screen';
export { Switch } from './components/Switch';
export { Tabs, Tab, TabBar } from './components/Tabs';
export { TextInput } from './components/TextInput';
export { Timestamp } from './components/Timestamp';
export { View } from './components/View';