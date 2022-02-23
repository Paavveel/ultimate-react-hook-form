import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Result from './pages/Result';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Step1 />} />
        <Route path='step2' element={<Step2 />} />
        <Route path='step3' element={<Step3 />} />
        <Route path='result' element={<Result />} />
      </Route>
    </Routes>
  );
}

export default App;
