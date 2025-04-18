import React from 'react';
import ComponentB from './componentB';

const ComponentA = () => {
  return (
    <div>
      Here is ComponentA !
      <ComponentB/>
    </div>
  );
};

export default ComponentA;