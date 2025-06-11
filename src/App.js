import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Components
import LoadingScreen from './components/utils/LoadingScreen';
// Utils
import { AuthenticateAdmin } from './utils/user/AuthenticateUser';
import LoginAuth from './utils/user/LoginAuth';
// Constants
import {
  HOME_PAGE_URL,
  MAINTENANCE_PAGE_URL,
  POLICIES_PAGE_URL,
} from './utils/Routes';
import { COOKIE_TIMER, CookiePolicyName } from './utils/Constants';
// Pages
// Public
import HomePage from './pages/home/HomePage';
// Terms and conditions
import TermAndPoliciesPage from './pages/policies/TermAndPoliciesPage';
// Maintainance
import MaintenancePage from './pages/maintenance/MaintenancePage';
// Error
import Error404 from './pages/error/Error404';
import HomePage2 from './pages/home/HomePage2';

// Components
const CookieConsentModal = lazy(() =>
  import('./components/modals/CookieConsentModal')
);

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAgreedToCookies, setHasAgreedToCookies] = useState(true);

  useEffect(() => {
    const cookie = localStorage.getItem(CookiePolicyName);

    if (cookie) {
      setHasAgreedToCookies(true);
    } else {
      setHasAgreedToCookies(false);
    }
  }, []);

  useEffect(() => {
    if (hasAgreedToCookies) {
      setIsVisible(false);
    }

    const timer = setTimeout(() => {
      if (!hasAgreedToCookies) {
        setIsVisible(true);
      }
    }, COOKIE_TIMER);

    return () => clearTimeout(timer);
  }, [hasAgreedToCookies]);

  return (
    <>
      {isVisible && (
        <Suspense>
          <CookieConsentModal setHasAgreedToCookies={setHasAgreedToCookies} />
        </Suspense>
      )}

      {/* Suspense component wraps the lazy-loaded components */}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Main page routes */}
          <Route path={HOME_PAGE_URL} index element={<HomePage />} />
          <Route path={`/2`} element={<HomePage2 />} />

          {/* Terms and conditions */}
          <Route path={POLICIES_PAGE_URL} element={<TermAndPoliciesPage />} />

          {/* Other */}
          <Route path={MAINTENANCE_PAGE_URL} element={<MaintenancePage />} />

          {/* Error routes */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
