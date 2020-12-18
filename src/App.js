import './App.css';
import PageFooter from './components/layout/PageFooter';
import NavBar from './components/layout/NavBar';
import  Routes  from './components/Routes';

function App() {
  return (
    <div className="App">
      <div className="container" >
        <NavBar />
        <Routes />
        <PageFooter />
      </div>
    </div>
  );
}

export default App;
