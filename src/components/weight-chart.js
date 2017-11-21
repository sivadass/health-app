import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryTheme, VictoryDomain, VictoryAxis, VictoryStack, VictoryArea } from 'victory';
import _ from 'lodash';

const sampleData=[
  { x: 1, y: 15},
  { x: 2, y: 12},
  { x: 3, y: 10},
  { x: 4, y: 11},
  { x: 5, y: 8},
  { x: 6, y: 5}
];

class WeightChart extends React.Component {
  render() {
    return (
      <VictoryArea
        style={{ data: { fill: "#b8e5f4" } }}
        data={sampleData}
        padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
        height={"360"}
        animate={{
          duration: 2000,
          onLoad: { duration: 3000 }
        }}
      />
    )
  }
}

export default WeightChart;
