import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "../Main";
import { IProbs } from "./layoutTypes";
import styles  from "./layout.module.css";
export function Layout(probs:IProbs) {
  // const bottomChildren = probs.bottomChildren
  const {typeOfHeader, typeOfFooter} = probs
  return (
    <div className={styles.page}>
      <Header typeOfHeader={typeOfHeader}/>
      <Main header={typeOfHeader} footer={typeOfFooter}>
         <Outlet></Outlet>
      </Main>
      <Footer/>
    </div>
  );
};