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

export const Default = (props: Partial<AvatarGroupProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.example}>
      {Array(avatarNames.length)
        .fill(0)
        .map((_, i) => (
          <div className={styles.container} key={i}>
            <Label>AvatarGroup with {i + 1} Avatars</Label>
            <AvatarGroup layout="pie">
              {avatarNames.slice(0, i + 1).map((n, k) => (
                <Avatar
                  color="colorful"
                  key={k}
                  name={n}
                  // image={
                  //   k === 0
                  //     ? {
                  //         src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg',
                  //       }
                  //     : {}
                  // }
                />
              ))}
            </AvatarGroup>
          </div>
        ))}
    </div>
  );
};
