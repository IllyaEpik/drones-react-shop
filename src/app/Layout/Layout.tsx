import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";

import type{ IProbs } from "./LayoutTypes";
import styles from "./Layout.module.css";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { Input } from "../../components/Input";
import { HeaderContextWrapper } from "../../context";
import { UserContextWrapper } from "../../context/useUserContext";

export function Layout(probs: IProbs) {
  const { typeOfHeader, typeOfFooter } = probs;

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.page}>
		<UserContextWrapper>
			<HeaderContextWrapper>
				<Header
					typeOfHeader={typeOfHeader}
					onLogin={() => setOpen(true)}
				/>

				<Main header={typeOfHeader} footer={typeOfFooter}>
					<Outlet />
				</Main>

				<Footer />

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
			</HeaderContextWrapper>
		</UserContextWrapper>
    </div>

  );
}
