import React from 'react';
import { DataContext } from './context';

const ComponentC = () => {
  return (
    <DataContext.Consumer>
      {(name) => {
        return(
          <div>
            Here is ComponentC ! Name: {name}
          </div>
        );
      }}
    </DataContext.Consumer>
  );
};

export default ComponentC;