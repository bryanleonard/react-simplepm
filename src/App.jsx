import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProject";
import { useState } from "react";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined, //undefined = no project, [id] = selected project, //null = new project
		projects: [],
	});

	function handleStartAddProject() {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: null
			};
		})
	};

	function handleAddProject(projectData) {
		
		setProjectsState(prevState => {
			const projectId = Math.random();
			const newProject = {
				...projectData, // same as saying title: projectData.title, etc.
				id: projectId
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject]
			}
		});
	}



	let content;

	if (projectsState.selectedProjectId === null ) {
		content = <NewProject onAdd={handleAddProject} />
	}
	else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onAddProject={handleStartAddProject} />
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar onAddProject={handleStartAddProject} projects={projectsState.projects} />
			{/* <NewProject /> */}
			{/* <NoProjectSelected onAddProject={handleStartAddProject} /> */}
			{content}
		</main>
	);
}

export default App;
