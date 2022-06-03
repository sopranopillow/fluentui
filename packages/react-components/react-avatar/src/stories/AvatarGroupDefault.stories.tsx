import * as React from 'react';
import { AvatarGroupItem, AvatarSizes } from '../index';
// import { makeStyles, shorthands } from '@griffel/react';
// import { Label } from '@fluentui/react-label';
import { AvatarGroup } from '../AvatarGroup';
// import { Button } from '@fluentui/react-button';

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

export const Default = () => {
  const size = [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {size.map((s, k) => (
        <AvatarGroup layout="stack" key={k} size={s as AvatarSizes}>
          {avatarNames.map((name, key) => (
            <AvatarGroupItem key={key} name={name} />
          ))}
        </AvatarGroup>
      ))}
    </div>
  );
  //   return (
  //     <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
  //       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'gray' }}>
  //         {Array(avatarNames.length)
  //           .fill(0)
  //           .map((n, key) => (
  //             <AvatarGroup key={key}>
  //               {avatarNames.slice(0, key).map((child, k) => (
  //                 <AvatarGroupItem key={k} name={child} />
  //               ))}
  //             </AvatarGroup>
  //           ))}
  //       </div>
  //       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'gray' }}>
  //         {Array(avatarNames.length)
  //           .fill(0)
  //           .map((n, key) => (
  //             <AvatarGroup layout="stack" key={key}>
  //               {avatarNames.slice(0, key).map((child, k) => (
  //                 <AvatarGroupItem key={k} name={child} />
  //               ))}
  //             </AvatarGroup>
  //           ))}
  //       </div>
  //       <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'gray' }}>
  //         {Array(avatarNames.length)
  //           .fill(0)
  //           .map((n, key) => (
  //             <AvatarGroup layout="pie" key={key}>
  //               {avatarNames.slice(0, key).map((child, k) => (
  //                 <AvatarGroupItem key={k} name={child} />
  //               ))}
  //             </AvatarGroup>
  //           ))}
  //       </div>
  //     </div>
  //   );
};

// export const Default = (props: Partial<AvatarGroupProps>) => {
//   const styles = useStyles();
//   const [maxAvatars, setMaxAvatars] = React.useState(5);
//   const [iconIndicator, setIconIndicator] = React.useState(false);
//   const [size, setSize] = React.useState(36);
//   const [avatars, setAvatars] = React.useState(avatarNames.map((n, k) => <AvatarGroupItem key={k} name={n} />));
//   const _shift = (arr: JSX.Element[]): JSX.Element[] => {
//     const shiftItem = arr.shift();
//     if (arr !== undefined && shiftItem !== undefined) {
//       return [...arr, shiftItem];
//     }
//     return arr;
//   };
//   const [layout, setLayout] = React.useState<AvatarGroupProps['layout']>('pie');

//   const sizes = [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128];

//   const shuffle = () => {
//     console.log('shuffled');
//     setAvatars(_shift(avatars));
//   };
//   const shuffleNonOverflowed = () => {
//     console.log('shuffled non overflowed');
//     setAvatars([..._shift(avatars.slice(0, maxAvatars)), ...avatars.slice(maxAvatars)]);
//   };
//   const shuffleOverflowed = () => {
//     console.log('shuffled overflowed');
//     setAvatars([...avatars.slice(0, maxAvatars), ..._shift(avatars.slice(maxAvatars))]);
//   };
//   const removeEnd = () => {
//     console.log('removed end');
//     setAvatars(avatars.slice(0, avatars.length - 1));
//   };
//   const removeStart = () => {
//     console.log('removed end');
//     setAvatars(avatars.slice(1));
//   };
//   const add = () => {
//     console.log('add');
//     setAvatars([...avatars, <AvatarGroupItem name="Esteban Munoz" key={20} />]);
//   };
//   const toggleIconIndicator = () => {
//     setIconIndicator(!iconIndicator);
//   };

//   return (
//     <div className={styles.example}>
//       <div className={styles.container}>
//         <Label>AvatarGroup with {layout} layout</Label>
//         <AvatarGroup
//           size={size as AvatarSizes}
//           overflowIndicator={iconIndicator ? 'icon' : 'count'}
//           maxAvatars={maxAvatars}
//           layout={layout}
//         >
//           {avatars}
//         </AvatarGroup>
//       </div>
//       <div>
//         <Button onClick={shuffle}>Shuffle</Button>
//         <Button onClick={shuffleNonOverflowed}>Shuffle non overflowed Avatars</Button>
//         <Button onClick={shuffleOverflowed}>Shuffle overflowed Avatars</Button>
//         <Button onClick={removeEnd}>Remove Avatar from end</Button>
//         <Button onClick={removeStart}>Remove Avatar from start</Button>
//         <Button onClick={add}>Add Avatar at end</Button>
//       </div>
//       <div>
//         <input onChange={e => setMaxAvatars(Number(e.currentTarget.value))} defaultValue={maxAvatars} />
//       </div>
//       <div>
//         <select onChange={e => setLayout(e.currentTarget.value as AvatarGroupProps['layout'])}>
//           <option>spread</option>
//           <option>stack</option>
//           <option>pie</option>
//         </select>
//         <select onChange={e => setSize(Number(e.currentTarget.value))}>
//           {sizes.map((s, k) => (
//             <option key={k}>{s}</option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <Button onClick={toggleIconIndicator}>{!iconIndicator ? 'use icon' : 'use text'}</Button>
//       </div>
//     </div>
//   );
// };
