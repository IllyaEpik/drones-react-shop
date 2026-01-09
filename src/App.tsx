import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./app/Layout";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import { NotFound } from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

