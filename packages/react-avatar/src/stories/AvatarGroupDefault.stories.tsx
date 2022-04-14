import * as React from 'react';
import { Avatar } from '../Avatar';
import { makeStyles, shorthands } from '@griffel/react';
import { OverflowItem, Overflow, DATA_OVERFLOWING } from '@fluentui/react-priority-overflow';

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
    ...shorthands.overflow('hidden'),
    whiteSpace: 'nowrap',
    [`& > [${DATA_OVERFLOWING}]`]: {
      display: 'inline-block',
      visibility: 'hidden',
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
        </div>
      </Overflow>
    </div>
  );
};
