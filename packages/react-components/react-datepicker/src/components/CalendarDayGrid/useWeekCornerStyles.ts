import { useFluent_unstable } from '@fluentui/react-shared-contexts';
import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { DateRangeType, getDateRangeArray } from '../../utils';
import { CalendarDayGridProps, DayInfo, WeekCorners } from './CalendarDayGrid.types';

export const weekCornerClassNames = {
  datesAbove: 'fui-CalendarGridDayCell__datesAbove',
  datesBelow: 'fui-CalendarGridDayCell__datesBelow',
  datesLeft: 'fui-CalendarGridDayCell__datesLeft',
  datesRight: 'fui-CalendarGridDayCell__datesRight',
  topRightCornerDate: 'fui-CalendarGridDayCell__topRightCornerDate',
  topLeftCornerDate: 'fui-CalendarGridDayCell__topLeftCornerDate',
  bottomRightCornerDate: 'fui-CalendarGridDayCell__bottomRightCornerDate',
  bottomLeftCornerDate: 'fui-CalendarGridDayCell__bottomLeftCornerDate',
};

export function useWeekCornerStyles(props: CalendarDayGridProps) {
  /**
   *
   * Section for setting the rounded corner styles on individual day cells. Individual day cells need different
   * corners to be rounded depending on which date range type and where the cell is located in the current grid.
   * If we just round all of the corners, there isn't a good overlap and we get gaps between contiguous day boxes
   * in Edge browser.
   *
   */
  const getWeekCornerStyles = (initialWeeks: DayInfo[][]): WeekCorners => {
    const weekCornersStyled: { [key: string]: string } = {};
    /* need to handle setting all of the corners on arbitrarily shaped blobs
          __
       __|A |
      |B |C |__
      |D |E |F |

      in this case, A needs top left rounded, top right rounded
      B needs top left rounded
      C doesn't need any rounding
      D needs bottom left rounded
      E doesn't need any rounding
      F needs top right rounding
    */

    // cut off the animation transition weeks
    const weeks = initialWeeks.slice(1, initialWeeks.length - 1);

    // if there's an item above, lose both top corners. Item below, lose both bottom corners, etc.
    weeks.forEach((week: DayInfo[], weekIndex: number) => {
      week.forEach((day: DayInfo, dayIndex: number) => {
        const above =
          weeks[weekIndex - 1] &&
          weeks[weekIndex - 1][dayIndex] &&
          isInSameHoverRange(
            weeks[weekIndex - 1][dayIndex].originalDate,
            day.originalDate,
            weeks[weekIndex - 1][dayIndex].isSelected,
            day.isSelected,
          );
        const below =
          weeks[weekIndex + 1] &&
          weeks[weekIndex + 1][dayIndex] &&
          isInSameHoverRange(
            weeks[weekIndex + 1][dayIndex].originalDate,
            day.originalDate,
            weeks[weekIndex + 1][dayIndex].isSelected,
            day.isSelected,
          );
        const left =
          weeks[weekIndex][dayIndex - 1] &&
          isInSameHoverRange(
            weeks[weekIndex][dayIndex - 1].originalDate,
            day.originalDate,
            weeks[weekIndex][dayIndex - 1].isSelected,
            day.isSelected,
          );
        const right =
          weeks[weekIndex][dayIndex + 1] &&
          isInSameHoverRange(
            weeks[weekIndex][dayIndex + 1].originalDate,
            day.originalDate,
            weeks[weekIndex][dayIndex + 1].isSelected,
            day.isSelected,
          );

        const style = [];
        style.push(calculateRoundedStyles(above, below, left, right));
        style.push(calculateBorderStyles(above, below, left, right));

        weekCornersStyled[weekIndex + '_' + dayIndex] = style.join(' ');
      });
    });

    return weekCornersStyled;
  };

  const { dir } = useFluent_unstable();

  const calculateRoundedStyles = (above: boolean, below: boolean, left: boolean, right: boolean): string => {
    const style = [];
    const roundedTopLeft = !above && !left;
    const roundedTopRight = !above && !right;
    const roundedBottomLeft = !below && !left;
    const roundedBottomRight = !below && !right;

    if (roundedTopLeft) {
      style.push(dir === 'rtl' ? weekCornerClassNames.topRightCornerDate : weekCornerClassNames.topLeftCornerDate);
    }
    if (roundedTopRight) {
      style.push(dir === 'rtl' ? weekCornerClassNames.topLeftCornerDate : weekCornerClassNames.topRightCornerDate);
    }
    if (roundedBottomLeft) {
      style.push(
        dir === 'rtl' ? weekCornerClassNames.bottomRightCornerDate : weekCornerClassNames.bottomLeftCornerDate,
      );
    }
    if (roundedBottomRight) {
      style.push(
        dir === 'rtl' ? weekCornerClassNames.bottomLeftCornerDate : weekCornerClassNames.bottomRightCornerDate,
      );
    }

    return style.join(' ');
  };

  const calculateBorderStyles = (above: boolean, below: boolean, left: boolean, right: boolean): string => {
    const style = [];

    if (!above) {
      style.push(weekCornerClassNames.datesAbove);
    }
    if (!below) {
      style.push(weekCornerClassNames.datesBelow);
    }
    if (!left) {
      style.push(dir === 'rtl' ? weekCornerClassNames.datesRight : weekCornerClassNames.datesLeft);
    }
    if (!right) {
      style.push(dir === 'rtl' ? weekCornerClassNames.datesLeft : weekCornerClassNames.datesRight);
    }

    return style.join(' ');
  };

  const isInSameHoverRange = (date1: Date, date2: Date, date1Selected: boolean, date2Selected: boolean): boolean => {
    const { dateRangeType, firstDayOfWeek, workWeekDays } = props;

    // The hover state looks weird with non-contiguous days in work week view. In work week, show week hover state
    const dateRangeHoverType = dateRangeType === DateRangeType.WorkWeek ? DateRangeType.Week : dateRangeType;

    // we do not pass daysToSelectInDayView because we handle setting those styles dyanamically in onMouseOver
    const dateRange = getDateRangeArray(date1, dateRangeHoverType, firstDayOfWeek, workWeekDays);

    if (date1Selected !== date2Selected) {
      // if one is selected and the other is not, they can't be in the same range
      return false;
    } else if (date1Selected && date2Selected) {
      // if they're both selected at the same time they must be in the same range
      return true;
    }

    // otherwise, both must be unselected, so check the dateRange
    return dateRange.filter((date: Date) => date.getTime() === date2.getTime()).length > 0;
  };

  return [getWeekCornerStyles, calculateRoundedStyles] as const;
}

