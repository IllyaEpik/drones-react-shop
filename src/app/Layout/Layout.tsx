import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "../Main";
import { IProbs } from "./layoutTypes";

export function Layout(probs:IProbs) {
  // const bottomChildren = probs.bottomChildren
  const {typeOfHeader, typeOfFooter} = probs
  return (
    <>
      <Header typeOfHeader={typeOfHeader}/>
      <Main header={typeOfHeader} footer={typeOfFooter}>
         <Outlet></Outlet>
      </Main>
      <Footer/>
    </>
  );
};