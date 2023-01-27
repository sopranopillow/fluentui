import * as React from 'react';

export function useDayRefs() {
  const daysRef = React.useRef<Record<string, HTMLElement>>({});

  const getSetRefCallback = (dayKey: string) => (element: HTMLElement | null) => {
    if (element === null) {
      delete daysRef.current[dayKey];
    } else {
      daysRef.current[dayKey] = element;
    }
  };

  return [daysRef, getSetRefCallback] as const;
}
