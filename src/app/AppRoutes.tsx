import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../pages/AboutPage";
import { Auth } from "../pages/AuthPage/Auth"
import { Catalog } from "../pages/CatalogPage";
import { Home } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";
import { Product } from "../pages/ProductPage";
import { ResetPassword } from "../pages/ResetPsswordPage/ResetPassword";
import { Layout } from "./Layout";
import { Profile } from "../pages/ProfilePage";
import { Contacts } from "../pages/ContactPage";
import { MyOrders } from "../pages/MyOrders/MyOrders";
import { DeliveryAddresses } from "../pages/DeliveryAddresses";
import { ConfrimResetPassword } from "../pages/ConfirmResetPsswordPage";
import { Checkout } from "../pages/CheckoutPage";


export function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes>
		<Route element={<Layout typeOfFooter={1} typeOfHeader={1}/>}>
			<Route path="/" element={<Home />} />
			<Route path="/auth" element={<Auth />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/reset-password" element={<ResetPassword />} />
			<Route path="/confirm-password-change/:token" element={<ConfrimResetPassword />} />
			{/* Checkout */}
		</Route>
		
		<Route element={<Layout typeOfFooter={1} typeOfHeader={0}/>}>
			<Route path="/about" element={<About />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/my-orders" element={<MyOrders />} />
			<Route path="/delivery-addresses" element={<DeliveryAddresses />} />
			<Route path="/catalog" element={<Catalog />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="/checkout/" element={<Checkout />} />
			
		</Route>

      </Routes> 
	  
    </BrowserRouter> 
	);
};
