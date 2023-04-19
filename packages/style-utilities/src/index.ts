export { AnimationClassNames, ColorClassNames, FontClassNames } from './classNames/index';
export { AnimationStyles, AnimationVariables, Coachmark, DefaultEffects, DefaultFontStyles, DefaultPalette, EdgeChromiumHighContrastSelector, FocusStyle, FontSizes, FontWeights, HighContrastSelector, HighContrastSelectorBlack, HighContrastSelectorWhite, IconFontSizes, KeytipLayer, Layer, Nav, PulsingBeaconAnimationStyles, ScreenWidthMaxLarge, ScreenWidthMaxMedium, ScreenWidthMaxSmall, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, ScreenWidthMinLarge, ScreenWidthMinMedium, ScreenWidthMinSmall, ScreenWidthMinUhfMobile, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScrollablePane, ThemeSettingName, createFontStyles, createTheme, focusClear, getEdgeChromiumNoHighContrastAdjustSelector, getFadedOverflowStyle, getFocusOutlineStyle, getFocusStyle, getGlobalClassNames, getHighContrastNoAdjustStyle, getInputFocusStyle, getPlaceholderStyles, getScreenSelector, getTheme, getThemedContext, hiddenContentStyle, loadTheme, noWrap, normalize, registerDefaultFontFaces, registerOnThemeChangeCallback, removeOnThemeChangeCallback } from './styles/index';
export type { GlobalClassNames } from './styles/index';
export { buildClassMap, getIcon, getIconClassName, registerIconAlias, registerIcons, setIconOptions, unregisterIcons } from './utilities/index';
export type { IIconOptions, IIconRecord, IIconSubset, IIconSubsetRecord } from './utilities/index';
export type { IAnimationStyles, IAnimationVariables, IEffects, IFontStyles, IGetFocusStylesOptions, IPalette, IPartialTheme, IScheme, ISchemeNames, ISemanticColors, ISemanticTextColors, ISpacing, ITheme } from './interfaces/index';
export { InjectionMode, Stylesheet, concatStyleSets, concatStyleSetsWithProps, fontFace, keyframes, mergeStyleSets, mergeStyles } from './MergeStyles';
export type { ICSPSettings, IFontFace, IFontWeight, IProcessedStyleSet, IRawStyle, IStyle, IStyleSet, IStyleSheetConfig } from './MergeStyles';
export { FLUENT_CDN_BASE_URL } from './cdn';

import './version';

// Ensure theme is initialized when this package is referenced.
import { initializeThemeInCustomizations } from './styles/theme';
initializeThemeInCustomizations();
