import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { CalendarGridRow } from '../CalendarDayGridRow/CalendarGridRow';
import type { CalendarDayGridState, CalendarDayGridSlots, DayInfo } from './CalendarDayGrid.types';

/**
 * Render the final JSX of CalendarDayGrid
 */
export const renderCalendarDayGrid_unstable = (state: CalendarDayGridState) => {
  const { slots, slotProps } = getSlots<CalendarDayGridSlots>(state);
  const { middleWeeks, middleWeekProps, weekRowClassName } = state;

  return (
    <slots.table {...slotProps.table}>
      <slots.root {...slotProps.root}>
        <slots.calendarMonthHeaderRow {...slotProps.calendarMonthHeaderRow} />
        <slots.firstCalendarGridRow {...slotProps.firstCalendarGridRow} />
        {middleWeeks.map((week: DayInfo[], weekIndex: number) => (
          <CalendarGridRow
            {...middleWeekProps}
            className={weekRowClassName}
            key={weekIndex}
            week={week}
            weekIndex={weekIndex}
          />
        ))}
        <slots.lastCalendarGridRow {...slotProps.lastCalendarGridRow} />
      </slots.root>
    </slots.table>
  );
};
