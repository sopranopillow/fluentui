import * as React from 'react';
import { Flex } from '../Flex';
import { DefaultPalette } from 'office-ui-fabric-react';
import { FlexTokens } from '../Flex.types';

// Styles definition
const flexStyles: React.CSSProperties = {
  background: DefaultPalette.themeTertiary,
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
const flexTokens: FlexTokens = { gap: '5px' };

export const HorizontalFlexHorizontalAlignExample: React.FunctionComponent = () => {
  return (
    <Flex tokens={flexTokens}>
      <span>Left-aligned</span>
      <Flex horizontal horizontalAlign="start" style={flexStyles}>
        <span style={itemStyles}>1</span>
        <span style={itemStyles}>2</span>
        <span style={itemStyles}>3</span>
      </Flex>

      <span>Horizontally centered</span>
      <Flex horizontal horizontalAlign="center" style={flexStyles}>
        <span style={itemStyles}>1</span>
        <span style={itemStyles}>2</span>
        <span style={itemStyles}>3</span>
      </Flex>

      <span>Right-aligned</span>
      <Flex horizontal horizontalAlign="end" style={flexStyles}>
        <span style={itemStyles}>1</span>
        <span style={itemStyles}>2</span>
        <span style={itemStyles}>3</span>
      </Flex>

      <span>Horizontal space around items</span>
      <Flex horizontal horizontalAlign="space-around" style={flexStyles}>
        <span style={itemStyles}>1</span>
        <span style={itemStyles}>2</span>
        <span style={itemStyles}>3</span>
      </Flex>

      <span>Horizontal space between items</span>
      <Flex horizontal horizontalAlign="space-between" style={flexStyles}>
        <span style={itemStyles}>1</span>
        <span style={itemStyles}>2</span>
        <span style={itemStyles}>3</span>
      </Flex>

      <span>Items horizontally evenly spaced</span>
      <Flex horizontal horizontalAlign="space-evenly" style={flexStyles}>
        <span style={itemStyles}>1</span>
        <span style={itemStyles}>2</span>
        <span style={itemStyles}>3</span>
      </Flex>
    </Flex>
  );
};
