import React from 'react';
import PropTypes from 'prop-types';
import { Close } from 'grommet-icons';

const Drawer = (props) => {
	const { showDrawer, setShowDrawer, refProps } = props;

	const menu_items = [
		{
			id: 'top',
			label: 'Home',
			refProp: null,
		},
		{
			id: 'about-me',
			label: 'About Me',
			refProp: refProps[0],
		},
		{
			id: 'skills',
			label: 'Skills & Toolsets',
			refProp: refProps[1],
		},
		{
			id: 'portfolio',
			label: 'Portfolio',
			refProp: refProps[2],
		},
		{
			id: 'contact',
			label: 'Contact',
			refProp: refProps[3],
		},
	];

	const onItemClick = (item) => {
		const position =
			item.id === 'top' ? 0 : item.refProp.current.offsetTop - 75;

		window.scrollTo({
			behavior: 'smooth',
			top: position,
		});
		setShowDrawer(false);
	};

	return (
		<>
			<div
				className={`transform duration-300 ease-out absolute top-0 left-0 h-screen w-screen bg-black z-20 ${
					showDrawer ? 'block opacity-40' : 'hidden opacity-0'
				}`}
				onClick={() => setShowDrawer(false)}
			/>
			<div
				className={`transition-all transform duration-300 ease-out absolute overflow-x-auto bg-gray-700 top-0 w-72 h-screen z-30 ${
					showDrawer ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className="navbar">
					<div className="flex pr-2 justify-end">
						<button
							className="p-2 text-white text-xl font-bold focus:outline-none"
							type="button"
							onClick={() => setShowDrawer(false)}
						>
							<Close color="white" size="small" />
						</button>
					</div>
					<h1 className="text-xl text-center font-bold pt-5 pb-5">
						Menu
					</h1>
					<ul className="list-none text-white">
						{menu_items.map((item) => (
							<li key={item.id} className="focus:outline-none">
								<button
									className="block text-center w-full transform duration-200 ease-out py-4 bg-transparent hover:bg-gray-800 cursor-pointer focus:outline-none focus:shadow-none"
									type="button"
									onClick={() => onItemClick(item)}
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

Drawer.propTypes = {
	showDrawer: PropTypes.bool.isRequired,
	setShowDrawer: PropTypes.func.isRequired,
	refProps: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Drawer;
