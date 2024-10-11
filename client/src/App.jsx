import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Locations from './pages/Locations';
import LocationEvents from './pages/LocationEvents';
import './App.css';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/location/:locationId',  // Dynamic route for locations
      element: <LocationEvents />
    }
  ]);

  return (
    <div className='app'>
      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  );
};

export default App;


