import React from 'react';

import './Today.scss';

const Today = () => {
	const date = new Date();

	const weekday = date.toLocaleDateString("es-ES", { weekday: "short" });
	const month = date.toLocaleDateString("es-ES", { month: "short" });
	const year = date.getFullYear();
	const day = date.getDay();

	return (
		<div className="today">
			<span id='weekday' className="capitalize">{weekday}</span>,
			<span>
				{day} <span className="capitalize">{month}</span> de {year}
			</span>
		</div>
	);
};

export default Today;
