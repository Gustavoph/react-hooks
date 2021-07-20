import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Home } from '../Home';

export default function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <Home />
      </PostsProvider>
    </CounterProvider>
  );
}
