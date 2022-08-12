import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Categories from './pages/Categories';
import Home from './pages/Home';
import './reset.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
