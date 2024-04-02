import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useInView, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { ReactComponent as Icon } from '../../assets/utils/icon.svg';
import { useScrollLock } from '../../components/mainpages/utils/scroll_lock/useScrollLock';


const Header = forwardRef(function Header({ headerHandler }, headerRef) {
	const pages = [
		{
			label: "home",
			path: "/",
			name: "Inicio"
		},
		{
			label: "about",
			path: "/about",
			name: "Acerca de"
		},
		{
			label: "sites",
			path: "/sites",
			name: "Sitios"
		},
		{
			label: "reviews",
			path: "/reviews",
			name: "Reseñas"
		}
	];
	const [ menuIsOpen, setMenuIsOpen ] = useState(false);
	const [ isOverlapping, setIsOverlapping ] = useState(true);
	const { lockScroll, unlockScroll } = useScrollLock();
	const ref = useRef(null);
	const [ color, setColor ] = headerHandler;

	const checkIfHeaderIsOverlapping = () => {
		if (headerRef.current && ref.current) {
			const a = headerRef.current.getBoundingClientRect();
			const b = ref.current.getBoundingClientRect();

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
					backgroundColor: "transparent",
					color: "var(--white)",
					activeColor: "var(--primary-color)"
				}
			:
				{
					backgroundColor: "var(--white)",
					color: "var(--secondary-color)",
					activeColor: "var(--primary-color)"
				}
		);

		return () => {
			window.removeEventListener("scroll", checkIfHeaderIsOverlapping);
		};
	}, [ isOverlapping ]);

	const navigate = useNavigate();
	const { pathname: path } = useLocation();

	const pathname = path === "/" ? "home" : path.replace("/", "");

	const toggleMenu = () => {
		if (!menuIsOpen) {
			lockScroll();
			setMenuIsOpen(menuIsOpen => !menuIsOpen);
		};

		if (menuIsOpen) {
			unlockScroll();
			setMenuIsOpen(menuIsOpen => !menuIsOpen);
		};
	};

	return (
		<>
			<div
				className='header__top'
				style={{ color: `${color.color}`,backgroundColor: `${color.backgroundColor}` }}
				ref = { headerRef }
			>
				<div className="logo">
					<Icon style = {{ color: color.activeColor }}/>
					<span>Conexión Viajera</span>
				</div>

				<div className="header__height"></div>

				<div className="menuBtn" onClick={ toggleMenu }>
					<FontAwesomeIcon icon = { icon({ name: 'bars', style: 'solid' }) } />
				</div>
	
				<AnimatePresence>
					{
						menuIsOpen ?
							<m.nav
								key = "menuSide"
								className="menu"
								initial={{
									x: "100%"
								}}
								animate={{
									x: 0
								}}
								exit={{
									x: "100%"
								}}
								transition={{
									duration: .5,
									type: "spring",
									damping: 15,
									mass: .3,
									stiffness: 200
								}}
							>
								<div className='menu__wrapper'>
									<div className="menu__wrapper--closeBtn" onClick={toggleMenu}>
										<FontAwesomeIcon icon={icon({ name: 'xmark', style: 'solid' })} />
									</div>
									{
										pages.map(({ label, path, name }) =>
											<div
												key={label}
												onClick={e => {
													if (label === pathname) return e.preventDefault();
													toggleMenu();
													return navigate(path);
												}}
												className={`${label === pathname ? "active" : ""}`}
											>
												<span>{name}</span>
											</div>
										)
									}
								</div>
							</m.nav>
						:
							null
					}
				</AnimatePresence>
	
				<nav
					className='navbar'
				>
					{
						pages.map(({ label, path, name }) => 
							<div
								key = { label }
								onClick = {e => {
									if (label === pathname) return e.preventDefault();
									return navigate(path);
								}}
								className = { `${label === pathname ? "active": ""}` }
								style={{ color: label === pathname ? color.activeColor : color.color }}
							>
								<span>
									{ name }
									{
										label === pathname ? 
											<m.div
												layoutId='underline' 
												className="underline"
												style={{ backgroundColor: color.activeColor }}
											>
											</m.div>
										:
											null
									}
								</span>
							</div>
						)
					}
				</nav>
	
			</div>
			
			<header onContextMenu={e => e.preventDefault()} ref = { ref }>
	
				<div className="logo__mobile">
					<Icon style = {{ color: color.activeColor }}/>
				</div>
	
				<span className="slogan">
					Turismo
					<span className='green'>Ecológico</span>
				</span>
			</header>
		</>
	);
});

export default Header;