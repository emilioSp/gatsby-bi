import React, { useEffect, useState } from 'react';
import { LineChart, YAxis, XAxis, CartesianGrid, Line } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const getData = () =>
  new Promise((res) => {
    setTimeout(() => res(data), 2000);
  });

export const Chart = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);

  if (data === null) {
    return 'Loading...';
  }

  return (
    <div style={{ width: 'max-content' }}>
      <LineChart width={1000} height={600} data={data} cursor={'pointer'}>
        <XAxis dataKey={'name'} />
        <YAxis />
        <CartesianGrid stroke={'#eee'} strokeDasharray={'5 5'} />
        <Line
          type={'monotone'}
          dataKey={'uv'}
          stroke={'#8884d8'}
          activeDot={{ onClick: console.log, r: 8, cursor: 'pointer' }}
          animationDuration={750}
        />
        <Line
          type={'monotone'}
          dataKey={'pv'}
          stroke={'#82ca9d'}
          activeDot={{ onClick: console.log, r: 8, cursor: 'pointer' }}
          animationDuration={750}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
