import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProject";
import { useState } from "react";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined, //undefined = no project, [id] = selected project, //null = new project
		projects: [],
	});

	function handleAddProject() {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: null
			};
		})
	};

	let content;

	if (projectsState.selectedProjectId === null ) {
		content = <NewProject />
	}
	else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onAddProject={handleAddProject} />
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar onAddProject={handleAddProject} />
			{/* <NewProject /> */}
			{/* <NoProjectSelected onAddProject={handleAddProject} /> */}
			{content}
		</main>
	);
}

export default App;
