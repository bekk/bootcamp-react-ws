import reactLogo from './assets/react.svg';

import Blog from './Oppgave1/Blog';

import './App.css';

function App() {
	return (
		<>
			<img className="logo" alt="logo" src={reactLogo} />
			<h1>Bootcamp 2024</h1>

			<div className="card">
				Endre kode i <code>src/App.jsx</code> og se hva som skjer!
			</div>
		</>
	);
}

export default App;
