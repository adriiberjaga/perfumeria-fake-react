import { Routes, Route } from "react-router-dom";
import App from "./src/App";
import Home from './src/Pages//jsx/Home'
function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}

export default Router;