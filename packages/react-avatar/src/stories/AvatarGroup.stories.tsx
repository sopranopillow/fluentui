import { AvatarGroup } from '../index';

import descriptionMd from './AvatarGroupDescription.md';
import bestPracticesMd from './AvatarGroupBestPractices.md';

export { Default } from './AvatarGroupDefault.stories';
export { Layouts } from './AvatarGoupLayouts.stories';
export { Sizes } from './AvatarGroupSizes.stories';

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
};
