import * as React from 'react';
import { makeStyles, shorthands } from '@griffel/react';
import { Overflow } from '../components/Overflow';
import { OverflowItem } from '../components/OverflowItem';
import { Avatar } from '@fluentui/react-avatar';
import { useOverflowMenu } from '../useOverflowMenu';
import { Popover, PopoverTrigger, PopoverSurface } from '@fluentui/react-popover';
import { Button } from '@fluentui/react-button';
import { Label } from '@fluentui/react-label';

const useStyles = makeStyles({
  container: {
    display: 'inline-flex',
    flexWrap: 'nowrap',
    width: 'fit-content',
    ...shorthands.overflow('hidden'),
    flexShrink: 0,
  },
  surface: {
    display: 'flex',
    flexDirection: 'column',
  },
  example: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  avatar: {
    flexShrink: 0,
  },
});

const names = [
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

const OverflowMenu: React.FC<{ overflowedAvatars: string[] }> = ({ overflowedAvatars }) => {
  const { ref, overflowCount, isOverflowing } = useOverflowMenu<HTMLButtonElement>();
  const styles = useStyles();

  return isOverflowing ? null : (
    <Popover>
      <PopoverTrigger>
        <Button ref={ref}>+{overflowCount}</Button>
      </PopoverTrigger>
      <PopoverSurface className={styles.surface}>
        {overflowedAvatars.map((name, k) => (
          <Label key={k}>
            <Avatar name={name} color="colorful" />
            {name}
          </Label>
        ))}
      </PopoverSurface>
    </Popover>
  );
};

export const AvatarStory = () => {
  const styles = useStyles();

  return (
    <div className={styles.example}>
      {names.map((_, i) => (
        <div key={i} className={styles.container}>
          <Overflow minimumVisible={3}>
            <div className={styles.container}>
              {names.map((name, k) =>
                k <= i ? (
                  <OverflowItem key={k} id={name + '-' + k}>
                    <Avatar className={styles.avatar} name={name} color="colorful" />
                  </OverflowItem>
                ) : null,
              )}
              <OverflowMenu overflowedAvatars={names} />
            </div>
          </Overflow>
        </div>
      ))}
    </div>
  );
};
