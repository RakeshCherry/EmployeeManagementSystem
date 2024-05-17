import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import './Graphs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Graphs() {
  const [viewType, setViewType] = useState('Daily'); // Default view type

  const areaChartData = [
    { name: '2022-01-01', daily: 400, weekly: 240, monthly: 360 },
    { name: '2022-01-02', daily: 300, weekly: 139, monthly: 250 },
    { name: '2022-01-03', daily: 200, weekly: 280, monthly: 190 },
    { name: '2022-01-04', daily: 350, weekly: 200, monthly: 320 },
    { name: '2022-01-05', daily: 450, weekly: 180, monthly: 400 },
    { name: '2022-01-06', daily: 320, weekly: 300, monthly: 280 },
    { name: '2022-01-07', daily: 280, weekly: 260, monthly: 220 },
    { name: '2022-01-08', daily: 370, weekly: 180, monthly: 350 },
    { name: '2022-01-09', daily: 420, weekly: 250, monthly: 370 },
    { name: '2022-01-10', daily: 310, weekly: 210, monthly: 290 },
    { name: '2022-01-11', daily: 380, weekly: 240, monthly: 310 },
    { name: '2022-01-12', daily: 400, weekly: 270, monthly: 330 },
    { name: '2022-01-13', daily: 370, weekly: 220, monthly: 360 },
    { name: '2022-01-14', daily: 430, weekly: 250, monthly: 390 },
    { name: '2022-01-15', daily: 450, weekly: 280, monthly: 400 },
  ];

  const barChartData = [
    { department: 'Sales', attendance: 40 },
    { department: 'IT', attendance: 60 },
    { department: 'Market', attendance: 86 },
    { department: 'Legal', attendance: 88 },
    { department: 'API', attendance: 30 },
  ];

  const handleViewTypeChange = (type) => {
    setViewType(type);
  };

  const CustomBar = (props) => {
    const { fill, x, y, width, height } = props;
    const borderRadius = 10; // Adjust as needed

    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={fill} rx={borderRadius} ry={borderRadius} />
      </g>
    );
  };

  return (
    <div className='Usergraph-container'>
      <div className='areagraph'>
        <div className='graph-header'>
          <p>Attendance Comparison Chart</p>
          <div className='graphLabels'>
            <label>
              <input type="radio" name="viewType" value="Daily" checked={viewType === 'Daily'} onChange={() => handleViewTypeChange('Daily')} /> Daily
            </label>
            <label>
              <input type="radio" name="viewType" value="Weekly" checked={viewType === 'Weekly'} onChange={() => handleViewTypeChange('Weekly')} /> Weekly
            </label>
            <label>
              <input type="radio" name="viewType" value="Monthly" checked={viewType === 'Monthly'} onChange={() => handleViewTypeChange('Monthly')} /> Monthly
            </label>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {viewType === 'Daily' && <Area type="monotone" dataKey="daily" stackId="1" stroke="#8884d8" fill="#8884d8" />}
            {viewType === 'Weekly' && <Area type="monotone" dataKey="weekly" stackId="1" stroke="#82ca9d" fill="#82ca9d" />}
            {viewType === 'Monthly' && <Area type="monotone" dataKey="monthly" stackId="1" stroke="#ffc658" fill="#ffc658" />}
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bargraph">
        <p>Weekly Attendance</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="attendance" fill="#3354F4" shape={<CustomBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graphs;
