import React from 'react';
import { Mail, Github, Twitter, LinkedinOption } from 'grommet-icons';
import avatarImage from '../assets/images/avatar.jpg';

const social_links = [
	{
		id: 1,
		link: 'mailto:hello@prodz.dev',
		icon: <Mail color="white" />,
	},
	{
		id: 2,
		link: 'https://www.linkedin.com/in/pablo-rodriguez-685905126/',
		icon: <LinkedinOption color="white" />,
	},
	{
		id: 3,
		link: 'https://github.com/prodz18',
		icon: <Github color="white" />,
	},
	{
		id: 4,
		link: 'https://twitter.com/pablorr18',
		icon: <Twitter color="white" />,
	},
];

const Hero = () => (
	<section className="bg-gray-900 text-white">
		<div className="container mx-auto pt-16 pr-8 pl-8 pb-8 flex flex-col">
			<div className="flex justify-center p-4">
				<div className="rounded-full h-40 w-40 lg:h-80 lg:w-80 sm:h-40 sm:w-40 flex items-center justify-center bg-gray-700 text-gray-500 border-solid  border-4 sm:border-4 lg:border-8 border-white overflow-hidden">
					<img
						src={avatarImage}
						className="h-full w-full object-cover"
						alt="Avatar"
					/>
				</div>
			</div>
			<div className="flex justify-center p-2">
				<h1 className="uppercase font-bold text-2xl lg:text-5xl">
					Pablo Rodriguez
				</h1>
			</div>
			<div className="flex justify-center mt-1">
				<h3 className="uppercase text-sm lg:text-lg font-semibold bg-yellow-400 text-gray-900 px-3 py-1 rounded-full">
					Full-Stack Software Engineer
				</h3>
			</div>
			<div className="flex justify-center mt-2">
				{social_links.map((item) => (
					<div
						key={item.id}
						className="transition duration-300 ease-in-out bg-gray-900 hover:bg-gray-700 rounded-full p-2 mr-3"
					>
						<a
							href={item.link}
							target="_new"
							className="focus:outline-none"
						>
							{item.icon}
						</a>
					</div>
				))}
			</div>
		</div>
	</section>
);
export default Hero;
