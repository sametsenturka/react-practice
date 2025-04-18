import React from 'react';
import { DataContext } from './context';
import ComponentA from './componentA';

const App = () => {
  const name = 'samet';
  
  return (
    <div>
      Here is App.jsx !
      <DataContext.Provider value={name}>
        <ComponentA/>
      </DataContext.Provider>
    </div>
  );
};

export default App;