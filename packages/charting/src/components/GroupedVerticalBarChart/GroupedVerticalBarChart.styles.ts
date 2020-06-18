import { IGroupedVerticalBarChartStyleProps, IGroupedVerticalBarChartStyles } from './GroupedVerticalBarChart.types';
import { HighContrastSelectorBlack, FontWeights } from 'office-ui-fabric-react/lib/Styling';

export const getStyles = (props: IGroupedVerticalBarChartStyleProps): IGroupedVerticalBarChartStyles => {
  const { theme, className, showXAxisPath, showYAxisPath, href } = props;
  return {
    root: [
      theme.fonts.medium,
      {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      },
      className,
    ],

    xAxis: {
      selectors: {
        text: [
          theme!.fonts.tiny,
          {
            fontWeight: FontWeights.semibold,
            fill: theme.semanticColors.bodyText,
            selectors: {
              [HighContrastSelectorBlack]: {
                fill: 'rgb(179, 179, 179)',
              },
            },
          },
        ],
        line: {
          opacity: 0.2,
          width: '1px',
          stroke: theme.semanticColors.bodyText,
          selectors: {
            [HighContrastSelectorBlack]: {
              stroke: 'rgb(179, 179, 179)',
            },
          },
        },
        path: {
          display: showXAxisPath ? 'block' : 'none',
        },
      },
    },

    yAxis: {
      selectors: {
        text: [
          theme.fonts.tiny,
          {
            fontWeight: FontWeights.semibold,
            fill: theme.semanticColors.bodyText,
            selectors: {
              [HighContrastSelectorBlack]: {
                fill: 'rgb(179, 179, 179)',
              },
            },
          },
        ],
        line: {
          opacity: 0.2,
          width: '1px',
          stroke: theme.semanticColors.bodyText,
          selectors: {
            [HighContrastSelectorBlack]: {
              stroke: 'rgb(179, 179, 179)',
            },
          },
        },
        path: {
          display: showYAxisPath ? 'block' : 'none',
        },
      },
    },

    legendContainer: {
      marginTop: '8px',
      marginLeft: '35px',
    },
    opacityChangeOnHover: {
      cursor: href ? 'pointer' : 'default',
    },
  };
};
