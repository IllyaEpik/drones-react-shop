import styles from "./Modal.module.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  removeOverlay?: boolean
  className?: string
}

export function Modal({ open, onClose, title, children,removeOverlay,className }: ModalProps) {
  	if (!open) return null;
	return (
		<div className={`${removeOverlay && styles.darkOverlay} ${styles.overlay} ${className}`} onClick={onClose}>
			<div
				className={styles.modal}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={styles.header}>
					<h3 className={styles.title}>{title}</h3>
					<button onClick={onClose} type="button">✕</button>
				</div>

				{children}
			</div>
		</div>
	);
}
