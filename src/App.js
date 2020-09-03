/** @format */

import React from "react";
import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";

export const ThemeContext = React.createContext();
//consumer is allowing us to pass it a value 
//essentially its providing a value to everything inside of it
//and the consumer is just consuming that value 


function App() {
	return (
		<ThemeContext.Provider value={ {backgroundColor: theme} }>
		Counter
		<Counter initialCount={0} />
		Counter Hooks
		<CounterHooks initialCount={3} />
		</ThemeContext.Provider>
	);
}

export default App;
