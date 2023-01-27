import { tokens } from '@fluentui/react-theme';
import { shorthands, makeStyles } from '@griffel/react';
import { DateRangeType } from '../../utils';
import { CalendarGridDayCellProps } from './CalendarGridDayCell';
import { extraCalendarDayGridClassNames } from '../CalendarDayGrid/useCalendarDayGridStyles';

export const calendarGridDayCellClassNames: Record<string, string> = {
  dayCell: 'fui-CalendarGridDayCell__dayCell',
  daySelected: 'fui-CalendarGridDayCell__daySelected',
  dayOutsideBounds: 'fui-CalendarGridDayCell__dayOutsideBounds',
  dayOutsideNavigatedMonth: 'fui-CalendarGridDayCell__dayOutsideNavigatedMonth',
  dayButton: 'fui-CalendarGridDayCell__dayButton',
  dayIsToday: 'fui-CalendarGridDayCell__dayIsToday',
  dayMarker: 'fui-CalendarGridDayCell__dayMarker',
};

const useDayIsTodayStyles = makeStyles({
  base: {
    backgroundColor: tokens.colorBrandBackground + '!important',
    ...shorthands.borderRadius('100%'),
    color: tokens.colorNeutralForegroundOnBrand + '!important',
    fontWeight: tokens.fontWeightSemibold + '!important',

    '@media (forced-colors: active)': {
      backgroundColor: 'WindowText!important',
      ...shorthands.borderColor('WindowText!important'),
      color: 'WindowText!important',
      forcedColorAdjust: 'none',
    },
  },
});

const useDayOutsideBoundsStyles = makeStyles({
  base: {
    '&, &:disabled, & button': {
      color: tokens.colorNeutralForegroundDisabled,
      pointerEvents: 'none',
    },
  },
});

const useDayOutsideNavigatedMonthStyles = makeStyles({
  lightenDaysOutsideNavigatedMonth: {
    color: tokens.colorNeutralForeground4,
    fontWeight: tokens.fontWeightRegular,
  },
});

const useDayButtonStyles = makeStyles({
  base: {
    backgroundColor: tokens.colorTransparentBackground,
    ...shorthands.borderRadius('2px'),
    ...shorthands.borderStyle('none'),
    color: 'inherit',
    cursor: 'pointer',
    fontSize: tokens.fontSizeBase200,
    fontWeight: 'inherit',
    height: '24px',
    lineHeight: '24px',
    ...shorthands.overflow('visible'),
    ...shorthands.padding(0),
    width: '24px',

    '&span': {
      height: 'inherit',
      lineHeight: 'inherit',
    },
  },
});

const useDayCellStyles = makeStyles({
  base: {
    color: tokens.colorNeutralForeground1,
    cursor: 'pointer',
    fontSize: tokens.fontSizeBase200,
    fontWeight: tokens.fontWeightRegular,
    height: '28px',
    lineHeight: '28px',
    ...shorthands.margin(0),
    ...shorthands.padding(0),
    position: 'relative',
    width: '28px',

    '@media (forced-colors: active)': {
      backgroundColor: 'Window',
      color: 'WindowText',
      forcedColorAdjust: 'none',
      zIndex: 0,
    },

    '&:hover': {
      backgroundColor: tokens.colorNeutralBackground1Hover,
      '@media (forced-colors: active)': {
        backgroundColor: 'Window',
        ...shorthands.outline('1px', 'solid', 'Highlight'),
        zIndex: 3,
      },
    },

    '&:active': {
      backgroundColor: tokens.colorNeutralBackground1Pressed,
      '@media (forced-colors: active)': {
        backgroundColor: 'Window',
        ...shorthands.borderColor('Highlight'),
        color: 'Highlight',
      },
    },

    '&:hover:active': {
      '@media (forced-colors: active)': {
        backgroundColor: 'Window',
        ...shorthands.outline('1px', 'solid', 'Highlight'),
      },
    },
  },
  // getFocusStyle(theme, { inset: -3 }),
});

const useDaySelectedStyles = makeStyles({
  dateRangeTypeNotMonth: {
    backgroundColor: tokens.colorNeutralBackground1Selected,

    '&::before': {
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },

    [`&:hover,&:active`]: {
      backgroundColor: tokens.colorNeutralBackground1Selected + ' !important',
      '@media (forced-colors: active)': {
        backgroundColor: 'Highlight!important',
        color: 'HighlightText!important',
      },
    },

    '@media (forced-colors: active)': {
      backgroundColor: 'Highlight!important',
      ...shorthands.borderColor('Highlight!important'),
      color: 'HighlightText!important',
      forcedColorAdjust: 'none',
    },
  },
});

const useDayMarkerStyles = makeStyles({
  base: {
    // TODO: Use background instead of foreground token
    backgroundColor: tokens.colorNeutralForeground2,
    ...shorthands.borderRadius('100%'),
    bottom: '1px',
    height: '4px',
    left: 0,
    ...shorthands.margin('auto'),
    position: 'absolute',
    right: 0,
    width: '4px',

    '@media (forced-colors: active)': {
      backgroundColor: 'WindowText',
      forcedColorAdjust: 'none',
    },

    [`&.${extraCalendarDayGridClassNames.dayIsToday}`]: {
      backgroundColor: tokens.colorNeutralBackground1,
      '@media (forced-colors: active)': {
        backgroundColor: 'Window',
      },
    },

    [`&.${extraCalendarDayGridClassNames.daySelected}`]: {
      '@media (forced-colors: active)': {
        backgroundColor: 'HighlightText',
      },
    },
  },
});

export const useCalendarGridDayCellStyles = (props: CalendarGridDayCellProps) => {
  const dayCellStyles = useDayCellStyles();
  const daySelectedStyles = useDaySelectedStyles();
  const dayOutsideBoundsStyles = useDayOutsideBoundsStyles();
  const dayOutsideNavigatedMonthStyles = useDayOutsideNavigatedMonthStyles();
  const dayButtonStyles = useDayButtonStyles();
  const dayIsTodayStyles = useDayIsTodayStyles();
  const dayMarkerStyles = useDayMarkerStyles();

  const { dateRangeType, lightenDaysOutsideNavigatedMonth } = props;

  return {
    dayCell: dayCellStyles.base,
    daySelected: dateRangeType !== DateRangeType.Month ? daySelectedStyles.dateRangeTypeNotMonth : '',
    dayOutsideBounds: dayOutsideBoundsStyles.base,
    dayOutsideNavigatedMonth: lightenDaysOutsideNavigatedMonth
      ? dayOutsideNavigatedMonthStyles.lightenDaysOutsideNavigatedMonth
      : '',
    dayButton: dayButtonStyles.base,
    dayIsToday: dayIsTodayStyles.base,
    dayMarker: dayMarkerStyles.base,
  };
};
