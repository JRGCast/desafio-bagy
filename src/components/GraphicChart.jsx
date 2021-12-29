import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const GraphicChart = ({ data }) => {
  return (
    <LineChart width={ 600 } height={ 300 } data={ data }>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};


export default GraphicChart;