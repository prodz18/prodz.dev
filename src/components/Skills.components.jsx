import React from 'react';
import PropTypes from 'prop-types';
import 'firebase/firestore';
import 'firebase/storage';
import {
	useFirestore,
	StorageImage,
	useFirestoreCollectionData,
} from 'reactfire';
import { Update } from 'grommet-icons';

const Skills = (props) => {
	const { refProp } = props;
	const firestore = useFirestore();
	const skillsCollection = firestore.collection('skills');
	const skillsQuery = skillsCollection.orderBy('order', 'asc');
	const { status, data } = useFirestoreCollectionData(skillsQuery, {
		idField: 'id',
	});

	return (
		<div ref={refProp} className="bg-gray-300 text-black">
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
						<h1 className="uppercase text-xl lg:text-3xl text-center font-bold mb-8">
							Some of my Skills &amp; Toolset
						</h1>
						<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 mt-4">
							{data
								.filter((item) => item.active)
								.map((skill) => (
									<div
										className="p-4 mr-5 text-center"
										key={skill.id}
									>
										<StorageImage
											className="w-full"
											storagePath={`logos/${skill.image}`}
											alt={skill.title}
										/>
										<span className="block mt-2 font-semibold text-xs text-gray-600 text-center">
											{skill.title}
										</span>
									</div>
								))}
						</div>
						<div className="block mt-5 text-center">
							<span className="inline bg-gray-400 text-gray-100 text-xs py-1 px-3 rounded">
								&amp; some more
							</span>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

Skills.propTypes = {
	refProp: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Skills;
