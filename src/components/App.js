import { React, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
const Container = lazy(() => import('./Container/Container'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const Characters = lazy(() => import('../pages/Characters'));
const Movies = lazy(() => import('../pages/Movies'));
const Location = lazy(() => import('../pages/Location'));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Movies />} />
          <Route path="/locations" element={<Location />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
