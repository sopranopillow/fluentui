import * as React from 'react';
import { getNativeElementProps, resolveShorthand, useId } from '@fluentui/react-utilities';
import {
  DateRangeType,
  DayOfWeek,
  getBoundedDateRange,
  getDateRangeArray,
  isRestrictedDate,
  useAnimateBackwards,
  useWeekCornerStyles,
  useDayRefs,
  useWeeks,
} from '../../utils';
import { useArrowNavigationGroup } from '@fluentui/react-tabster';
import { AnimationDirection } from '../Calendar/Calendar.types';
import {
  CalendarMonthHeaderRow,
  CalendarDayMonthHeaderRowProps,
} from '../CalendarMonthHeaderRow/CalendarMonthHeaderRow';
import { CalendarGridRow, CalendarGridRowProps } from '../CalendarDayGridRow/CalendarGridRow';
import type { DayInfo, CalendarDayGridProps, CalendarDayGridState, WeekCorners } from './CalendarDayGrid.types';

/**
 * Create the state required to render CalendarDayGrid.
 *
 * The returned state can be modified with hooks such as useCalendarDayGridStyles_unstable,
 * before being passed to renderCalendarDayGrid_unstable.
 *
 * @param props - props from this instance of CalendarDayGrid
 * @param ref - reference to root HTMLElement of CalendarDayGrid
 */
