import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({onAdd}) {

	const title = useRef();
	const desc = useRef();
	const dueDate = useRef();
	const modal = useRef();

	function handleCancel() {
		title.current.value = '';
		desc.current.value = '';
		dueDate.current.value = '';
	}

	function handleSave() {
		const enteredTitle = title.current.value.trim();
		const enteredDesc = desc.current.value.trim();
		const enteredDueDate = dueDate.current.value.trim();

		//validation
		if (
			enteredTitle === "" ||
			enteredDesc === "" || 
			enteredDueDate === ""
		) {
			modal.current.open();
			return;
		}

		//doSave
		onAdd({
			title: enteredTitle,
			desc: enteredDesc,
			dueDate: enteredDueDate
		})
	}
	
	return (
		<>
		<Modal ref={modal} btnCaption="OK">
			<h2>Invalid input</h2>
			<p>Oops, youforgot to enter a value!</p>
			<p>Provide valid values for all inputs.</p>
		</Modal>
		<section className="w-[35rem] mt-[3.75rem]">
			<menu className="flex items-centered justify-end gap-4 my-4">
				<ul className="list-none flex gap-4 my-0">
					<li className="inline">
						<button onClick={handleCancel} className="px-6 py-2 rounded-md text-stone-500 hover:text-stone-950 hover:bg-stone-100">Cancel</button>
					</li>
					<li className="inline">
						<button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950">Save</button>
					</li>
				</ul>
			</menu>

			<div>
				<Input ref={title} type="text" label='Title' />
				<Input ref={desc} label='Description' isTextarea />
				<Input ref={dueDate} type="date" label='Due Date' />
			</div>

		</section>
		</>
	)
}