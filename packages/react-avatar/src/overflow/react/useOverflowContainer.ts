import * as React from 'react';
import { useEventCallback } from '@fluentui/react-utilities';
import {
  ObserveOptions,
  OnUpdateItemVisibility,
  OnUpdateOverflow,
  OverflowItemEntry,
  OverflowManager,
} from '../native/overflowManager';

export interface UseOverflowContainerOptions extends ObserveOptions {}

export const useOverflowContainer = (update: OnUpdateOverflow, options: UseOverflowContainerOptions = {}) => {
  const { overflowAxis, overflowDirection, padding, minimumVisible, onUpdateItemVisibility } = options;
  // DOM ref to the overflow container element
  const containerRef = React.useRef<HTMLDivElement>(null);
  const updateOverflowItems = useEventCallback(update);
  const [overflowManager] = React.useState<OverflowManager>(() => new OverflowManager(updateOverflowItems));

  // eslint-disable-next-line no-restricted-properties
  React.useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    overflowManager.observe(containerRef.current, {
      overflowDirection,
      overflowAxis,
      padding,
      minimumVisible,
      onUpdateItemVisibility: onUpdateItemVisibility ?? defaultUpdateVisibilityCallback,
    });

    return () => {
      overflowManager.disconnect();
    };
  }, [
    updateOverflowItems,
    overflowManager,
    overflowDirection,
    overflowAxis,
    padding,
    minimumVisible,
    onUpdateItemVisibility,
  ]);

  const registerItem = React.useCallback(
    (item: OverflowItemEntry) => {
      overflowManager.addItems(item);

      return () => overflowManager.removeItem(item.id);
    },
    [overflowManager],
  );

  const updateOverflow = React.useCallback(() => {
    overflowManager.updateOverflow();
  }, [overflowManager]);

  return {
    containerRef,
    registerItem,
    updateOverflow,
  };
};

const defaultUpdateVisibilityCallback: OnUpdateItemVisibility = ({ item, visible }) => {
  if (visible) {
    item.element.style.removeProperty('display');
  } else {
    item.element.style.setProperty('display', 'none');
  }
};
