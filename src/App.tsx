import { Header } from './components/Header'
import { Main } from './components/Main';
import './index.css';

const App = () => {
  return (
    <div  className='app'>
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
