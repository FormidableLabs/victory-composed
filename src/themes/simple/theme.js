// *
// * Colors
// *
const colors = [
  "#4DD0E1",
  "#9575CD",
  "#FF6E40",
  "#00E676",
  "#80D8FF",
  "#FFEE58",
  "#FFA000",
  "#4CAF50",
  "#2979FF"
];

const primary = "#333";
// *
// * Typography
// *
const sansSerif = "Futura, 'Trebuchet MS', Arial, sans-serif";
const letterSpacing = "normal";
const fontSize = 14;
// *
// * Layout
// *
const baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: primary,
  stroke: "transparent"
};

const centeredLabelStyles = { textAnchor: "middle", ...baseLabelStyles };
// *
// * Strokes
// *
const strokeLinecap = "round";
const strokeLinejoin = "round";

export default {
  area: {
    style: {
      data: {
        opacity: 0.85,
        fill: primary
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: primary,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: {
        ...centeredLabelStyles,
        padding: 25
      },
      grid: {
        fill: "transparent",
        stroke: "transparent",
        opacity: 0.25,
        strokeLinecap,
        strokeLinejoin
      },
      ticks: {
        fill: "transparent",
        padding: 10,
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    },
    ...baseProps
  },
  bar: {
    style: {
      data: {
        opacity: 0.85,
        fill: primary,
        padding: 10,
        stroke: "transparent",
        strokeWidth: 0,
        width: 8
      },
      labels: baseLabelStyles
    },
    ...baseProps
  },
  candlestick: {
    style: {
      data: {
        opacity: 0.85,
        stroke: primary,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: primary
    },
    ...baseProps
  },
  chart: {
    style: {
      parent: {
        background: "transparent"
      }
    },
    ...baseProps
  },
  errorbar: {
    style: {
      data: {
        opacity: 0.85,
        fill: "transparent",
        stroke: primary,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  },
  group: {
    colorScale: colors,
    ...baseProps
  },
  line: {
    style: {
      data: {
        opacity: 0.85,
        fill: "transparent",
        stroke: primary,
        strokeWidth: 2
      },
      labels: {
        ...baseLabelStyles,
        textAnchor: "start"
      }
    },
    ...baseProps
  },
  pie: {
    style: {
      data: {
        opacity: 0.85,
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: {
        ...baseLabelStyles,
        padding: 20
      }
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: {
    style: {
      data: {
        opacity: 0.85,
        fill: primary,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  },
  stack: {
    colorScale: colors,
    ...baseProps
  },
  tooltip: {
    padding: 10,
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles,
      flyout: {
        stroke: primary,
        strokeWidth: 1,
        fill: "#333333"
      }
    },
    flyoutProps: {
      cornerRadius: 2,
      pointerLength: 0
    }
  },
  voronoi: {
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  }
};
