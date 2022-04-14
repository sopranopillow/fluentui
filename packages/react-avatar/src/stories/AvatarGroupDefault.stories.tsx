import * as React from 'react';
import { Avatar } from '../Avatar';
import { makeStyles, shorthands } from '@griffel/react';
import {
  OverflowItem,
  Overflow,
  DATA_OVERFLOWING,
  DATA_OVERFLOW_ITEM,
  useOverflowMenu,
} from '@fluentui/react-priority-overflow';

const useStyles = makeStyles({
  container: {
    boxSizing: 'border-box',
    // width: 'fit-content',
    display: 'inline-flex',
    // minWidth: 'fit-content',
    resize: 'horizontal',
    backgroundColor: 'lightblue',
    ...shorthands.overflow('hidden'),
  },

  overflowContainer: {
    display: 'flex',
    ...shorthands.overflow('hidden'),
    whiteSpace: 'nowrap',
    [`& > [${DATA_OVERFLOW_ITEM}]`]: {
      display: 'inline-block',
      order: 1,
    },
    [`& > [${DATA_OVERFLOWING}]`]: {
      display: 'inline-block',
      visibility: 'hidden',
      order: 1000,
    },
  },
});

export const Default = () => {
  const styles = useStyles();

  const people = [
    'Katri Athokas',
    'Elvia Atkins',
    'Cameron Evans',
    'Wanda Howard',
    'Mona Kane',
    'Allan Munger',
    'Daisy Phillips',
    'Robert Tolbert',
    'Kevin Sturgis',
    'Elliot Woodward',
  ];

  return (
    // <AvatarGroup>
    //     // eslint-disable-next-line react/jsx-key
    //     <Avatar color="colorful" name={name} />
    //   ))}
    // </AvatarGroup>
    <div className={styles.container}>
      <Overflow>
        <div className={styles.overflowContainer}>
          {/* <div style={{ display: 'inline-flex' }}> */}
          {people.map((name, k) => (
            <OverflowItem key={k} id={`avatar-${k}`}>
              <Avatar id={`avatar-${k}`} color="colorful" name={name} />
            </OverflowItem>
          ))}
          <OverflowMenu />
        </div>
      </Overflow>
    </div>
  );
};

const OverflowMenu = () => {
  const { ref, isOverflowing, overflowCount } = useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <button style={{ order: 1 }} ref={ref}>
      {overflowCount}
    </button>
  );
};
