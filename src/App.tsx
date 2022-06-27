import logo from './logo.svg';
import './App.css';
import { atom, useAtom } from 'jotai';

const inlineCountAtom = atom(0);
function useInlineCount() {
  return useAtom(inlineCountAtom);
}

function App() {
  const [inlineCount, setInlineCount] = useInlineCount();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => setInlineCount((count) => count + 1)}
          >
            inline count is: {inlineCount}
          </button>
        </p>
        <p>Edit this text and see if it resets the counter: 6</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
