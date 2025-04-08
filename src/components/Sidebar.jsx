import Button from "./Button";

export default function Sidebar ({onAddProject, projects}) {

	const btnCss="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
	
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Available projects</h2>
			<div>
				<Button onClick={onAddProject}>
					+ Add project
				</Button>
			</div>
			<ul className="mt-8">
				{projects.map((item) => (
					<li key={item.id}>
						<button className={btnCss}>{item.title}</button>
					</li>
				))}
			</ul>
		</aside>
	);
}