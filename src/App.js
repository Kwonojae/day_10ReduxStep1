import React from 'react';
import { Counter ,Todos }from './components';
import ChangeColorContainer from './containers/ChangeColorContainer';
import ColorContainer from './containers/ColorContainer';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
const App = () => {
  return (
    <div>
      <CounterContainer/>
      <hr style={{margin:'20px 0'}}/>
      <ColorContainer/>
      <hr style={{margin:'20px 0'}}/>
      <ChangeColorContainer/>
      <hr style={{margin:'20px 0'}}/>
      <TodosContainer/>
    </div>
  );
};

export default App;