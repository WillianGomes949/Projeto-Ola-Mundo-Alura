import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio';
import SobreMim from './paginas/sobreMim';
import Menu from './componentes/menu';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'paginas/Post';
import NaoEncontrada from 'paginas/NaoEncontrada';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobreMim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
