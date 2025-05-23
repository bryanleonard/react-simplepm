import Tasks from "./Tasks";

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {

	const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	return (
		<section className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className ="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-stone-600 mb-2">{project.title}</h1>
					<button onClick={onDelete} className="text-stone-600 hover:text-red-500">Delete</button>
				</div>
				<p className="mb-4 text-stone-600">
					{formattedDate}
				</p>
				<p className="txt-stone-600 whitespace-pre-wrap">
					{project.description}
				</p>
			</header>

			<Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
		</section>
	);
}
