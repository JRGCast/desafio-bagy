import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 900, amt: 2400 }, { name: 'Page B', uv: 800, pv: 2400, amt: 2400 }, { name: 'Page C', uv: 100, pv: 500, amt: 2400 }];

const RenderLineChart = () => {
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


export default RenderLineChart;