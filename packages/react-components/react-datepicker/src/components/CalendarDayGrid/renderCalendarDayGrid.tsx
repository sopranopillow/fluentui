import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { CalendarDayGridState, CalendarDayGridSlots, DayInfo } from './CalendarDayGrid.types';
import { CalendarDayMonthHeaderRowProps } from './CalendarMonthHeaderRow';
import { CalendarGridRow, CalendarGridRowProps } from './CalendarGridRow';

/**
 * Render the final JSX of CalendarDayGrid
 */
export const renderCalendarDayGrid_unstable = (state: CalendarDayGridState) => {
  const { slots, slotProps } = getSlots<CalendarDayGridSlots>(state);
  const { middleWeeks, middleWeekProps, calendarGridRow } = state;

  return (
    <slots.table {...slotProps.table}>
      <slots.root {...slotProps.root}>
        <slots.calendarMonthHeaderRow
          {...(slotProps.calendarMonthHeaderRow as Partial<CalendarDayMonthHeaderRowProps>)}
        />
        <slots.firstCalendarGridRow {...(slotProps.firstCalendarGridRow as Partial<CalendarGridRowProps>)} />
        {middleWeeks.map((week: DayInfo[], weekIndex: number) => (
          <CalendarGridRow
            {...middleWeekProps}
            key={weekIndex}
            week={week}
            weekIndex={weekIndex}
            rowClassName={calendarGridRow}
          />
        ))}
        <slots.lastCalendarGridRow {...(slotProps.lastCalendarGridRow as Partial<CalendarGridRowProps>)} />
      </slots.root>
    </slots.table>
  );
};
