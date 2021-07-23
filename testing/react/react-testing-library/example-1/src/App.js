import {useState} from "react";

const App = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		const nextTheme = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
	};

	return (
		<>
			<h1>Learn React</h1>
			<button onClick={toggleTheme}>
				Current theme: {theme}
			</button>
		</>
	);
};

export default App;
