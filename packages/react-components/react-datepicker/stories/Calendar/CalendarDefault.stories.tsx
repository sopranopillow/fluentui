import * as React from 'react';
import { Calendar, CalendarProps, defaultDatePickerStrings } from '@fluentui/react-datepicker';

export const Default = (props: Partial<CalendarProps>) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
    <Calendar
      showGoToToday
      onSelectDate={setSelectedDate}
      value={selectedDate}
      // Calendar uses English strings by default. For localized apps, you must override this prop.
      strings={defaultDatePickerStrings}
      {...props}
    />
  );
};
