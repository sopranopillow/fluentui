import { AnimationDirection } from '../Calendar/Calendar.types';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import {
  DURATION_3,
  EASING_FUNCTION_1,
  FADE_IN,
  FADE_OUT,
  SLIDE_DOWN_IN20,
  SLIDE_DOWN_OUT20,
  SLIDE_LEFT_IN20,
  SLIDE_RIGHT_IN20,
  SLIDE_UP_IN20,
  SLIDE_UP_OUT20,
  TRANSITION_ROW_DISAPPEARANCE,
} from '../../utils';
import type { CalendarDayGridSlots, CalendarDayGridState } from './CalendarDayGrid.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const calendarDayGridClassNames: SlotClassNames<CalendarDayGridSlots> = {
  root: 'fui-CalendarDayGrid',
  table: 'fui-CalendarDayGrid__table',
  calendarMonthHeaderRow: 'fui-CalendarDayGrid__calendarMonthHeaderRow',
  firstCalendarGridRow: 'fui-CalendarDayGrid__firstCalendarGridRow',
  lastCalendarGridRow: 'fui-CalendarDayGrid__lastCalendarGridRow',
};

export const extraCalendarDayGridClassNames = {
  calendarGridRow: 'fui-CalendarDayGrid__calendarGridRow',
  dayIsToday: 'fui-CalendarDayGrid__dayIsToday',
  daySelected: 'fui-CalendarDayGrid__daySelected',
};

const useTableStyles = makeStyles({
  base: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fontSize: 'inherit',
    marginTop: '4px',
    paddingBottom: '10px',
    position: 'relative',
    tableLayout: 'fixed',
    textAlign: 'center',
    width: '196px',
  },
  showWeekNumbers: {
    width: '226px',
  },
});

const useFirstTransitionWeekStyles = makeStyles({
  base: {
    height: 0,
    opacity: 0,
    ...shorthands.overflow('hidden'),
    position: 'absolute',
    width: 0,
  },
  verticalForward: {
    animationDuration: DURATION_3,
    animationFillMode: 'both',
    animationName: [FADE_OUT, SLIDE_UP_OUT20, TRANSITION_ROW_DISAPPEARANCE],
    animationTimingFunction: EASING_FUNCTION_1,
  },
});

const useLastTransitionWeekStyles = makeStyles({
  base: {
    height: 0,
    marginTop: '-28px',
    opacity: 0,
    ...shorthands.overflow('hidden'),
    position: 'absolute',
    width: 0,
  },
  verticalBackward: {
    animationDuration: DURATION_3,
    animationFillMode: 'both',
    animationName: [FADE_OUT, SLIDE_DOWN_OUT20, TRANSITION_ROW_DISAPPEARANCE],
    animationTimingFunction: EASING_FUNCTION_1,
  },
});

const useWeekRowStyles = makeStyles({
  base: {
    animationDuration: DURATION_3,
    animationFillMode: 'both',
    animationTimingFunction: EASING_FUNCTION_1,
  },
  horizontalBackward: {
    animationName: [FADE_IN, SLIDE_RIGHT_IN20],
  },
  horizontalForward: {
    animationName: [FADE_IN, SLIDE_LEFT_IN20],
  },
  verticalBackward: {
    animationName: [FADE_IN, SLIDE_DOWN_IN20],
  },
  verticalForward: {
    animationName: [FADE_IN, SLIDE_UP_IN20],
  },
});

/**
 * Apply styling to the CalendarDayGrid slots based on the state
 */
export const useCalendarDayGridStyles_unstable = (state: CalendarDayGridState): CalendarDayGridState => {
  const tableStyles = useTableStyles();
  const firstTransitionWeekStyles = useFirstTransitionWeekStyles();
  const lastTransitionWeekStyles = useLastTransitionWeekStyles();
  const weekRowStyles = useWeekRowStyles();

  const { animateBackwards, animationDirection, showWeekNumbers } = state;

  state.root.className = mergeClasses(calendarDayGridClassNames.root, state.root.className);
  state.table.className = mergeClasses(
    calendarDayGridClassNames.table,
    tableStyles.base,
    showWeekNumbers && tableStyles.showWeekNumbers,
    state.table.className,
  );
  state.calendarMonthHeaderRow.className = mergeClasses(
    calendarDayGridClassNames.calendarMonthHeaderRow,
    state.calendarMonthHeaderRow.className,
  );
  state.firstCalendarGridRow.className = mergeClasses(
    calendarDayGridClassNames.firstCalendarGridRow,
    firstTransitionWeekStyles.base,
    animateBackwards !== undefined &&
      animationDirection !== AnimationDirection.Horizontal &&
      !animateBackwards &&
      firstTransitionWeekStyles.verticalForward,
    state.firstCalendarGridRow.className,
  );
  state.lastCalendarGridRow.className = mergeClasses(
    calendarDayGridClassNames.lastCalendarGridRow,
    lastTransitionWeekStyles.base,
    animateBackwards !== undefined &&
      animationDirection !== AnimationDirection.Horizontal &&
      animateBackwards &&
      lastTransitionWeekStyles.verticalBackward,
    state.lastCalendarGridRow.className,
  );
  state.weekRowClassName = mergeClasses(
    animateBackwards !== undefined && weekRowStyles.base,
    animateBackwards !== undefined &&
      (animationDirection === AnimationDirection.Horizontal
        ? animateBackwards
          ? weekRowStyles.horizontalBackward
          : weekRowStyles.horizontalForward
        : animateBackwards
        ? weekRowStyles.verticalBackward
        : weekRowStyles.verticalForward),
  );
  return state;
};
