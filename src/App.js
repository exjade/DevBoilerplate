import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as  PAGES from './routes/pages'
import * as ROUTES from './constants/path'

function App() {
  const FallBackLoader = () => <p>Loading</p>;
  return (
    <BrowserRouter>
      <Suspense fallback={<FallBackLoader />} >
        <Routes>

          <Route path={ROUTES.HOME} element={<PAGES.HOME />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
