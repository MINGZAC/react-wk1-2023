
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'antd/dist/reset.css';
import './App.css'
import Home from './pages/Home'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();
// import { feedImages } from "./api"
// feedImages();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;