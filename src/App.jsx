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

	return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar onAddProject={handleAddProject} />
			<NewProject />
			<NoProjectSelecte onAddProject={handleAddProject} />
		</main>
	);
}

export default App;
