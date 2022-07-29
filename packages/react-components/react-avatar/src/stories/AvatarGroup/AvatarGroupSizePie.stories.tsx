import * as React from 'react';
import { AvatarGroup, AvatarGroupItem, AvatarGroupOverflow } from '@fluentui/react-avatar';
import { makeStyles } from '@fluentui/react-components';
import type { AvatarSizes } from '@fluentui/react-avatar';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    flexDirection: 'column',
    rowGap: '10px',
  },
});

const names = [
  'Johnie McConnell',
  'Allan Munger',
  'Erik Nason',
  'Kristin Patterson',
  'Daisy Phillips',
  'Carole Poland',
  'Carlos Slattery',
  'Robert Tolbert',
  'Kevin Sturgis',
  'Charlotte Waltson',
  'Elliot Woodward',
];

const sizes = [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128];

export const SizePie = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {sizes.map(size => {
        const avatarGroupItems = names.map(name => <AvatarGroupItem name={name} key={size + '-' + name} />);
        return (
          <AvatarGroup layout="pie" size={size as AvatarSizes} key={size}>
            {avatarGroupItems.slice(0, 3)}
            <AvatarGroupOverflow>{avatarGroupItems.slice(3)}</AvatarGroupOverflow>
          </AvatarGroup>
        );
      })}
    </div>
  );
};

SizePie.parameters = {
  docs: {
    description: {
      story: 'An AvatarGroup with `stack` layout supports a range of sizes from 16 to 128. The default is 32.',
    },
  },
};
