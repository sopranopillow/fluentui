import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { AvatarGroupProps, AvatarGroupState } from './AvatarGroup.types';
import { PopoverSurface } from '@fluentui/react-popover';
import { Button } from '@fluentui/react-button';
import { MoreHorizontalRegular } from '@fluentui/react-icons';
import { Label } from '@fluentui/react-label';
import { useFluent } from '@fluentui/react-shared-contexts';
import { getInitials } from '../../utils/getInitials';

/**
 * Create the state required to render AvatarGroup.
 *
 * The returned state can be modified with hooks such as useAvatarGroupStyles_unstable,
 * before being passed to renderAvatarGroup_unstable.
 *
 * @param props - props from this instance of AvatarGroup
 * @param ref - reference to root HTMLElement of AvatarGroup
 */
export const useAvatarGroup_unstable = (props: AvatarGroupProps, ref: React.Ref<HTMLElement>): AvatarGroupState => {
  const { layout = 'grid', maxAvatars = 5, iconOverflowIndicator = false, children, size = 32, ...rest } = props;
  const { dir } = useFluent();
  const childrenCount = React.Children.count(children);
  const childrenArr = React.Children.toArray(children);

  // TODO: memoize

  // TODO: rename variable
  // NOTE: if the pie layout is selected maxAvatars will be ignored
  const maxAvatarsFinal = layout === 'pie' ? 3 : maxAvatars;

  // Splitting children for the avatars that won't appear in the Popover
  let renderedChildren = childrenCount > maxAvatarsFinal ? childrenArr.slice(0, maxAvatarsFinal) : childrenArr;
  // Making sure that all the children that won't appear in the Popover are the given size
  renderedChildren = renderedChildren.map(child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    let initials = child.props.initials;
    // TODO: figure out if this is expensive
    // showing only first initial if size is less than 40
    if (layout === 'pie' && child.props.name && size < 40) {
      initials = getInitials(child.props.name, dir === 'rtl')[0];
    }

    return React.cloneElement(child, { size: size, initials: initials });
  });

  let popoverChildren = null;
  // Getting the Avatars that will be shown in the Popover
  if (childrenCount > maxAvatarsFinal) {
    popoverChildren = childrenArr.slice(maxAvatarsFinal, childrenCount).map((child, k) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      // TODO: memoize, expensive?
      // The Avatars inside the Popover must be 32
      // The className is added to add styles but should should not appear in props as this
      // is a default content and can be overriden
      return (
        <div className="fui-AvatarGroup__popoverSurfaceItem" key={k}>
          {React.cloneElement(child, { size: 32 })}
          <Label size="medium">{child.props.name}</Label>
        </div>
      );
    });
  }

  const state: AvatarGroupState = {
    layout,
    maxAvatars,
    size,
    iconOverflowIndicator,

    components: {
      root: 'div',
      popoverTrigger: Button,
      popoverSurface: PopoverSurface,
    },

    root: getNativeElementProps('div', {
      ref,
      role: 'group',
      children: renderedChildren,
      ...rest,
    }),

    popoverTrigger: resolveShorthand(props.popoverTrigger, {
      required: true,
      defaultProps: {
        children: layout === 'pie' || iconOverflowIndicator ? null : `+${childrenCount - maxAvatarsFinal}`,
        shape: 'circular',
        icon: layout !== 'pie' && iconOverflowIndicator ? <MoreHorizontalRegular /> : undefined,
        appearance: layout === 'pie' ? 'transparent' : 'outline',
      },
    }),

    popoverSurface: resolveShorthand(props.popoverSurface, {
      required: true,
      defaultProps: {
        children: popoverChildren,
      },
    }),
  };

  return state;
};
