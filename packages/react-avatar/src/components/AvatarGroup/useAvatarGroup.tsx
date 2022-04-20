import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { AvatarGroupProps, AvatarGroupState } from './AvatarGroup.types';
import { PopoverSurface } from '@fluentui/react-popover';
import { Button } from '@fluentui/react-button';
import { Label } from '@fluentui/react-label';

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
  const { layout = 'grid', maxAvatars = 5, children, size = 32, ...rest } = props;
  const childrenCount = React.Children.count(children);

  const childrenArr = React.Children.toArray(children);
  const renderedChildren = childrenCount <= maxAvatars ? childrenArr : childrenArr.slice(0, maxAvatars);

  const popoverChildren =
    childrenCount <= maxAvatars
      ? null
      : childrenArr.slice(maxAvatars, childrenCount).map((child, k) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          return (
            <div className="fui-AvatarGroup__popoverSurfaceItem" key={k}>
              {child}
              <Label size="medium">{child.props.name}</Label>
            </div>
          );
        });

  const state: AvatarGroupState = {
    layout,
    maxAvatars,
    size,

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
        children: `+${childrenCount - maxAvatars}`,
        shape: 'circular',
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
