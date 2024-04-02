import React, { useEffect, useRef, useState } from 'react';
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import Home from './components/mainpages/home/Home';
import NotFound from './components/mainpages/utils/not_found/NotFound';
import Header from './components/header/Header';
import About from './components/mainpages/about/About';
import Sites from './components/mainpages/sites/Sites';
import Reviews from './components/mainpages/reviews/Reviews';
import Footer from './components/footer/Footer';

const ScrollToTop = ({ children }) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [location]);

	return <>
		{ children }
	</>;
};

const AppLayout = () => {
	const location = useLocation();
	const { pathname } = location;
	const page = pathname === "/" ? "home" : pathname.replace("/", "");
	const headerRef = useRef(null);
	const [ color, setColor ] = useState({
		backgroundColor: "transparent",
		color: "var(--white)",
		activeColor: "var(--primary-color)"
	});

	return (
		<DataProvider>
			<ScrollToTop>
				<Header ref = { headerRef } headerHandler = { [ color, setColor ] } />
				<main className={page}>
					<Outlet key={location.pathname} context={[ color, setColor, headerRef ]} />
				</main>
				<Footer />
			</ScrollToTop>
		</DataProvider>
	);
};

const router = createBrowserRouter([
	{
		element: (<AppLayout />),
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/sites',
				element: <Sites />
			},
			{
				path: '/reviews',
				element: <Reviews />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]);

function App() {
	return <RouterProvider router={router} />;
};

export default App;