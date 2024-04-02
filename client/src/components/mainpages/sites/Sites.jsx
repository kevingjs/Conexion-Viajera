import React, { useState } from 'react';
import { motion as m } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import castrero from '../../../assets/photos/5.jpg';
import mirador from '../../../assets/photos/10.jpeg';
import santaRosa from '../../../assets/photos/7.jpg';
import platillon from '../../../assets/photos/12.jpg';
import morros from '../../../assets/photos/9.jpg';
import termales from '../../../assets/photos/8.jpg';
import olimpica from '../../../assets/photos/4.jpg';
import sanJuanote from '../../../assets/photos/11.jpeg';
import cultura from '../../../assets/photos/6.jpg';
import { useScrollLock } from '../utils/scroll_lock/useScrollLock';

const SiteCard = ({ img, name, description }) => {
	const [ expanded, setExpanded ] = useState(false);
	const { lockScroll, unlockScroll } = useScrollLock();

	const toggleCard = () => {
		if (!expanded) {
			lockScroll();
			return setExpanded(value => !value);
		};

		if (expanded) {
			unlockScroll();
			return setExpanded(value => !value);
		};
	};

	return (
		<>
			{
				!expanded ?
					<m.div 
						className='site__card'
						onClick={ toggleCard }
						layoutId={`${name}_card`}
						whileHover={{
							scale: 1.2,
						}}
						transition={{
							duration: .5,
							type: "spring",
							damping: 15,
							mass: .3,
							stiffness: 200
						}}
					>
						<m.div
							className="site__card--img"
							layoutId={`${name}_img`}
							transition={{
								duration: .5,
								type: "spring",
								damping: 15,
								mass: .3,
								stiffness: 200
							}}
						>
							<img
								src={img}
								alt=""
								draggable={false}
								onContextMenu={e => e.preventDefault()}
							/>
						</m.div>
						<div 
							className="site__card--title"
						>
							<m.h3 
								layoutId={`${name}_title`}
								transition={{
									duration: .5,
									type: "spring",
									damping: 15,
									mass: .3,
									stiffness: 200
								}}
							>
								{ name }
							</m.h3>
						</div>
					</m.div>
				:
					<div 
						className='bg-block'
						onClick={ toggleCard }
					>
						<m.div
							className='site__card expanded'
							onClick={e => e.stopPropagation()}
							layoutId={`${name}_card`}
							transition={{
								duration: .5,
								type: "spring",
								damping: 15,
								mass: .3,
								stiffness: 200
							}}
						>
							<div className="card__close" onClick={ toggleCard }>
								<FontAwesomeIcon icon = { icon({ name: 'xmark', style: 'solid' }) } />	
							</div>
							<m.div
								className="site__card--img"
								layoutId={`${name}_img`}
								transition={{
									duration: .5,
									type: "spring",
									damping: 15,
									mass: .3,
									stiffness: 200
								}}
							>
								<img
									src={img}
									alt=""
									draggable={false}
									onContextMenu={e => e.preventDefault()}
								/>
							</m.div>
							<div className='site__card--text'>
								<m.h3 
									className="text__title"
									layoutId={`${name}_title`}
									transition={{
										duration: .5,
										type: "spring",
										damping: 15,
										mass: .3,
										stiffness: 200
									}}
								>
									{ name }
									</m.h3>
								<m.p
									className='text__description'
									initial={{
										opacity: 0,
										y: -50
									}}
									animate={{
										opacity: 1,
										y: 0
									}}
									transition={{
										delay: .3,
										duration: .5,
										type: "spring",
										damping: 15,
										mass: .3,
										stiffness: 150
									}}
								>
									{ description }
								</m.p>
							</div>
						</m.div>
					</div>
			}
		</>
	);
};

