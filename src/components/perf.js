import React from 'react';
import {Box} from 'theme-ui';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {name: '#1', "webpack (4.35.0)": 8.36, "Packem (pre-alpha)": 5.12, "Parcel (1.12.3)": 12.39},
  {name: '#2', "webpack (4.35.0)": 9.77, "Packem (pre-alpha)": 4.23, "Parcel (1.12.3)": 11.01},
  {name: '#3', "webpack (4.35.0)": 8.91, "Packem (pre-alpha)": 4.55, "Parcel (1.12.3)": 11.80},
  {name: '#4', "webpack (4.35.0)": 9.03, "Packem (pre-alpha)": 4.49, "Parcel (1.12.3)": 12.22},
  {name: '#5', "webpack (4.35.0)": 9.00, "Packem (pre-alpha)": 4.90, "Parcel (1.12.3)": 12.40},
];

export default props => (
  <Box>
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
      {...props}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Packem (pre-alpha)" fill="#f7bd35" />
      <Bar dataKey="webpack (4.35.0)" fill="#64c5ff" />
      <Bar dataKey="Parcel (1.12.3)" fill="#bc7529" />
    </BarChart>
  </Box>
);
