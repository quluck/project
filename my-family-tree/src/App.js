import React, { useState } from 'react';
import { ReactFlowProvider } from 'reactflow';
import { Background, Controls, Edge, Node } from 'reactflow';
import AncestorNode from './components/AncestorNode';
import ConnectionLine from './components/ConnectionLine';
import './App.css';

function App() {
  const [ancestors, setAncestors] = useState([
    // Начальные данные о предках
     { id: '1', name: 'Иван', surname: 'Иванов', lifeDates: '1950-2020', photo: 'path/to/photo.jpg' },
     { id: '2', name: 'Мария', surname: 'Иванова', lifeDates: '1955-2022', photo: 'path/to/photo.jpg' } 
  ]);

  // 1. Функция для добавления нового предка
  const handleAddAncestor = (newAncestor) => {
    setAncestors([...ancestors, newAncestor]);
  };

  // 2. Функция для редактирования данных о предке
  const handleEditAncestor = (editedAncestor) => {
    setAncestors(
      ancestors.map((ancestor) => {
        if (ancestor.id === editedAncestor.id) {
          return editedAncestor;
        } else {
          return ancestor;
        }
      })
    );
  };

  // 3. Функция для удаления предка
  const handleDeleteAncestor = (ancestorId) => {
    setAncestors(ancestors.filter((ancestor) => ancestor.id !== ancestorId));
  };

  return (
    <div className="App">
      <h1>Генеалогическое древо</h1>
      <ReactFlowProvider>
        <div style={{ height: '80vh' }}>
          <Background />
          {ancestors.map((ancestor) => (
            <AncestorNode
              key={ancestor.id}
              ancestor={ancestor}
              onEdit={handleEditAncestor}
              onDelete={handleDeleteAncestor}
            />
          ))}
          <Controls />
          {ancestors.map((ancestor, index) => {
            if (index > 0) {
              return (
                <ConnectionLine
                  key={ancestor.id}
                  source={ancestors[index - 1].id}
                  target={ancestor.id}
                />
              );
            }
            return null;
          })}
        </div>
      </ReactFlowProvider>
      <button onClick={() => handleAddAncestor({ id: 'new-ancestor' })}>
        Добавить предка
      </button>
    </div>
  );
}

export default App;