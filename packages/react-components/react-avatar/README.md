# @fluentui/react-avatar

**React Avatar components for [Fluent UI](https://react.fluentui.dev/)**

The Avatar component represents a person or entity. It displays the person's image, initials, or an icon, and can be either circular or square.

The AvatarGroup component represents a group of multiple people or entities by taking care of the arrangement of individual Avatars in a spread, stack, or pie layout.

## Usage

To import Avatar:

```js
import { Avatar } from '@fluentui/react-components';
```

To import AvatarGroup:

```js
import { AvatarGroup, AvatarGroupItem } from '@fluentui/react-components';
```

### Examples

```jsx
<Avatar name="Miguel Garcia" />
<Avatar size={72} name="Mona Kane" image="./MonaKane.jpg" />
<Avatar shape="square" icon={<IDBadgeIcon />} />
```

Displaying a badge:

```jsx
<Avatar name="Allan Munger" badge={<PresenceBadge status="busy">} />
```

With active state indication:

```jsx
<Avatar name="Daisy Phillips" active={true} activeAppearance="ring-shadow" />
<Avatar name="Robin Counts" active={false} activeAppearance="ring-shadow" />
```

AvatarGroup:

```jsx
<AvatarGroup>
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
```

See [Fluent UI Storybook](https://react.fluentui.dev/) for more detailed usage examples.

Alternatively, run Storybook locally with:

1. `yarn start`
2. Select `react-avatar` from the list.

### Specification

See [SPEC.md](./SPEC.md).

### Migration Guide

If you're upgrading to Fluent UI v9 see [MIGRATION.md](./src/stories/Avatar/MIGRATION.md) for guidance on updating to the latest Avatar implementation and [MIGRATION.md](./src/stories/AvatarGroup/MIGRATION.md) for AvatarGroup.
