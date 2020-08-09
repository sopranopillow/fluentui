import * as React from 'react';
import { DefaultPalette } from 'office-ui-fabric-react';
import { Flex } from '../Flex';
import { FlexItem } from '../../FlexItem/FlexItem';
import { FlexTokens } from '../Flex.types';

// Styles definition
const stackStyles: React.CSSProperties = {
  background: DefaultPalette.themeTertiary,
};
const stackItemStyles: React.CSSProperties = {
  background: DefaultPalette.themePrimary,
  color: DefaultPalette.white,
  padding: 5,
};
const itemAlignmentsFlexStyles: React.CSSProperties = {
  background: DefaultPalette.themeTertiary,
  height: '100px',
};

// Tokens definition
const containerFlexTokens: FlexTokens = { gap: '5px' };
const horizontalGapFlexTokens: FlexTokens = {
  gap: '10px',
  padding: '10px',
};
const itemAlignmentsFlexTokens: FlexTokens = {
  gap: '5px',
  padding: '10px',
};
const clickableFlexTokens: FlexTokens = {
  padding: '10px',
};

export const HorizontalFlexReversedExample: React.FunctionComponent = () => {
  return (
    <Flex tokens={containerFlexTokens}>
      <span>Default horizontal stack</span>
      <Flex horizontal reversed disableShrink styles={stackStyles}>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
      </Flex>

      <span>Horizontal gap between items</span>
      <Flex horizontal reversed disableShrink styles={stackStyles} tokens={horizontalGapFlexTokens}>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
      </Flex>

      <span>Item alignments</span>
      <Flex horizontal reversed disableShrink styles={itemAlignmentsFlexStyles} tokens={itemAlignmentsFlexTokens}>
        <FlexItem align="auto" style={stackItemStyles}>
          <span>Auto-aligned item</span>
        </FlexItem>
        <FlexItem align="stretch" style={stackItemStyles}>
          <span>Stretch-aligned item</span>
        </FlexItem>
        <FlexItem align="baseline" style={stackItemStyles}>
          <span>Baseline-aligned item</span>
        </FlexItem>
        <FlexItem align="start" style={stackItemStyles}>
          <span>Start-aligned item</span>
        </FlexItem>
        <FlexItem align="center" style={stackItemStyles}>
          <span>Center-aligned item</span>
        </FlexItem>
        <FlexItem align="end" style={stackItemStyles}>
          <span>End-aligned item</span>
        </FlexItem>
      </Flex>

      <span>Clickable stack</span>
      <Flex horizontal onClick={_onClick} styles={stackStyles} tokens={clickableFlexTokens}>
        <span>Click inside this box</span>
      </Flex>
    </Flex>
  );
};

function _onClick() {
  // eslint-disable-next-line no-alert
  alert('Clicked Flex');
}
