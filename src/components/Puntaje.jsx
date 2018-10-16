import React from 'react';
import { pipe, range, splitEvery, max, map, length, repeat } from 'ramda';
import './Puntaje.css';

const Puntaje = ({ puntaje: { nosotros, ellos } }) => {
	const slots = Math.ceil(max(nosotros, ellos) / 5);
	const palitos = pipe(
		range(1),
		splitEvery(5),
		map(length),
		(groups) => groups.concat(repeat(0, slots - groups.length))
	);

	const palitosNos = palitos(nosotros + 1);
	const palitosEllos = palitos(ellos + 1);

	return (
		<div className="puntaje">
			<ColumnaPuntaje
				titulo="Nos"
				palitos={palitosNos}
				estilo="nosotros"
			/>
			<ColumnaPuntaje
				titulo="Ellos"
				palitos={palitosEllos}
				estilo="ellos"
			/>
		</div>
	);
};

const ColumnaPuntaje = ({ titulo, palitos, estilo }) => {
	return (
		<div>
			<div className={`header ${estilo}`}>{titulo}</div>
			<div className={`palitos ${estilo}`}>
				{palitos.map((p, i) => (
					<Cajita key={i} valor={p} />
				))}
			</div>
		</div>
	);
};

const Cajita = ({ valor }) => <div>{valor}</div>;

export default Puntaje;
