import type { IFocusZoneProps } from '@fluentui/react-focus';

/**
 * Globals set by some of the stories. A story may set some or none of these.
 */
export type FZTestGlobals = {
  /** Sets props of the FocusZone (used by several stories) */
  setProps?: (props: IFocusZoneProps) => void;
  /** Calls FocusZone's imperative `focus()` method on a `componentRef` (used by Focusing story) */
  imperativeFocus?: () => void;
};