const useCornerDateStyles = makeStyles({
  topRight: {
    borderTopRightRadius: '2px',
  },
  topLeft: {
    borderTopLeftRadius: '2px',
  },
  bottomRight: {
    borderBottomRightRadius: '2px',
  },
  bottomLeft: {
    borderBottomLeftRadius: '2px',
  },
});

const useDatesPositionStyles = makeStyles({
  above: {
    '&::before': {
      ...shorthands.borderTop('1px', 'solid', tokens.colorNeutralStrokeAccessible),
    },
  },
  below: {
    '&::before': {
      ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStrokeAccessible),
    },
  },
  left: {
    '&::before': {
      ...shorthands.borderLeft('1px', 'solid', tokens.colorNeutralStrokeAccessible),
    },
  },
  right: {
    '&::before': {
      ...shorthands.borderRight('1px', 'solid', tokens.colorNeutralStrokeAccessible),
    },
  },
});

export const useWeekCornerClassNames = () => {
  const datesPositionStyles = useDatesPositionStyles();
  const cornerDateStyles = useCornerDateStyles();

  return {
    datesAbove: datesPositionStyles.above,
    datesBelow: datesPositionStyles.below,
    datesLeft: datesPositionStyles.left,
    datesRight: datesPositionStyles.right,
    topRightCornerDate: cornerDateStyles.topRight,
    topLeftCornerDate: cornerDateStyles.topLeft,
    bottomRightCornerDate: cornerDateStyles.bottomRight,
    bottomLeftCornerDate: cornerDateStyles.bottomLeft,
  };
};
