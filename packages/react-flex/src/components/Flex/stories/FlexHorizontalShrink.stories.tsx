import * as React from 'react';
import { DefaultPalette, Slider } from 'office-ui-fabric-react';
import { Flex } from '../Flex';
import { FlexTokens } from '../Flex.types';
import { FlexItem } from '../../FlexItem/FlexItem';

// Non-mutating styles definition
const stackItemStyles: React.CSSProperties = {
  alignItems: 'center',
  background: DefaultPalette.themePrimary,
  color: DefaultPalette.white,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  overflow: 'hidden',
};

const nonShrinkingFlexItemStyles: React.CSSProperties = {
  alignItems: 'center',
  background: DefaultPalette.themePrimary,
  color: DefaultPalette.white,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  overflow: 'hidden',
  width: 500,
};

// Tokens definition
const outerFlexTokens: FlexTokens = { gap: '5px' };
const innerFlexTokens: FlexTokens = {
  gap: '5px',
  padding: '10px',
};

export const HorizontalFlexShrinkExample: React.FunctionComponent = () => {
  const [stackWidth, setFlexWidth] = React.useState<number>(100);

  // Mutating styles definition
  const stackStyles: React.CSSProperties = {
    background: DefaultPalette.themeTertiary,
    overflow: 'hidden',
    width: `${stackWidth}%`,
  };

  return (
    <Flex tokens={outerFlexTokens}>
      <Slider
        label="Change the stack width to see how child items shrink:"
        min={1}
        max={100}
        step={1}
        defaultValue={100}
        showValue={true}
        onChange={setFlexWidth}
      />
      <Flex horizontal styles={stackStyles} tokens={innerFlexTokens}>
        <FlexItem tokens={{ grow: '1' }} style={stackItemStyles}>
          I shrink
        </FlexItem>
        <FlexItem tokens={{ grow: '1' }} style={stackItemStyles}>
          I shrink
        </FlexItem>
        <FlexItem tokens={{ grow: '1', shrink: '0' }} style={nonShrinkingFlexItemStyles}>
          I don't shrink
        </FlexItem>
        <FlexItem tokens={{ grow: '1' }} style={stackItemStyles}>
          I shrink
        </FlexItem>
      </Flex>
    </Flex>
  );
};
