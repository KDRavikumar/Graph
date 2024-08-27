import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';

function SensorGraph({ title, dataKey, data }) {
  return (
    <Paper sx={{ p: 2, backgroundColor: '#44475a' }}>
      <Typography variant="h6" sx={{ color: '#f8f8f2', mb: 2 }}>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#555" />
          <XAxis dataKey="time" stroke="#f8f8f2" />
          <YAxis stroke="#f8f8f2" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#ff79c6" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default SensorGraph;