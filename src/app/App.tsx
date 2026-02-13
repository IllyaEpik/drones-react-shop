import { Auth } from "../pages/AuthPage/Auth"
import { Home } from "../pages/HomePage";
import { Layout } from "./Layout";
import { About } from "../pages/AboutPage";
import { NotFound } from "../pages/NotFound";
import { Catalog } from "../pages/catalogPage/Catalog";
import { Product } from "../pages/productPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Layout typeOfFooter={1} typeOfHeader={1}/>}>
          	<Route path="/" element={<Home />} />
          	<Route path="/auth" element={<Auth />} />
			{/* <Route path="/product/:id" element={<Product />} /> */}
          	<Route path="/product/:id" element={<Product />} />
			<Route path="*" element={<NotFound />} />
        </Route>
        
        <Route element={<Layout typeOfFooter={1} typeOfHeader={0}/>}>
          	<Route path="/about" element={<About />} />
			<Route path="/catalog" element={<Catalog />} />
        
        </Route>
        <Route element={<Layout typeOfFooter={0} typeOfHeader={0}/>}>
        </Route>
      </Routes> 
	  
    </BrowserRouter> 
	);
};

export default App;
