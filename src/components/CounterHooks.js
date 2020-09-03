/** @format */

import React, { useState } from "react";

//could just pass props but with object deconstructing we pass the initialCount
export default function CounterHooks({ initialCount }) {
    const [state, setState] = useState({ count: initialCount })
    return (
		<div>
			<button onClick={() => setState({count: state.count -1 })}> - </button>
    <span>{initialCount}</span>
			<button onClick={() => setState({count: state.count +1 })}> + </button>
		</div>
	);
}
