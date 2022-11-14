// import Author from 'components/Author/Author';
import { React, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CharacterDetails from './CharacterDetails/CharacterDetails';
import EpisodeDetails from './EpisodeDetails/EpisodeDetails';
import Filter from './Filter/Filter';
import LocationDetails from './LocationDetails/LocationDetails';

const Container = lazy(() => import('./Container/Container'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const Characters = lazy(() => import('../pages/Characters'));
const Episodes = lazy(() => import('../pages/Episodes'));
const Location = lazy(() => import('../pages/Location'));
const Home = lazy(() => import('../pages/Home/Home'));
const Author = lazy(() => import('../components/Author/Author'));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route
            path="/characters/:characterId"
            element={<CharacterDetails />}
          />
          <Route path="/characters/:characterId/:name" element={<Filter />} />
          <Route path="/episodes/" element={<Episodes />} />
          <Route path="/episodes/:episodeId" element={<EpisodeDetails />} />
          <Route path="/locations/" element={<Location />} />
          <Route path="/locations/:locationId" element={<LocationDetails />} />
          <Route path="/author" element={<Author />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
