import './App.css';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (
    <div className="w-75 mx-auto">
      <h1 className='text-center'>React form</h1>
      <Form />
      <div className='mt-4'>
        <Table headers={[ 'Nombre', 'Apellidos', 'Email' ]} />
      </div>
    </div>
  );
}

export default App;
