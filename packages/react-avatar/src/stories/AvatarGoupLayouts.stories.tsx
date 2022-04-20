import * as React from 'react';
import { AvatarGroupProps, Avatar } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { AvatarGroup } from '../AvatarGroup';

const avatarNames = [
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

const useStyles = makeStyles({
  container: {
    // ...shorthands.border('2px', 'solid', 'gray'),
  },
  example: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});

export const Layouts = (props: Partial<AvatarGroupProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.example}>
      <AvatarGroup layout="grid" className={styles.container}>
        {avatarNames.map((n, k) => (
          <Avatar color="colorful" key={k} name={n} />
        ))}
      </AvatarGroup>
      <AvatarGroup layout="stacked" className={styles.container}>
        {avatarNames.map((n, k) => (
          <Avatar color="colorful" key={k} name={n} />
        ))}
      </AvatarGroup>
    </div>
  );
};
