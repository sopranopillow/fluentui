import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { AvatarGroupProps, AvatarGroupState } from './AvatarGroup.types';
import { resolveShorthand } from '@fluentui/react-utilities';
import { useOverflowContext, useOverflowMenu, OverflowItem } from '@fluentui/react-priority-overflow';
/**
 * Create the state required to render AvatarGroup.
 *
 * The returned state can be modified with hooks such as useAvatarGroupStyles_unstable,
 * before being passed to renderAvatarGroup_unstable.
 *
 * @param props - props from this instance of AvatarGroup
 * @param ref - reference to root HTMLElement of AvatarGroup
 */

const OverflowMenu = (props: { text: string }) => {
  const { ref, isOverflowing } = useOverflowMenu<HTMLButtonElement>();

  console.log(useOverflowContext(ctx => ctx.itemVisibility));
  console.log(useOverflowContext(ctx => ctx.hasOverflow));

  return !isOverflowing ? (
    <div>
      <button ref={ref}>{`${10}`}</button>
    </div>
  ) : null;
};

export const useAvatarGroup_unstable = (props: AvatarGroupProps, ref: React.Ref<HTMLElement>): AvatarGroupState => {
  const { layout = 'grid', size = 32, min = 3, max = 5, children, ...rest } = props;

  return {
    components: {
      root: 'div',
      avatarMenu: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      children: React.Children.map(children, (child, k) => (
        <OverflowItem key={k} id={`overflowItem-${k}`}>
          {child}
        </OverflowItem>
      )),
      ...rest,
    }),
    avatarMenu: resolveShorthand(props.avatarMenu, {
      required: true,
      defaultProps: {
        children: <OverflowMenu text={`+ ${React.Children.count(children)}`} />,
      },
    }),
    layout,
    size,
    min,
    max,
    overflowed: true,
  };
};
