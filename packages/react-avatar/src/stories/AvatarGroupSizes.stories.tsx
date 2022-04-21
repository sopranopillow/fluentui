import * as React from 'react';
import { AvatarGroupProps, Avatar } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { Label } from '@fluentui/react-label';
import { AvatarGroup } from '../AvatarGroup';
import { AvatarSizes } from '../Avatar';

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

const sizes = [20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128];

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

export const Sizes = (props: Partial<AvatarGroupProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.example}>
      {sizes.map((size, i) => (
        <div className={styles.container} key={i}>
          <Label>AvatarGroup with size {size}</Label>
          <AvatarGroup size={size as AvatarSizes} layout="stacked" iconOverflowIndicator>
            {avatarNames.map((n, k) => (
              <Avatar color="colorful" key={k} name={n} />
              // <Avatar color="colorful" key={k} />
            ))}
          </AvatarGroup>
        </div>
      ))}
    </div>
  );
};
