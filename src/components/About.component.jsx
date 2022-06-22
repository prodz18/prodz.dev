import React from 'react';
import PropTypes from 'prop-types';
import 'firebase/firestore';
import { useFirestoreDocData, useFirestore } from 'reactfire';
import { Update } from 'grommet-icons';

const About = (props) => {
	const { refProp } = props;
	const documentRef = useFirestore().collection('sections').doc('about-me');
	const { status, data } = useFirestoreDocData(documentRef);

	return (
		<div ref={refProp} className="bg-white text-black">
			<div className="container mx-auto p-12">
				{status === 'loading' && (
					<div className="text-center">
						<Update
							color="plain"
							size="medium"
							className="animate-spin mr-3"
						/>{' '}
						Loading...
					</div>
				)}
				{status !== 'loading' && (
					<>
						<h1 className="uppercase text-xl lg:text-3xl text-center font-bold text-gray-900">
							{data.title}
						</h1>
						<p className="py-5 text-center lg:text-justify leading-relaxed text-gray-700 text-base lg:text-lg">
							{data.content}
						</p>
					</>
				)}
			</div>
		</div>
	);
};

About.propTypes = {
	refProp: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default About;
