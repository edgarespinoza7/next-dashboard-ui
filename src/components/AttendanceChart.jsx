"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,

  },
  {
    name: 'Tue',
    present: 70,
    absent: 30,

  },
  {
    name: 'Wed',
    present: 65,
    absent: 35,

  },
  {
    name: 'Thu',
    present: 52,
    absent: 48,

  },
  {
    name: 'Fri',
    present: 90,
    absent: 10,

  },

];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div>
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" width={20} height={20} alt='' />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
          <Bar
            dataKey="present"
            fill="#fae27c"
            legendType="circle"
            radius={[10, 10, 0, 0]} />
          <Bar
            dataKey="absent"
            fill="#c3ebfa"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart