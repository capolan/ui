import { INCLUDE, changeColorAlpha } from '@shoutem/theme';

export default (variables) => ({
  'lh.ui.Popup': {
    header: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: variables.hairlineWidth,
      borderBottomColor: variables.lineColor,
    },

    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
});
