import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal ({children, btnCaption}, ref) {
	const cssDialog = "p-6 rounded-md";
	const cssBtn = "mx-auto px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950";
	
	const dialog = useRef()
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			}
		}
	})

	return createPortal(
		<dialog ref={dialog} className={cssDialog}>
			{children}
			<form method="dialog" className="flex jsuity-center items-center">
				<button className={cssBtn}>{btnCaption}</button>
			</form>
		</dialog>
	, document.getElementById('rootModal'));
});

export default Modal;