const Sites = () => {
	const sitesList = [
		{
			name: "Balneario Castrero",
			img: castrero,
			description: `Ubicado en el municipio Juan Germán Roscio, a 690 metros sobre el nivel del mar, El Castrero es un centro poblado, aldea, sitio o localidad del estado Guárico, en Venezuela.

Está situado aproximadamente 10.6 kilómetros al occidente de San Juan de Los Morros; 32.5 kilómetros al noroccidente de Ortiz (municipio homónimo) y 68.6 kms al noroccidente de El Sombrero (Julián Mellado).`,
			tags: []
		},
		{
			name: "Mirador Teobaldo Mieres",
			img: mirador,
			description: `Este monumento está ubicado en el Mirador Teobaldo Mieres, de San Juan de los Morros al que se llega por la vía del centro de la ciudad, uno de los sitios más altos de la capital del Estado Guárico.

Se hizo en honor a la segunda beata de Venezuela, nacida en esta entidad. La estructura posee una altura de 24 metros y es uno de esos monumentos habitables a los cuales puede subir el turista y admirar la vista desde las alturas. La idea inicial era que allí funcionara una capilla, un centro artesanal y un café. Por ahora solo se puede admirar la estatua y la hermosa vista de San Juan y de sus Morros.`,
			tags: []
		},
		{
			name: "Cerro de Santa Rosa",
			img: santaRosa,
			description: `El Cerro Santa Rosa es una Formación montañosa ubicada al suroeste de San Juan de los Morros, entre la Av. José Félix Ribas y la Carretera Nacional vía los Llanos elevándose a más de 700 msnm. Es uno de los principales pulmones de San Juan de los Morros, cuenta con una gran variedad de flora y fauna. El cerro de puede apreciar desde todas las partes de la ciudad, en él se encuentra el mirador turístico Teobaldo Mieres lo cual se accede a través de la calle Simón Rodríguez que parte desde la avenida los llanos.`,
			tags: []
		},
		{
			name: "El Platillón",
			img: platillon,
			description: `El Monumento natural Pico Platillón o Cerro Platillón es una formación de montaña ubicada en el extremo norte del estado Guárico, Venezuela.1 A una altura oficial de 1.930 m s. n. m.2, el Pico Platillón es la montaña más alta en Guárico. Es protegido como monumento natural por decreto publicado en Gaceta Oficial de Venezuela, No. 33.664 de 20 de febrero de 1987.
			
El Pico Platillón está ubicado en el corazón de una fila montañosa del Monumento Natural Juan Germán Roscio, al oeste de San Juan de los Morros y sur del Lago de Valencia. Hacia el sur se continúa con el Topo La Cruz y la fila La Glorieta. Más hacia el este en dirección a la ciudad de San Juan se ubican otras filas montañosas, incluido el Topo Paraparo.

El Pico Platillón es una de las montañas más escaladas de Guárico debido a su accesibilidad y rápido ascenso. Por lo general se sube durante la estación seca: de octubre a marzo. El acceso principal es al sur de San Juan de los Morros a través de la población «La Guamita». La ruta normal es a través del pico sur. Son aproximadamente 13 km de camino hasta la cumbre, la cual es fácil de mantener en la mira por la presencia de antenas microondas en su pico.`,
			tags: []
		},
		{
			name: "Los Morros",
			img: morros,
			description: `El Monumento Natural Arístides Rojas, conocido como Los Morros de San Juan, es un sistema de roca caliza formado por la deposición de sedimentos marinos ubicado en los alrededores de San Juan de los Morros. El morro más alto se llama Paurario (también el Morro del Faro), el morro de mediano tamaño (el morro adyacente a Apuraría) se llama Tucunuma, y el morro alejado se llama Papelón.

Desde su punto más alto se observa la ciudad en una vista panorámica. Fue declarado monumento natural en 1949.1 Están localizados al Noroeste de Venezuela, en las cercanías de San Juan de los Morros, capital del estado Guárico.

Su principal atractivo son los morros, formaciones geológicas que se elevan hasta los 1.060 metros, constituidas por caliza arrecifal que data de hace 80 millones de años. Otro de sus atractivos es la vista panorámica de todo el poblado, que se puede divisar desde lo alto del monumento. En ocasiones se realizan caminatas guiadas para personas que quieran subir hasta la cima del mismo.`,
			tags: []
		},
		{
			name: "Aguas Termales",
			img: termales,
			description: `Cuenta la historia que desde la época de la independencia venezolana, los soldados se dieron cuenta de las propiedades de estas aguas cuando pasaban por ellas con sus caballos y estos presentaban mejorías en sus dolencias. Fue el dictador Juan Vicente Gómez quien decidió construir alrededor de estas aguas un complejo que incluyera un hotel. Hoy en día después de haber sido abandonado y recuperado por el Gobierno nacional, este lugar fue remodelado y ofrece una mejor cara que la que mostraba hace unos años.

Son aguas sulfurosas, alcalinas, boratadas, de color azulado, con una temperatura media de 33.5 °C. Se trata de un manantial termo-mineral con una capacidad de 6.800 L/h. Están rodeadas por un bosque seco-tropical, posee salas de baño, piscinas, servicios de alojamiento y servicios variados. Están situadas al Noroeste de San Juan de Los Morros, a 58 km de Maracay. Su dirección más específica es Av. Rómulo Gallegos, a pocos metros de la Villa Olímpica, San Juan de los Morros.`,
			tags: []
		},
		{
			name: "Villa Olímpica",
			img: olimpica,
			description: `Bajo la gestión del gobernador Eduardo Manuit Carpio, se concluye el Complejo Deportivo Villa Olímpica, ubicado en la Avenida Rómulo Gallegos, San Juan de Los Morros, estado Guárico, el cual fue sede de algunos de las competencias deportivas realizadas en el marco de los Juegos Deportivos Nacionales Llanos 2007.`,
			tags: ["popular"]
		},
		{
			name: "San Juanote",
			img: sanJuanote,
			description: `El Monumento a San Juan Bautista es una colosal escultura conmemorativa de Juan el Bautista, realizada completamente en concreto, levantada a un costado de la plaza Bolívar de la ciudad de San Juan de los Morros, en Venezuela.2 Comúnmente llamado "Sanjuanote", cuenta con 19,8 metros de altura, es una de las estatuas más altas de Venezuela y pasó a ser la segunda más alta en San Juan de los Morros, luego de la construcción del monumento a la Madre Candelaria de San José, segunda beata venezolana; la cual mide 24 metros y está ubicada en el mirador Teobaldo Mieres.
			
Fue construida por el mandato del General Juan Vicente Gómez en 1933 como un presente para la ciudad cuando se la decretó como Capital del Estado Guárico. El monumento fue tallado entre 1934 y 1935 sobre el cerro El Calvario, un pequeño promontorio en el centro de la ciudad. La estatua está rodeada de leones de concreto y antiguos cañones que fungen como cancerberos protectores del monumento. En el sitio donde se asienta el monumento primero se había levantado una cruz de madera que luego fue de concreto armado. Esta estatua de casi 20 metros se encuentra en el cerro del calvario justo donde comienza la Plaza Bolívar de San Juan de los Morros y la vida política de la ciudad.`,
			tags: []
		},
		{
			name: "Casa de la Cultura",
			img: cultura,
			description: `Ubicada en la avenida Bolívar de la ciudad, esta casa de la cultura es la más importante del estado Guarico, fue inaugurara en el año 1970.
			
Su nombre es en honor al Dr. Sanjaunero Víctor Manuel Ovalles. En esa casa de la cultura se realizan actividades didácticas como taller de expresión y motivación infantil, teatro, taller de pintura, taller de cerámica. Cuenta con una biblioteca, escuela de música, galería de artes y sala de conferencia.`,
			tags: []
		}
	];

	return (
		<>
			{
				sitesList.filter(site => site.tags.includes("popular")).map(({ name, img, description, tags }) =>
					<div className='popular' key={name}>
						<div className="popular__photo">
							<img src={img} alt={name} draggable={false} onContextMenu={e => e.preventDefault()} />
						</div>
						<div className="popular__text">
							<div className="popular__text--tags">
								{tags.map(tag => <span key={tag}>{tag}</span>)}
							</div>
							<h3 className="popular__text--title">{name}</h3>
							<div className="popular__text--description">{description}</div>
						</div>
					</div>
				)
			}
			
			<div className="separator"></div>

			<div className="general">
				{
					sitesList.filter(site => !site.tags.includes("popular")).map(({ name, img, description }) =>
						<SiteCard key = { name } name = { name } img = { img } description = { description } />
					)
				}
			</div>
		</>
	);
};

export default Sites;