import * as React from 'react';
import { AvatarGroup } from '../AvatarGroup';
import type { AvatarGroupProps } from '../AvatarGroup';
import { AvatarGroupItem } from '../AvatarGroupItem';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});

export const Default = (props: Partial<AvatarGroupProps>) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <AvatarGroup {...props}>
        <AvatarGroupItem name="Katri Athokas" />
        <AvatarGroupItem name="Elvia Atkins" />
        <AvatarGroupItem name="Cameron Evans" />
        <AvatarGroupItem name="Wanda Howard" />
        <AvatarGroupItem name="Mona Kane" />
        <AvatarGroupItem name="Allan Munger" />
        <AvatarGroupItem name="Daisy Phillips" />
        <AvatarGroupItem name="Robert Tolbert" />
        <AvatarGroupItem name="Kevin Sturgis" />
      </AvatarGroup>
    </div>
  );
};
