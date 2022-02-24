import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import * as React from 'react';
import { Button } from '../../../react-button/src/Button';
import { Menu } from '../../../react-menu/src/Menu';
import { MenuItem } from '../../../react-menu/src/MenuItem';
import { MenuList } from '../../../react-menu/src/MenuList';
import { MenuPopover } from '../../../react-menu/src/MenuPopover';
import { MenuTrigger } from '../../../react-menu/src/MenuTrigger';
import { Overflow, OverflowItem, Tab, TabList } from '../index';
import { useOverflowContext } from '../overflow/react/overflowContext';
import { useOverflowMenu } from '../overflow/react/useOverflowMenu';

import {
  Calendar3DayRegular,
  CalendarAgendaRegular,
  CalendarChatRegular,
  CalendarDayRegular,
  CalendarMonthRegular,
  CalendarSearchRegular,
  CalendarTodayRegular,
  CalendarWeekStartRegular,
  CalendarWorkWeekRegular,
} from '@fluentui/react-icons';
import { SelectTabEventHandler } from '../TabList';

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    ...shorthands.padding('50px', '20px'),
    rowGap: '20px',
    minHeight: '600px', //this helps the page remain at height when vertical tabs are resized
  },
  example: {
    ...shorthands.border('2px', 'solid', 'grey'),
    ...shorthands.padding('10px'),
    ...shorthands.overflow('hidden'),
    width: '800px',
    height: 'fit-content',
    resize: 'horizontal',
  },
  vertical: {
    resize: 'vertical',
    width: 'fit-content',
    height: '350px',
  },
});

const tabs = [
  {
    id: 'today',
    name: 'Today',
    icon: <CalendarTodayRegular />,
  },
  {
    id: 'agenda',
    name: 'Agenda',
    icon: <CalendarAgendaRegular />,
  },
  {
    id: 'day',
    name: 'Day',
    icon: <CalendarDayRegular />,
  },
  {
    id: 'threeDay',
    name: 'Three Day',
    icon: <Calendar3DayRegular />,
  },
  {
    id: 'workWeek',
    name: 'Work Week',
    icon: <CalendarWorkWeekRegular />,
  },
  {
    id: 'week',
    name: 'Week',
    icon: <CalendarWeekStartRegular />,
  },
  {
    id: 'month',
    name: 'Month',
    icon: <CalendarMonthRegular />,
  },
  {
    id: 'search',
    name: 'Search',
    icon: <CalendarSearchRegular />,
  },
  {
    id: 'chat',
    name: 'Conversations',
    icon: <CalendarChatRegular />,
  },
];

type OverflowMenuProps = {
  onTabSelect?: (tabId: string) => void;
};

const OverflowMenu = (props: OverflowMenuProps) => {
  const { ref, isOverflowing } = useOverflowMenu<HTMLButtonElement>();

  const itemVisibility = useOverflowContext(ctx => ctx.itemVisibility);
  const overflowTabs = tabs.filter(tab => !itemVisibility[tab.id]);

  const onItemClick = (tabId: string) => {
    props.onTabSelect?.(tabId);
  };

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu hasIcons>
      <MenuTrigger>
        <Button appearance="transparent" ref={ref}>
          ...
        </Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {overflowTabs.map(tab => {
            return (
              <MenuItem key={tab.id} icon={tab.icon} onClick={() => onItemClick(tab.id)}>
                {tab.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export const WithOverflow = () => {
  const styles = useStyles();

  const [selectedTabId, setSelectedTabId] = React.useState<string>('today');
  const onTabSelect: SelectTabEventHandler = (e, data) => {
    console.log('selected tab', data.value);
    setSelectedTabId(data.value as string);
  };

  const onMenuTabSelect = (tabId: string) => {
    console.log('selected tab by menu', tabId);
    setSelectedTabId(tabId);
  };

  return (
    <div className={styles.root}>
      <div className={styles.example}>
        <Overflow minimumVisible={1}>
          <TabList selectedValue={selectedTabId} onTabSelect={onTabSelect}>
            {tabs.map(tab => {
              return (
                <OverflowItem key={tab.id} id={tab.id} priority={tab.id === selectedTabId ? 7 : undefined}>
                  <Tab value={tab.id} icon={<span>{tab.icon}</span>}>
                    {tab.name}
                    {tab.id === selectedTabId ? 1000 : undefined}
                  </Tab>
                </OverflowItem>
              );
            })}
            <OverflowMenu onTabSelect={onMenuTabSelect} />
          </TabList>
        </Overflow>
      </div>
      <div className={mergeClasses(styles.example, styles.vertical)}>
        <Overflow minimumVisible={1} overflowAxis="vertical" overflowDirection="start">
          <TabList vertical>
            {tabs.map(tab => {
              return (
                <OverflowItem key={tab.id} id={tab.id}>
                  <Tab value={tab.id} icon={<span>{tab.icon}</span>}>
                    {tab.name}
                  </Tab>
                </OverflowItem>
              );
            })}
            <OverflowMenu />
          </TabList>
        </Overflow>
      </div>
    </div>
  );
};

WithOverflow.parameters = {
  docs: {
    description: {
      story: 'A tab list can support overflow by wrapping with Overflow and OverflowItem.',
    },
  },
};
