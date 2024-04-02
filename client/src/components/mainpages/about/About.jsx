import React, { useEffect, useRef, useState } from 'react';
import { motion as m, useAnimate, stagger, useInView } from 'framer-motion';
import { ReactComponent as Logo } from '../../../assets/utils/logo.svg'
import valuesImg from '../../../assets/photos/2.jpg'
import { useOutletContext } from 'react-router-dom';

const About = () => {
	const [ color, setColor, headerRef ] = useOutletContext();
	const [ scope, animate ] = useAnimate();
	const isInView = useInView(scope, { once: true, amount: .7 });
	const [ isOverlapping, setIsOverlapping ] = useState(false);
	const valuesSectionRef = useRef(null);
	const staggerValues = stagger(0.05);
	

	const checkIfHeaderIsOverlapping = () => {
		if (headerRef.current && valuesSectionRef.current) {
			const a = headerRef.current.getBoundingClientRect();
			const b = valuesSectionRef.current.getBoundingClientRect();

			if (a.height <= b.top + b.height && a.top + a.height > b.top) {
				setIsOverlapping(true);
			} else {
				setIsOverlapping(false);
			};
		};
	};


	useEffect(() => {
		const checkOverlaping = () => {
			window.addEventListener("scroll", checkIfHeaderIsOverlapping);
		};
		checkOverlaping();

		setColor(color =>
			isOverlapping ?
				{
					backgroundColor: "var(--primary-color)",
					color: "var(--grey)",
					activeColor: "var(--white)"
				}
			:
				{
					...(color.backgroundColor === "transparent" ? 
						(color)
						:
						({
							backgroundColor: "var(--white)",
							color: "var(--secondary-color)",
							activeColor: "var(--primary-color)"
						})
					)
				}
		);

		animate(
			"h2",
			isInView ?
				{ opacity: 1, x: 0 }
			:
				{ opacity: 0, x: -100 },
			{
				duration: .7,
				type: "spring",
				damping: 15,
				mass: .3,
				stiffness: 100
			}
		);

		animate(
			"li",
			isInView ?
				{ opacity: 1, y: 0, filter: "blur(0px)" }
			:
				{ opacity: 0, y: -20, filter: "blur(5px)" },
			{
				duration: .1,
				type: "spring",
				damping: 15,
				mass: .3,
				stiffness: 200,
				delay: staggerValues
			}
		);

		return () => {
			window.removeEventListener("scroll", checkIfHeaderIsOverlapping);
		};
	}, [isInView, isOverlapping]);

	return (
		<>
			<m.div
				className="logo"
				initial={{
					opacity: 0,
					y: -100
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						y: {
							duration: .7, type: "spring",
							damping: 15,
							mass: .3,
							stiffness: 100
						}
					}
				}}
				viewport={{
					amount: .9,
					once: true
				}}
			>
				<Logo />
			</m.div>

			<div className="values" ref = { valuesSectionRef }>
				<div className='values__img'>
					<m.img 
						src={valuesImg}
						alt="Los Morros"
						whileHover={{
							scale: 1.2,
							filter: "brightness(110%) contrast(110%)"
						}}
						transition = {{
							type: "spring",
							damping: 15,
							mass: .3,
							stiffness: 100
						}}
					/>
				</div>
				<div className="values__text" ref = { scope }>
					<h2 className='values__text--title'>
						Valores
					</h2>
					<ul className='values__text--list'>
						<li>Pasión por el turismo y la hospitalidad.</li>
						<li>Compromiso con la satisfacción del cliente.</li>
						<li>Integridad y ética empresarial.</li>
						<li>Innovación y creatividad.</li>
						<li>Responsabilidad social y ambiental.</li>
						<li>Trabajo en equipo y colaboración.</li>
						<li>Excelencia en el servicio al cliente.</li>
						<li>Flexibilidad y adaptabilidad a los cambios del mercado turístico.</li>
						<li>Conocimiento profundo del destino turístico.</li>
						<li>Orientación al logro de objetivos empresariales a largo plazo.</li>
						<li>Cultura organizacional basada en la calidad, eficiencia y eficacia.</li>
						<li>Capacidad para ofrecer experiencias únicas e inolvidables a los clientes.</li>
						<li>Respeto por la diversidad cultural y las diferencias individuales.</li>
					</ul>
				</div>
			</div>

			<div className="founders">
				<h2 className='founders__title'>Fundadores</h2>
				<div className="founders__list">
					<div className="founders__list--info">

						<h3 className="info__title">Génesis Sumoza</h3>
						<p className="info__text">
							{
								`El CEO o Director Ejecutivo, siendo la cara con algún accionista, trámites legales y garantizando el crecimiento de la empresa; que su visión vaya más allá.

Apoyo en el Departamento de Tecnología de la Información, encargado de mantener la información, sustentabilidad y actualizaciones a nivel de software. Y el funcionamiento de redes y todos los bienes tecnológicos (hardware).`
							}
						</p>
					</div>

					<div className="founders__list--info">
						<div className="info__title">Daniel de Freitas</div>
						<p className="info__text">
							{
								`El CFO o Director Financiero, por experiencia y mayor nivel de responsabilidad, garantizando las finanzas de la empresa.
								
Encargado de la gestión de las finanzas de la empresa en el Departamento de Finanzas.`
							}
						</p>
					</div>

					<div className="founders__list--info">
						<div className="info__title">José Marquez</div>
						<div className="info__text">
							{
								`El COO o Director de Operaciones, garantizando la funcionalidad y cumplimiento de todos los procesos que debe ejercer la empresa.
	
Encargado del Departamento de Investigación y Análisis, gestionando toda la información que exista y aportar la que más beneficie y fortalezca a la empresa.`
							}
						</div>
					</div>

					<div className="founders__list--info">
						<div className="info__title">José Sumoza</div>
						<div className="info__text">Encargado del Departamento de Marketing, tomando las decisiones a nivel depublicidad y mercadeo.</div>
					</div>

					<div className="founders__list--info">
						<div className="info__title">Juan Pablo Valera</div>
						<div className="info__text">Encargado del Departamento de Marketing, tomando las decisiones a nivel depublicidad y mercadeo.</div>
					</div>

					<div className="founders__list--info">
						<div className="info__title">Jonaiker Jaspes</div>
						<div className="info__text">En cargado del Departamento de Tecnología de la Información, siendo apoyadopor Keving Andrades y Génesis Sumoza.</div>
					</div>

					<div className="founders__list--info">
						<div className="info__title">Keving Andrades</div>
						<div className="info__text">Apoyo en el Departamento de Tecnología de la Información, encargado de mantener la información, sustentabilidad y actualizaciones a nivel de software. Y el funcionamiento de redes y todos los bienes tecnológicos (hardware).</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default About;