import React, { useState } from 'react';
import SensorGraph from './SensorGraph';
import { Grid, Box, Button, ButtonGroup } from '@mui/material';
import Sidebar from './Sidebar';

const sampleData = {
  '1H': {
    internet: [
      { time: "22:14", speed: 45 }, { time: "22:34", speed: 50 }, { time: "22:54", speed: 55 },
    ],
    motion: [
      { time: "22:14", motion: 100 }, { time: "22:34", motion: 102 }, { time: "22:54", motion: 104 },
    ],
    latency: [
      { time: "22:14", latency: 150 }, { time: "22:34", latency: 155 }, { time: "22:54", latency: 160 },
    ],
  },
  '1D': {
    internet: [
      { time: "10:00", speed: 42 }, { time: "14:00", speed: 47 }, { time: "18:00", speed: 55 }, { time: "22:00", speed: 50 },
    ],
    motion: [
      { time: "10:00", motion: 100 }, { time: "14:00", motion: 110 }, { time: "18:00", motion: 105 }, { time: "22:00", motion: 120 },
    ],
    latency: [
      { time: "10:00", latency: 145 }, { time: "14:00", latency: 150 }, { time: "18:00", latency: 155 }, { time: "22:00", latency: 160 },
    ],
  },
  '1W': {
    internet: [
      { time: "Mon", speed: 48 }, { time: "Tue", speed: 50 }, { time: "Wed", speed: 55 },
      { time: "Thu", speed: 60 }, { time: "Fri", speed: 62 }, { time: "Sat", speed: 58 },
      { time: "Sun", speed: 64 },
    ],
    motion: [
      { time: "Mon", motion: 100 }, { time: "Tue", motion: 105 }, { time: "Wed", motion: 110 },
      { time: "Thu", motion: 108 }, { time: "Fri", motion: 115 }, { time: "Sat", motion: 112 },
      { time: "Sun", motion: 118 },
    ],
    latency: [
      { time: "Mon", latency: 140 }, { time: "Tue", latency: 145 }, { time: "Wed", latency: 150 },
      { time: "Thu", latency: 155 }, { time: "Fri", latency: 160 }, { time: "Sat", latency: 165 },
      { time: "Sun", latency: 170 },
    ],
  },
  '1M': {
    internet: [
      { time: "Week 1", speed: 48 }, { time: "Week 2", speed: 50 }, { time: "Week 3", speed: 55 }, { time: "Week 4", speed: 60 },
    ],
    motion: [
      { time: "Week 1", motion: 102 }, { time: "Week 2", motion: 105 }, { time: "Week 3", motion: 110 }, { time: "Week 4", motion: 108 },
    ],
    latency: [
      { time: "Week 1", latency: 150 }, { time: "Week 2", latency: 155 }, { time: "Week 3", latency: 160 }, { time: "Week 4", latency: 165 },
    ],
  },
};

function Dashboard() {
  // Separate useState hooks for each graph's data
  const [internetData, setInternetData] = useState(sampleData['1H'].internet);
  const [motionData, setMotionData] = useState(sampleData['1H'].motion);
  const [latencyData, setLatencyData] = useState(sampleData['1H'].latency);

  const [timeRange, setTimeRange] = useState('1H');

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
    setInternetData(sampleData[range].internet);
    setMotionData(sampleData[range].motion);
    setLatencyData(sampleData[range].latency);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: '#282A36', minHeight: '100vh' }}>
        <ButtonGroup sx={{ mb: 2 }}>
          <Button onClick={() => handleTimeRangeChange('1H')}>1H</Button>
          <Button onClick={() => handleTimeRangeChange('1D')}>1D</Button>
          <Button onClick={() => handleTimeRangeChange('1W')}>1W</Button>
          <Button onClick={() => handleTimeRangeChange('1M')}>1M</Button>
        </ButtonGroup>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SensorGraph title="Internet Sensor Graph" dataKey="speed" data={internetData} />
          </Grid>
          <Grid item xs={12}>
            <SensorGraph title="Motion Sensor Graph" dataKey="motion" data={motionData} />
          </Grid>
          <Grid item xs={12}>
            <SensorGraph title="Latency Sensor Graph" dataKey="latency" data={latencyData} />
          </Grid>
          <Grid item xs={12}>
            <SensorGraph title="Battery Sensor Graph" dataKey="speed" data={internetData} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
