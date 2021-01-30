import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Image, Transformation } from 'cloudinary-react';
import { Update } from 'grommet-icons';
import Modal from './Modal.component';

const Portfolio = (props) => {
	const { refProp } = props;
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState();

	const onShowModal = (item) => {
		const image = (
			<div className="text-center">
				<Image
					cloud_name="prodz"
					secure="true"
					responsiveUseBreakpoints="true"
					publicId={`portfolio/${item.image}`}
				>
					<Transformation width="960" height="1200" crop="limit" />
					<Transformation dpr="auto" />
				</Image>
			</div>
		);
		setModalContent({
			title: item.title,
			content: image,
		});
		setShowModal(true);
	};

	const onCloseModal = () => {
		setShowModal(false);
		setModalContent(undefined);
	};

	const firestore = useFirestore();
	const portfolioCollection = firestore.collection('portfolio');
	const portfolioQuery = portfolioCollection.orderBy('order', 'asc');
	const { status, data } = useFirestoreCollectionData(portfolioQuery, {
		idField: 'id',
	});

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
						<h1 className="uppercase text-xl lg:text-3xl text-center font-bold mb-8">
							Some of My Work
						</h1>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
							{data
								.filter((item) => item.active)
								.map((item) => (
									<div
										className="transition duration-300 ease-in-out shadow-lg hover:shadow-2xl"
										key={item.id}
									>
										<div className="text-center font-semibold cursor-pointer">
											<Image
												cloud_name="prodz"
												secure="true"
												responsiveUseBreakpoints="true"
												publicId={`portfolio/${item.image}`}
												onClick={() =>
													onShowModal(item)
												}
											>
												<Transformation
													width="500"
													height="500"
													crop="fill"
													gravity="north"
												/>
												<Transformation dpr="auto" />
											</Image>
										</div>
									</div>
								))}
						</div>
					</>
				)}
				{showModal && (
					<Modal onCloseModal={onCloseModal} data={modalContent} />
				)}
			</div>
		</div>
	);
};

Portfolio.propTypes = {
	refProp: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Portfolio;
