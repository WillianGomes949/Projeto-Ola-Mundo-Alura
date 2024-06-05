import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio';
import SobreMim from './paginas/sobreMim';
import Menu from './componentes/menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobreMim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
