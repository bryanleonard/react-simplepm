import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal ({children, btnCaption}, ref) {
	const cssDialog = "backdrop:bg-stone-900/70 p-6 rounded-md";
	const cssBtn = "mx-auto mt-2 px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950";
	
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
			<form method="dialog" className="text-right">
				{/* flex justify-center items-center"> */}
				{/* <button className={cssBtn}>{btnCaption}</button> */}
				<Button className={cssBtn}>{btnCaption}</Button>
			</form>
		</dialog>
	, document.getElementById('rootModal'));
});

export default Modal;