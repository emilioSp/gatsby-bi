import React from 'react';
import Chart from '../components/Chart.js';
import { Layout } from '../components/Layout.js';

const Dashboard = () => (
  <Layout>
    <div className="container">
      <h1>Esempio di chart</h1>
      <Chart />
    </div>
  </Layout>
);

export default Dashboard;
