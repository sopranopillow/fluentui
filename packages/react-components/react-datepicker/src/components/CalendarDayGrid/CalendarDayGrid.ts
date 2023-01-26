import * as React from 'react';
import { ForwardRefComponent } from '@fluentui/react-utilities';
import { CalendarDayGridProps } from './CalendarDayGrid.types';
import { useCalendarDayGrid_unstable } from './useCalendarDayGrid';
import { renderCalendarDayGrid_unstable } from './renderCalendarDayGrid';
import { useCalendarDayGridStyles_unstable } from './useCalendarDayGridStyles';

export const SlotsCalendarDayGrid: ForwardRefComponent<CalendarDayGridProps> = React.forwardRef((props, ref) => {
  const state = useCalendarDayGrid_unstable(props, ref);

  useCalendarDayGridStyles_unstable(state);
  return renderCalendarDayGrid_unstable(state);
});

SlotsCalendarDayGrid.displayName = 'CalendarDayGrid';
