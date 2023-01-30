import { makeStyles } from '@griffel/react';
import { DURATION_2, EASING_FUNCTION_2, FADE_IN } from '../../utils';

const useWeekDayLabelCellStyles = makeStyles({
  base: {
    animationDuration: DURATION_2,
    animationFillMode: 'both',
    animationName: FADE_IN,
    animationTimingFunction: EASING_FUNCTION_2,
    fontWeight: 'normal',
  },
});

export const useCalendarMonthHeaderRowStyles_unstable = () => {
  const weekDayLabelCellStyles = useWeekDayLabelCellStyles();

  return {
    weekDayLabelCell: weekDayLabelCellStyles.base,
  };
};
