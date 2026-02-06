import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
// <<<<<<< HEAD
// import styles from "./layout.module.css";
// import type{ IProbs } from "./layoutTypes";
// export function Layout(probs: IProbs) {
// 	const { typeOfHeader, typeOfFooter } = probs;
// 	return (
// 		<div className={styles.page}>
// 			<Header typeOfHeader={typeOfHeader} />
// 			<Main header={typeOfHeader} footer={typeOfFooter}>
// 				<Outlet />
// 			</Main>
// 			<Footer />
// 		</div>
// 	);
// =======
import { IProbs } from "./layoutTypes";
import styles from "./layout.module.css";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";

export function Layout(probs: IProbs) {
  const { typeOfHeader, typeOfFooter } = probs;

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Header
        typeOfHeader={typeOfHeader}
        onLogin={() => setOpen(true)}
      />

      <Main header={typeOfHeader} footer={typeOfFooter}>
        <Outlet />
      </Main>

      <Footer />

      {/* ===== MODAL ===== */}

      <Modal open={open} onClose={() => setOpen(false)} title="Реєстрація">
        <Input label="Імʼя" placeholder="Введіть імʼя" />
        <Input label="Email" placeholder="Введіть email" />
        <Input label="Пароль" type="password" placeholder="Введіть пароль" />
        <Input
          label="Підтвердження пароля"
          type="password"
          placeholder="Повторіть пароль"
        />
      </Modal>
    </div>
  );
// >>>>>>> origin/Pages
}
