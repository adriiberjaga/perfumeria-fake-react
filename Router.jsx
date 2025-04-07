import { Routes, Route } from "react-router-dom";
import App from "./src/App";
import Home from './src/Pages//jsx/Home'
import PerfumesDetail from './src/Pages/jsx/PerfumesDetail'
import Perfumes from "./src/Components/jsx/Perfumes";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/perfumes" element={<Perfumes/>} />
        <Route path="/perfume/:perfumeId" element={<PerfumesDetail/>} />
      </Route>
    </Routes>
  );
}

export default Router;