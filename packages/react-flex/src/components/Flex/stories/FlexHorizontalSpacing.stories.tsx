import * as React from 'react';
import { DefaultPalette } from 'office-ui-fabric-react';
import { Flex } from '../Flex';
import { FlexTokens } from '../Flex.types';

// Styles definition
const stackStyles: React.CSSProperties = {
  background: DefaultPalette.themeTertiary,
  width: 300,
};
const itemStyles: React.CSSProperties = {
  alignItems: 'center',
  background: DefaultPalette.themePrimary,
  color: DefaultPalette.white,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 50,
};

// Tokens definition
const sectionFlexTokens: FlexTokens = { gap: '10px' };
const numericalSpacingFlexTokens: FlexTokens = {
  gap: '10px',
  padding: '10px',
};
const customSpacingFlexTokens: FlexTokens = {
  gap: '10%',
  padding: 's1 15%',
};
const themedExtraSmallFlexTokens: FlexTokens = {
  gap: 's2',
  padding: 's2',
};
const themedSmallFlexTokens: FlexTokens = {
  gap: 's1',
  padding: 's1',
};
const themedMediumFlexTokens: FlexTokens = {
  gap: 'm',
  padding: 'm',
};
const themedLargeFlexTokens: FlexTokens = {
  gap: 'l1',
  padding: 'l1',
};
const themedExtraLargeFlexTokens: FlexTokens = {
  gap: 'l2',
  padding: 'l2',
};

export const HorizontalFlexSpacingExample: React.FunctionComponent = () => {
  return (
    <Flex tokens={sectionFlexTokens}>
      <Flex horizontal disableShrink horizontalAlign="space-between">
        <Flex>
          <span>Numerical spacing</span>
          <Flex horizontal styles={stackStyles} tokens={numericalSpacingFlexTokens}>
            <span style={itemStyles}>1</span>
            <span style={itemStyles}>2</span>
            <span style={itemStyles}>3</span>
          </Flex>
        </Flex>
        <Flex>
          <span>Custom spacing</span>
          <Flex horizontal styles={stackStyles} tokens={customSpacingFlexTokens}>
            <span style={itemStyles}>1</span>
            <span style={itemStyles}>2</span>
            <span style={itemStyles}>3</span>
          </Flex>
        </Flex>
      </Flex>

      <Flex horizontal disableShrink horizontalAlign="space-between">
        <Flex>
          <span>Themed spacing (extra small)</span>
          <Flex horizontal styles={stackStyles} tokens={themedExtraSmallFlexTokens}>
            <span style={itemStyles}>1</span>
            <span style={itemStyles}>2</span>
            <span style={itemStyles}>3</span>
          </Flex>
        </Flex>
        <Flex>
          <span>Themed spacing (small)</span>
          <Flex horizontal styles={stackStyles} tokens={themedSmallFlexTokens}>
            <span style={itemStyles}>1</span>
            <span style={itemStyles}>2</span>
            <span style={itemStyles}>3</span>
          </Flex>
        </Flex>
        <Flex>
          <span>Themed spacing (medium)</span>
          <Flex horizontal styles={stackStyles} tokens={themedMediumFlexTokens}>
            <span style={itemStyles}>1</span>
            <span style={itemStyles}>2</span>
            <span style={itemStyles}>3</span>
          </Flex>
        </Flex>
      </Flex>

      <Flex horizontal horizontalAlign="space-between">
        <Flex>
          <span>Themed spacing (large)</span>
          <Flex horizontal styles={stackStyles} tokens={themedLargeFlexTokens}>
            <span style={itemStyles}>1</span>
            <span style={itemStyles}>2</span>
            <span style={itemStyles}>3</span>
          </Flex>
        </Flex>
        <Flex>
          <span>Themed spacing (extra large)</span>
          <Flex horizontal styles={stackStyles} tokens={themedExtraLargeFlexTokens}>
            <span style={itemStyles}>1</span>
            <span style={itemStyles}>2</span>
            <span style={itemStyles}>3</span>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
