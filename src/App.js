import './App.css';
import ComponentCard from './components/ComponentCard';
import background from './images/pattern-background-desktop.svg'

function App() {
  return (
    <>
    <img className='bg' src={background} alt=""/>
    <ComponentCard />
    </>
  );
}

export default App;
