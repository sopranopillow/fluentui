import { tokens } from '@fluentui/react-theme';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';

export const calendarGridRowClassNames = {
  gridRow: 'fui-CalendarGridRow',
  weekNumberCell: 'fui-CalendarGridRow__weekNumberCell',
};

const useWeekNumberCellStyles = makeStyles({
  base: {
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderColor(tokens.colorNeutralStroke2),
    ...shorthands.borderRight('1px', 'solid'),
    boxSizing: 'border-box',
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    height: '28px',
    ...shorthands.margin(0),
    ...shorthands.padding(0),
    width: '28px',
  },
});

export const useCalendarGridRowStyles = () => {
  const weekNumberCellStyles = useWeekNumberCellStyles();

  return {
    weekNumberCell: mergeClasses(calendarGridRowClassNames.weekNumberCell, weekNumberCellStyles.base),
    gridRow: calendarGridRowClassNames.gridRow,
  };
};
