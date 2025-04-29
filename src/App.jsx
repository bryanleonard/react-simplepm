import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined, //undefined = no project, [id] = selected project, //null = new project
		projects: [],
	});

	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: null,
			};
		});
	}

	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			//const projectId = Math.random();
			const newProject = {
				...projectData, // same as saying title: projectData.title, etc.
				id: Math.random(),
			};

			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	function handleCancelAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
			};
		});
	}

	

	function handleSelectProject(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: id,
			};
		});
	}

	function handleDeleteProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId) 
			};
		});
	}

	const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
	let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

	if (projectsState.selectedProjectId === null) {
		content = (
			<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
		);
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onAddProject={handleStartAddProject} />;
	}

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar
				onAddProject={handleStartAddProject}
				projects={projectsState.projects}
				onSelectProject={handleSelectProject}
			/>
			{/* <NewProject /> */}
			{/* <NoProjectSelected onAddProject={handleStartAddProject} /> */}
			{content}
		</main>
	);
}

export default App;
