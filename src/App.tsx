import { JSX } from 'react';
import Form from './Form.tsx';

const App = (): JSX.Element => {
  return (
    <main className="main-container">
      <h1>To Do List</h1>
      <Form />
    </main>
  );
};

export default App;
