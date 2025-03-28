import Input from './Input';

export default function NewProject() {
	
	return (
		<section className="w-[35rem] mt-[3.75rem]">
			<menu className="flex items-centered justify-end gap-4 my-4">
				<ul className="list-none flex gap-4 my-0">
					<li className="inline">
						<button className="px-6 py-2 rounded-md text-stone-500 hover:text-stone-950 hover:bg-stone-100">Cancel</button>
					</li>
					<li className="inline">
						<button className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950 ">Save</button>
					</li>
				</ul>
			</menu>

			<div>
				<Input label='Title' />

				<Input label='Description' isTextarea />

				<Input label='Due Date' />
			</div>

		</section>
	)
}