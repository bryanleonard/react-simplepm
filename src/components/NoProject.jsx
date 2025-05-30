import noProjImg from '../assets/no-projects.png';
import Button from "./Button";

export default function NoProjectSelected({onAddProject}) {

	return (
		<div className="mt-[3.75rem] text-center w-2/3">
			<img src={noProjImg} alt="An empty task list" className="w-16 h-16 object-contain mx-auto" />
			<h2 className="text-xl font-bold text-stone-600 my-4">No project selected</h2>
			<p className="text-stone-600 mb-4">Select a project or get started with a new one.</p>
			<p className="mt-8">
				<Button onClick={onAddProject}>
					+ Create new project
				</Button>
			</p>
		</div>
	);
}
