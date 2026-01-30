import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/HomePage/Home";
import { About } from "../pages/AboutPage/About";
import { NotFound } from "../pages/NotFound";
import { Catalog } from "../pages/catalogPage/Catalog";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout typeOfFooter={1} typeOfHeader={1} />}>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Route>

				<Route element={<Layout typeOfFooter={1} typeOfHeader={0} />}>
					<Route path="/about" element={<About />} />
					<Route path="/catalog" element={<Catalog />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
