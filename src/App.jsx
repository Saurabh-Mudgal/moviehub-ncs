import { Header, Body } from './components';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState("First 30 since 2010");

  return (
    <div className="App">
      <Header className="App-header" setFilter={setFilter}/>
      <Body className="App-body" filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;
