import React from 'react';
import ComponentC from './componentC';

const ComponentB = () => {
  return (
    <div>
      Here is ComponentB !
      <ComponentC/>
    </div>
  );
};

export default ComponentB;