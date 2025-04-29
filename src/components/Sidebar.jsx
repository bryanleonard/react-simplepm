import Button from "./Button";

export default function Sidebar ({onAddProject, projects, onSelectProject, selectedProjectId}) {

	let btnCss="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
	
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Available projects</h2>
			<div>
				<Button onClick={onAddProject}>
					+ Add project
				</Button>
			</div>
			<ul className="mt-8">
				{projects.map((project) => {
					
					if (project.id === selectedProjectId) {
						btnCss += " bg-stone-800 text-stone-200";
					} else {
						btnCss += " text-stone-400";
					}
					
					return (
						<li key={project.id}>
							<button className={btnCss} onClick={() => onSelectProject(project.id)}>{project.title}</button>
						</li>
					);
				
				})}
			</ul>
		</aside>
	);
}