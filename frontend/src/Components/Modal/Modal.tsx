import { FC } from 'react'
import s from "./Modal.module.scss"

interface ModalProps {
	modal: boolean;
	setModal: () => void;
	children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ modal, setModal, children }) => {


	return <div className={modal ? `${s.modal} ${s.active}` : `${s.modal}`} onClick={setModal}>
		<div className={modal ? `${s.modalContent} ${s.active}` : `${s.modalContent}`} onClick={e => e.stopPropagation()}>
			<form>
				{children}
			</form>
		</div>
	</div>
}

export default Modal