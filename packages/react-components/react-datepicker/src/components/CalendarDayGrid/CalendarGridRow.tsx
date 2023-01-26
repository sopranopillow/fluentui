import * as React from 'react';
import { getWeekNumbersInMonth } from '../../utils';
import { CalendarGridDayCell } from './CalendarGridDayCell';
import { useCalendarGridRowStyles } from './useCalendarGridRowStyles';
import type { CalendarDayGridProps, DayInfo, WeekCorners } from './CalendarDayGrid.types';

export interface CalendarGridRowProps extends CalendarDayGridProps {
  weeks: DayInfo[][];
  week: DayInfo[];
  weekIndex: number;
  weekCorners?: WeekCorners;
  ariaHidden?: boolean;
  rowClassName?: string;
  ariaRole?: string;
  navigatedDayRef: React.MutableRefObject<HTMLTableCellElement>;
  activeDescendantId: string;
  calculateRoundedStyles(above: boolean, below: boolean, left: boolean, right: boolean): string;
  getDayInfosInRangeOfDay(dayToCompare: DayInfo): DayInfo[];
  getRefsFromDayInfos(dayInfosInRange: DayInfo[]): (HTMLElement | null)[];
}

export const CalendarGridRow: React.FunctionComponent<CalendarGridRowProps> = props => {
  const {
    week,
    weeks,
    weekIndex,
    rowClassName,
    ariaRole,
    showWeekNumbers,
    firstDayOfWeek,
    firstWeekOfYear,
    navigatedDate,
    strings,
  } = props;
  const weekNumbers = showWeekNumbers
    ? getWeekNumbersInMonth(weeks!.length, firstDayOfWeek, firstWeekOfYear, navigatedDate)
    : null;

  const titleString = weekNumbers
    ? strings.weekNumberFormatString && strings.weekNumberFormatString.replace('{0}', `${weekNumbers[weekIndex]}`)
    : '';

  const { weekNumberCell } = useCalendarGridRowStyles();

  return (
    <tr role={ariaRole} className={rowClassName} key={weekIndex + '_' + week[0].key}>
      {showWeekNumbers && weekNumbers && (
        <th className={weekNumberCell} key={weekIndex} title={titleString} aria-label={titleString} scope="row">
          <span>{weekNumbers[weekIndex]}</span>
        </th>
      )}
      {week.map((day: DayInfo, dayIndex: number) => (
        <CalendarGridDayCell {...props} key={day.key} day={day} dayIndex={dayIndex} />
      ))}
    </tr>
  );
};
