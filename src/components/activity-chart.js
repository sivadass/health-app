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

class ActivityChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 4000);
  }

  getData() {
    return _.range(2).map(() => {
      return [
        { x: 1, y: _.random(1, 5) },
        { x: 2, y: _.random(1, 10) },
        { x: 3, y: _.random(2, 10) },
        { x: 4, y: _.random(2, 10) },
        { x: 5, y: _.random(2, 15) }
      ];
    });
  }

  render() {
    return (
      // <VictoryArea
      //   style={{ data: { fill: "#b8e5f4" } }}
      //   interpolation="natural"
      //   data={sampleData}
      //   padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
      //   height={"160"}
      //   animate={{
      //     duration: 2000,
      //     onLoad: { duration: 3000 }
      //   }}
      // />
      <VictoryChart
      theme={VictoryTheme.material}
      animate={{ duration: 1000 }}
      padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
      height={"120"}
    >
      <VictoryAxis tickFormat={() => ''} false/>
      <VictoryStack
        colorScale={'blue'}
      >
        {this.state.data.map((data, i) => {
          return (
            <VictoryArea
              padding={{ top: 0, bottom: 0, left: 0, right: 0 }}
              key={i}
              data={data}
              interpolation={"basis"}
            />
          );
        })}
      </VictoryStack>
    </VictoryChart>
    )
  }
}

export default ActivityChart;
