import { ReactWrapper } from 'enzyme';
import { FocusZone } from '@fluentui/react-bindings';
import { Ref, RefFindNode } from '@fluentui/react-component-ref';

const getDisplayName = (Component: React.ReactType) => {
  return (
    (Component as React.ComponentType).displayName ||
    (Component as React.ComponentType).name ||
    (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown')
  );
};

export const helperComponentNames = [...[Ref, RefFindNode]].map(getDisplayName);

export const toNextNonTrivialChild = (from: ReactWrapper): ReactWrapper => {
  const current = from.childAt(0);

  if (!current) {
    return current;
  }

  return helperComponentNames.indexOf(current.name()) === -1 ? current : toNextNonTrivialChild(current);
};

export const getComponent = (wrapper: ReactWrapper) => {
  let componentElement = toNextNonTrivialChild(wrapper);

  // passing through Focus Zone wrappers
  if (componentElement.type() === FocusZone) {
    // another HOC component is added: FocusZone
    componentElement = componentElement.childAt(0); // skip through <FocusZone>
  }

  // in that case 'topLevelChildElement' we've found so far is a wrapper's topmost child
  // thus, we should continue search
  return toNextNonTrivialChild(componentElement);
};
