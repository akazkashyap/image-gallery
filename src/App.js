import { Provider as ImageProvider } from './Context/ImageContext';
import './App.css';
import HomePage from './components/HomePage';


function App() {
  return (
    <ImageProvider>
      <div className="App">
        <HomePage />
      </div>
    </ImageProvider>
  );
}

export default App;
