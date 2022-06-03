import { AvatarGroupProps } from '../AvatarGroup';

export type AvatarGroupContextValue = Pick<AvatarGroupProps, 'size' | 'layout'> & {
  isOverflow?: boolean;
  avatarCount?: number;
};

export type AvatarGroupContextValues = {
  avatarGroup: AvatarGroupContextValue;
};
