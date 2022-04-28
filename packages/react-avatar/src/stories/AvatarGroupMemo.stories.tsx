import * as React from 'react';
import { AvatarGroupProps, Avatar } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { Label } from '@fluentui/react-label';
import { AvatarGroup } from '../AvatarGroup';
import { Button } from '@fluentui/react-button';

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

export const Memo = (props: Partial<AvatarGroupProps>) => {
  const styles = useStyles();
  const [maxAvatars, setMaxAvatars] = React.useState(5);
  const [avatars, setAvatars] = React.useState(avatarNames.map((n, k) => <Avatar color="colorful" key={k} name={n} />));
  const _shift = (arr: JSX.Element[]): JSX.Element[] => {
    const shiftItem = arr.shift();
    if (arr !== undefined && shiftItem !== undefined) {
      return [...arr, shiftItem];
    }
    return arr;
  };
  const [layout, setLayout] = React.useState<AvatarGroupProps['layout']>('grid');

  const shuffle = () => {
    console.log('shuffled');
    setAvatars(_shift(avatars));
  };
  const shuffleNonOverflowed = () => {
    console.log('shuffled non overflowed');
    setAvatars([..._shift(avatars.slice(0, maxAvatars)), ...avatars.slice(maxAvatars)]);
  };
  const shuffleOverflowed = () => {
    console.log('shuffled overflowed');
    setAvatars([...avatars.slice(0, maxAvatars), ..._shift(avatars.slice(maxAvatars))]);
  };
  const removeEnd = () => {
    console.log('removed end');
    setAvatars(avatars.slice(0, avatars.length - 1));
  };
  const removeStart = () => {
    console.log('removed end');
    setAvatars(avatars.slice(1));
  };
  const add = () => {
    console.log('add');
    setAvatars([...avatars, <Avatar name="Esteban Munoz" color="colorful" key={20} />]);
  };

  return (
    <div className={styles.example}>
      <div className={styles.container}>
        <Label>AvatarGroup with {layout} layout</Label>
        <AvatarGroup maxAvatars={maxAvatars} layout={layout}>
          {avatars}
        </AvatarGroup>
      </div>
      <div>
        <Button onClick={shuffle}>Shuffle</Button>
        <Button onClick={shuffleNonOverflowed}>Shuffle non overflowed Avatars</Button>
        <Button onClick={shuffleOverflowed}>Shuffle overflowed Avatars</Button>
        <Button onClick={removeEnd}>Remove Avatar from end</Button>
        <Button onClick={removeStart}>Remove Avatar from start</Button>
        <Button onClick={add}>Add Avatar at end</Button>
      </div>
      <div>
        <input onChange={e => setMaxAvatars(Number(e.currentTarget.value))} defaultValue={maxAvatars} />
      </div>
      <div>
        <select onChange={e => setLayout(e.currentTarget.value as AvatarGroupProps['layout'])}>
          <option>grid</option>
          <option>stacked</option>
          <option>pie</option>
        </select>
      </div>
    </div>
  );
};
