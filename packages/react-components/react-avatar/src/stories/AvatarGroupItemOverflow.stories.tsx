import * as React from 'react';
import { AvatarGroupContext } from '../contexts/index';
import { AvatarGroupItem, AvatarGroupItemProps } from '../index';

export const Overflow = (props: Partial<AvatarGroupItemProps>) => (
  <AvatarGroupContext.Provider value={{ layout: undefined, overflowItem: true, size: 24 }}>
    <AvatarGroupItem name="Esteban Munoz" {...props} />
  </AvatarGroupContext.Provider>
);
