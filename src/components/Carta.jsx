import React from 'react';
import './Carta.css';

const Carta = ({ carta }) => {
	return (
		<div className="carta">
			<div className="numero_arriba">{carta.numero}</div>
			<div className="numero_abajo">{carta.numero}</div>
			<div className="palo">{carta.palo}</div>
		</div>
	);
};

export default Carta;
