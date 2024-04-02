import React from 'react';
import { motion as m } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import mision from "../../../assets/photos/1.jpeg"
import vision from "../../../assets/photos/3.jpg"

const Home = () => {
	const features = [
		{
			label: 'Ecología',
			icon:  <FontAwesomeIcon icon = { icon({ name: 'tree', style: 'solid' }) } />
		},
		{
			label: 'Compromiso',
			icon:  <FontAwesomeIcon icon = { icon({ name: 'handshake-simple', style: 'solid' }) } />
		},
		{
			label: 'Innovación',
			icon:  <FontAwesomeIcon icon = { icon({ name: 'lightbulb', style: 'regular' }) } />
		}
	];

	return (
		<>
			<div className="features">
				<div className="features__container">
					{
						features.map(({ label, icon }) => 
							<m.div
								key={label}
								className="features__container--card"
								whileHover={{
									scale: 1.2
								}}
							>
								{ icon }
								<span className='green'>{ label }</span>
							</m.div>
						)
					}
				</div>
			</div>

			<div className="cards">

				<div className="cards__container">
					<img src={mision} alt="Misión" />
					<div className="cards__container--text">
						<h2>Misión</h2>
						<p>Ofrecer experiencias de turismo ecológico de calidad y 
							responsabilidad en el municipio Juan Germán Roscio, 
							contribuyendo a la conservación de la biodiversidad, el respeto 
							a las culturas locales y el fomento de la economía social y 
							solidaria.
						</p>
					</div>
				</div>

				<div className="cards__container">
					<div className="cards__container--text">
						<h2>Visión</h2>
						<p>Ser una empresa líder y referente en el sector del turismo 
							ecológico en el municipio Juan Germán Roscio, reconocida por 
							su compromiso con la sostenibilidad ambiental, social y 
							económica, y por brindar servicios innovadores y 
							personalizados que superen las expectativas de sus clientes.
						</p>
					</div>
					<img src={vision} alt="Misión" />
				</div>

			</div>
		</>
	);
};

export default Home;