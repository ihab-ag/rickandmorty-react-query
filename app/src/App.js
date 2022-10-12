import './App.css';
import { Characters } from './components/characters';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient} >
    <ReactQueryDevtools initialIsOpen />
    <Characters />
    </QueryClientProvider>
    </>
  );
}

export default App;
