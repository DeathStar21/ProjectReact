import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
const data=require('./data.json')

const DemoLine = () => {
  
  var config = {
    data: data,
    padding: 'auto',
    xField: 'Name',
    yField: 'Score',
    xAxis: { tickCount: 5 },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };
  return <Line {...config} />;
};

export default DemoLine;