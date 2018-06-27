import _ from 'lodash';
import { dependencies } from '../../package.json';

const isExpo = _.hasIn(dependencies, 'expo');

export default isExpo;