export const useCalendarDayGrid_unstable = (
  props: CalendarDayGridProps,
  ref: React.Ref<HTMLElement>,
): CalendarDayGridState => {
  const navigatedDayRef = React.useRef<HTMLTableCellElement>(null) as React.MutableRefObject<HTMLTableCellElement>;
  const activeDescendantId = useId();

  const onSelectDate = (selectedDate: Date): void => {
    const { firstDayOfWeek, minDate, maxDate, workWeekDays, daysToSelectInDayView, restrictedDates } = props;
    const restrictedDatesOptions = { minDate, maxDate, restrictedDates };

    let dateRange = getDateRangeArray(selectedDate, dateRangeType, firstDayOfWeek, workWeekDays, daysToSelectInDayView);
    dateRange = getBoundedDateRange(dateRange, minDate, maxDate);

    dateRange = dateRange.filter((d: Date) => {
      return !isRestrictedDate(d, restrictedDatesOptions);
    });

    props.onSelectDate?.(selectedDate, dateRange);
    props.onNavigateDate?.(selectedDate, true);
  };

  const [daysRef, getSetRefCallback] = useDayRefs();

  const weeks = useWeeks(props, onSelectDate, getSetRefCallback);
  console.log(weeks);
  const animateBackwards = useAnimateBackwards(weeks);
  const [getWeekCornerStyles, calculateRoundedStyles] = useWeekCornerStyles(props);

  React.useImperativeHandle(props.componentRef, () => ({
    focus: () => {
      navigatedDayRef.current?.focus();
    },
  }));

  /**
   *
   * Section for setting hover/pressed styles. Because we want arbitrary blobs of days to be selectable, to support
   * highlighting every day in the month for month view, css :hover style isn't enough, so we need mouse callbacks
   * to set classnames on all relevant child refs to apply the styling
   *
   */
  const getDayInfosInRangeOfDay = (dayToCompare: DayInfo): DayInfo[] => {
    // The hover state looks weird with non-contiguous days in work week view. In work week, show week hover state
    const dateRangeHoverType = getDateRangeTypeToUse(props.dateRangeType, props.workWeekDays);

    // gets all the dates for the given date range type that are in the same date range as the given day
    const dateRange = getDateRangeArray(
      dayToCompare.originalDate,
      dateRangeHoverType,
      props.firstDayOfWeek,
      props.workWeekDays,
      props.daysToSelectInDayView,
    ).map((date: Date) => date.getTime());

    // gets all the day refs for the given dates
    const dayInfosInRange = weeks.reduce((accumulatedValue: DayInfo[], currentWeek: DayInfo[]) => {
      return accumulatedValue.concat(
        currentWeek.filter((weekDay: DayInfo) => dateRange.indexOf(weekDay.originalDate.getTime()) !== -1),
      );
    }, []);

    return dayInfosInRange;
  };

  const getRefsFromDayInfos = (dayInfosInRange: DayInfo[]): (HTMLElement | null)[] => {
    let dayRefs: (HTMLElement | null)[] = [];
    dayRefs = dayInfosInRange.map((dayInfo: DayInfo) => daysRef.current[dayInfo.key]);

    return dayRefs;
  };

  const {
    dateRangeType,
    showWeekNumbers = true,
    labelledBy,
    lightenDaysOutsideNavigatedMonth = true,
    animationDirection = AnimationDirection.Horizontal, // TODO: check default value
  } = props;

  // When the month is highlighted get the corner dates so that styles can be added to them
  const weekCorners: WeekCorners = getWeekCornerStyles(weeks!);
  const partialWeekProps = {
    weeks,
    navigatedDayRef,
    calculateRoundedStyles,
    activeDescendantId,
    weekCorners,
    getDayInfosInRangeOfDay,
    getRefsFromDayInfos,
  } as const;

  const arrowNavigationAttributes = useArrowNavigationGroup({
    axis: 'both',
    ignoreDefaultKeydown: { Enter: true, Escape: true, Tab: true },
  });

  return {
    animateBackwards,
    animationDirection,
    dateRangeType,
    lightenDaysOutsideNavigatedMonth,
    showWeekNumbers,
    middleWeeks: weeks.slice(1, -1),
    middleWeekProps: {
      ...props,
      ...partialWeekProps,
    },

    components: {
      root: 'tbody',
      table: 'table',
      calendarMonthHeaderRow: CalendarMonthHeaderRow as React.FC<Partial<CalendarDayMonthHeaderRowProps>>,
      firstCalendarGridRow: CalendarGridRow as React.FC<Partial<CalendarGridRowProps>>,
      lastCalendarGridRow: CalendarGridRow as React.FC<Partial<CalendarGridRowProps>>,
    },

    root: getNativeElementProps('tbody', {
      ref,
      ...props,
    }),
    table: resolveShorthand(props.table, {
      required: true,
      defaultProps: {
        'aria-multiselectable': false,
        'aria-labelledby': labelledBy,
        'aria-activedescendant': activeDescendantId,
        role: 'grid',
        ...arrowNavigationAttributes, // TODO: double check if this is okay
      },
    }),
    calendarMonthHeaderRow: resolveShorthand(props.calendarMonthHeaderRow, {
      required: true,
      defaultProps: {
        ...props,
        weeks,
      },
    }),
    firstCalendarGridRow: resolveShorthand(props.firstCalendarGridRow, {
      required: true,
      defaultProps: {
        ...props,
        ...partialWeekProps,
        week: weeks[0],
        weekIndex: -1,
        ariaRole: 'presentation',
        ariaHidden: true,
      },
    }),
    lastCalendarGridRow: resolveShorthand(props.lastCalendarGridRow, {
      required: true,
      defaultProps: {
        ...props,
        ...partialWeekProps,
        week: weeks[weeks.length - 1],
        weekIndex: -2,
        ariaRole: 'presentation',
        ariaHidden: true,
      },
    }),
  };
};

/**
 * When given work week, if the days are non-contiguous, the hover states look really weird. So for non-contiguous
 * work weeks, we'll just show week view instead.
 */
function getDateRangeTypeToUse(dateRangeType: DateRangeType, workWeekDays: DayOfWeek[] | undefined): DateRangeType {
  if (workWeekDays && dateRangeType === DateRangeType.WorkWeek) {
    const sortedWWDays = workWeekDays.slice().sort();
    let isContiguous = true;
    for (let i = 1; i < sortedWWDays.length; i++) {
      if (sortedWWDays[i] !== sortedWWDays[i - 1] + 1) {
        isContiguous = false;
        break;
      }
    }

    if (!isContiguous || workWeekDays.length === 0) {
      return DateRangeType.Week;
    }
  }

  return dateRangeType;
}
