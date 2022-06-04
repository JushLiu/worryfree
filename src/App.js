import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <div className='bg'>
    <Link className='a-write' to="/write">寫信</Link>
    <Link className='a-reply' to="/reply">回信</Link>
    </div>
    </>
  );
}

export default App;
