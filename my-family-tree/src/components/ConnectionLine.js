import React from 'react';
import { Edge } from 'reactflow'; 

const ConnectionLine = ({ source, target }) => {
  return (
    <Edge // используй просто Edge
      key={`${source}-${target}`} 
      source={source} 
      target={target} 
    />
  );
};

export default ConnectionLine;