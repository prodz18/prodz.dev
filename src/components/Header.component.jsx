import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Mail } from 'grommet-icons';
import useDocumentScrollThrottled from '../utils/useDocumentScrollThrottled';
import avatarImage from '../assets/images/avatar.jpg';
import Drawer from './Drawer.component';

const Header = (props) => {
	const { refProps } = props;
	const [shouldHideHeader, setShouldHideHeader] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);

	const MINIMUM_SCROLL = 250;
	const TIMEOUT_DELAY = 400;

	useDocumentScrollThrottled((callbackData) => {
		const { currentScrollTop } = callbackData;
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

		setTimeout(() => {
			setShouldHideHeader(isMinimumScrolled);
		}, TIMEOUT_DELAY);
	});

	const hiddenStyle = !shouldHideHeader ? 'opacity-0' : 'opacity-100';

	return (
		<header className="bg-gray-900 text-white fixed w-full">
			<div className="container mx-auto p-4">
				<button
					type="button"
					className="transition duration-300 ease-in-out bg-gray-900 hover:bg-gray-700 rounded p-2"
					onClick={() => setShowDrawer(true)}
				>
					<Menu color="white" />
				</button>
				<img
					src={avatarImage}
					className={`inline-block ml-2 w-10 h-10 rounded-full object-cover border-solid  border-2 border-white ${hiddenStyle}`}
					alt="Avatar"
				/>
				<span
					className={`inline-block ml-3 text-white text-xl font-bold transition duration-300 ease-in-out ${hiddenStyle}`}
				>
					Pablo Rodriguez
				</span>
				<div className="inline-block pr-2 float-right mt-1">
					<a
						href="mailto:hello@prodz.dev"
						className={`transition duration-300 ease-in-out bg-gray-900 hover:bg-gray-700 rounded p-2 ${hiddenStyle}`}
					>
						<Mail color="white" />
					</a>
				</div>
			</div>
			<Drawer
				showDrawer={showDrawer}
				setShowDrawer={setShowDrawer}
				refProps={refProps}
			/>
		</header>
	);
};

Header.propTypes = {
	refProps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
