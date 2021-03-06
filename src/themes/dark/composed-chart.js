import React, { PropTypes } from "react";

import { VictoryChart } from "../../victory/victory-chart";

export default class ComposedWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return <VictoryChart {...this.props}>{this.props.children}</VictoryChart>;
  }
}
