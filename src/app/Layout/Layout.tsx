import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "../Main";
import { IProbs } from "./layoutTypes";

export function Layout() {
  // const bottomChildren = probs.bottomChildren
  return (
    <>
      <Header />
      <Main>
         <Outlet></Outlet>
      </Main>
      <Footer/>
    </>
  );
};