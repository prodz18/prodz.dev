import React from 'react';
import PropTypes from 'prop-types';
import 'firebase/firestore';
import { useFirestoreDocData, useFirestore } from 'reactfire';
import { Mail, Update } from 'grommet-icons';

const Contact = (props) => {
	const { refProp } = props;
	const documentRef = useFirestore().collection('sections').doc('contact-me');
	const { status, data } = useFirestoreDocData(documentRef);

	return (
		<div ref={refProp} className="bg-gray-900 text-white">
			<div className="container mx-auto pt-12 pr-12 pl-12">
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
						<h1 className="uppercase text-xl lg:text-3xl text-center font-bold">
							{status === 'loading' ? 'Loading...' : data.title}
						</h1>
						<p className="pt-5 text-center text-gray-100 leading-relaxed text-base lg:text-lg">
							{status === 'loading' ? 'Loading...' : data.content}
						</p>
					</>
				)}
			</div>
			<div className="container mx-auto p-12 text-center">
				<a
					href="mailto:hello@prodz.dev"
					className="inline-block transition duration-300 ease-in-out bg-blue-900 hover:bg-blue-700 rounded px-6 py-2 w-full sm:max-w-xs "
				>
					<Mail color="white" className="mr-3" />
					Send message
				</a>
			</div>
		</div>
	);
};

Contact.propTypes = {
	refProp: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Contact;
