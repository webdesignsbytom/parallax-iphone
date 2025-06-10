import React, { useEffect, useState } from 'react';

function HomePageMainContainer() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main role="main" className="grid w-full h-full py-8 overflow-hidden">
      {/* Parallax 1 */}
      <section className="relative grid min-h-screen">
        <div
          className="absolute min-h-screen w-full h-full bg-parallax1 bg-cover bg-center"
          style={{
            transform: `translateY(${offsetY * 0.5}px)`,
          }}
        />
        <div className="grid items-center justify-center text-2xl font-bold text-colour1 h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, hic?
        </div>
      </section>

      {/* Parallax 2 */}
      <section className="relative grid min-h-screen">
        <div
          className="min-h-screen w-full h-full bg-parallax2 bg-cover"
        />
        <div className="grid items-center justify-center text-2xl font-bold text-colour1 h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, hic?
        </div>
      </section>
    </main>
  );
}

export default HomePageMainContainer;
