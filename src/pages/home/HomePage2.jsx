import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Components
import Navbar from '../../components/nav/Navbar';
import FooterComponent from '../../components/footer/FooterComponent';
import HomePageMainContainer2 from '../../components/home/HomePageMainContainer2';

const HomePage2 = React.memo(() => {
  usePageTracking();

  return (
    <>
      {/* Fixed Background Layer */}
      <div className="fixed top-0 left-0 w-full h-screen bg-parallax1 bg-cover bg-center bg-no-repeat -z-10" />

      {/* Main Page */}
      <div className="relative z-10 grid min-h-screen font-poppins">
        <div className='grid min-h-screen bg-white'>HELLO</div>
        <HomePageMainContainer2 />
      </div>
    </>
  );
});

export default HomePage2;
