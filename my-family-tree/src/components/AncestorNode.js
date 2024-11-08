import React from 'react';
import { Node } from 'reactflow'; 

const AncestorNode = ({ ancestor, onEdit, onDelete }) => { 
  return (
    <Node // используй просто Node
      key={ancestor.id}
      id={ancestor.id}
      position={{ x: 0, y: 0 }} 
      type="ancestor" 
      data={ancestor} 
    >
      <div className="node-container">
        <img src={ancestor.photo} alt={ancestor.name} />
        <h2>{ancestor.name} {ancestor.surname}</h2>
        <p>{ancestor.lifeDates}</p>
        <button onClick={() => onEdit(ancestor)}>Редактировать</button>
        <button onClick={() => onDelete(ancestor.id)}>Удалить</button>
      </div>
    </Node>
  );
};

export default AncestorNode;