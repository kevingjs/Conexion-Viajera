import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Footer = () => {
	const socials = [
		{
			label: "Instagram",
			url: 'https://www.instagram.com/contactjgrcv/',
			icon: <FontAwesomeIcon icon = { icon({ name: 'instagram', style: 'brands' }) } />
		},
		{
			label: "Facebook",
			url: 'https://www.facebook.com/profile.php?id=100093181887032',
			icon: <FontAwesomeIcon icon = { icon({ name: 'facebook', style: 'brands' }) } />
		},
		{
			label: "Twitter",
			url: 'https://twitter.com/contactjgrcv',
			icon: <FontAwesomeIcon icon = { icon({ name: 'twitter', style: 'brands' }) } />
		}
	];

	return (
		<footer>
			<div className="footer__top">
				<div className="footer__top--slogan">
					<span>Conoce tu {" "}</span>
					<span>
						proximo {" "}
						<span className="green">destino</span>
					</span>
				</div>
				<div className="footer__top--socials">
					{
						socials.map(({ label, url, icon }) => 
							<a key={label} href={url} target="_blank" rel="noopener noreferrer">{ icon }</a>
						)
					}
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__bottom--email">
					<FontAwesomeIcon icon = { icon({ name: 'envelope', style: 'solid' }) } />
					<span>contact.jgrcv@gmail.com</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;