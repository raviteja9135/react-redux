import React, { lazy, Suspense } from 'react';

const Lazydashboard = lazy(() => import('./dashboard'));

const Dashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazydashboard {...props} />
  </Suspense>
);

export default Dashboard;
