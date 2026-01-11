import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "../Main";
import { IProbs } from "./layoutTypes";

export function Layout() {
  // const bottomChildren = probs.bottomChildren
  return (
    <>
      <Header typeOfHeader={1}/>
      <Main header={0} footer={1}>
         <Outlet></Outlet>
      </Main>
      <Footer/>
    </>
  );
};