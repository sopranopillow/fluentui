import { makeStyles, shorthands } from '@griffel/react';
import * as React from 'react';
import { Overflow, OverflowItem, Tab, TabList, TabProps } from '../index';
import { TabListOverflowMenu } from '../TabListOverflowMenu';

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    ...shorthands.padding('50px', '20px'),
    rowGap: '20px',
  },
});

export const WithOverflow = (props: Partial<TabProps>) => {
  const styles = useStyles();

  const tabIds = [...Array(10).keys()].map(i => `tab${i}`);

  return (
    <div className={styles.root}>
      <Overflow>
        <TabList {...props}>
          {tabIds.map((tabId, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <OverflowItem key={tabId} id={tabId}>
                <Tab value={tabId}>Tab {index}</Tab>
              </OverflowItem>
            );
          })}
          <TabListOverflowMenu itemIds={tabIds} />
        </TabList>
      </Overflow>
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
