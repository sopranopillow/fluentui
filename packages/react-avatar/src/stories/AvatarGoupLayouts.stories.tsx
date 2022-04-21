import * as React from 'react';
import { AvatarGroupProps, Avatar } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { Label } from '@fluentui/react-label';
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
  'Karin Blair',
  'Maia Maiewska',
  'Andre Lawson',
  'Cecil Folk',
];

const useStyles = makeStyles({
  example: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('5px'),
  },
});

export const Layouts = (props: Partial<AvatarGroupProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.example}>
      <div className={styles.container}>
        <Label>AvatarGroup with Grid layout</Label>
        <AvatarGroup layout="grid">
          {avatarNames.map((n, k) => (
            <Avatar color="colorful" key={k} name={n} />
          ))}
        </AvatarGroup>
      </div>
      <div className={styles.container}>
        <Label>AvatarGroup with stacked layout</Label>
        <AvatarGroup layout="stacked">
          {avatarNames.map((n, k) => (
            <Avatar color="colorful" key={k} name={n} />
          ))}
        </AvatarGroup>
      </div>
      <div className={styles.container}>
        <Label>AvatarGroup with pie layout</Label>
        <AvatarGroup layout="pie">
          {avatarNames.map((n, k) => (
            <Avatar color="colorful" key={k} name={n} />
          ))}
        </AvatarGroup>
      </div>
    </div>
  );
};
