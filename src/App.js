import './App.css';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import  Routes  from './components/Routes';

function App() {
  return (
    <div className="App" >
      <div className="container" >
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
