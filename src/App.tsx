import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./app/Layout";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import { NotFound } from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout typeOfFooter={0} typeOfHeader={0} />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<Layout typeOfFooter={1} typeOfHeader={1}/>}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

