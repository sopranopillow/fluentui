import * as React from 'react';
import { AvatarGroup } from '../index';
import { Avatar } from '../Avatar';
import { Overflow } from '../overflow/react/Overflow';
import { makeStyles, shorthands } from '@griffel/react';
import { OverflowItem } from '../overflow/react/OverflowItem';

const useStyles = makeStyles({
  container: {
    boxSizing: 'border-box',
    // width: 'fit-content',
    // display: 'inline-flex',
    // minWidth: 'fit-content',
    resize: 'horizontal',
    backgroundColor: 'lightblue',
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
        <div>
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
