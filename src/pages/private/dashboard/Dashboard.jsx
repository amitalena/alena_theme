// src/pages/private/Dashboard.jsx
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Sun', visitors: 4000 },
  { name: 'Mon', visitors: 3000 },
  { name: 'Tue', visitors: 2000 },
  { name: 'Wed', visitors: 2780 },
  { name: 'Thu', visitors: 1890 },
  { name: 'Fri', visitors: 2390 },
  { name: 'Sat', visitors: 3490 },
];

const tableData = [
  { id: 1, name: 'Upgrade year plan', number: '10693(37%)', time: '62.8%' },
  { id: 2, name: 'Basic plan', number: '2545(47%)', time: '47.54%' },
  { id: 3, name: 'Custom plan', number: '1836(39%)', time: '41.12%' },
  { id: 4, name: 'Free plan', number: '1958(31%)', time: '36.82%' },
  { id: 5, name: 'Premium plan', number: '10863(32%)', time: '52.8%' },
];

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Bounce Rate Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Bounce Rate</Typography>
              <Typography variant="h4">36.45%</Typography>
              <Typography variant="subtitle2" color="text.secondary">
                9% Up Bounce Rate Weekly
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* New Visitors Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">New Visitors</Typography>
              <Typography variant="h4">1,282</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Weekly Visitors Chart */}
        <Grid item xs={12} md={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weekly Visitors
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="visitors" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Plan Performance Table */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Plan Performance
              </Typography>
              <Box sx={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Plan</th>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Number</th>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.id}>
                        <td style={{ padding: '8px' }}>{row.name}</td>
                        <td style={{ padding: '8px' }}>{row.number}</td>
                        <td style={{ padding: '8px' }}>{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;