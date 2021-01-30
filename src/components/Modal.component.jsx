import React from 'react';
import PropTypes from 'prop-types';
import { Close } from 'grommet-icons';

const Modal = (props) => {
	const { onCloseModal, data } = props;
	return (
		<>
			<div
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
				onClick={onCloseModal}
			>
				<div className="relative w-auto my-6 mx-auto max-w-5xl max-h-screen">
					{/* content */}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/* header */}
						<div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
							<h3 className="text-3xl font-semibold">
								{data.title}
							</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={onCloseModal}
								type="button"
							>
								<span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
									<Close color="grey" size="medium" />
								</span>
							</button>
						</div>
						{/* body */}
						<div className="relative p-6 flex-auto">
							{data.content}
						</div>
						{/* footer */}
						{/* <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
							<button
								className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
								type="button"
								style={{ transition: 'all .15s ease' }}
								onClick={onCloseModal}
							>
								Close
							</button>
						</div> */}
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black" />
		</>
	);
};

Modal.propTypes = {
	onCloseModal: PropTypes.func.isRequired,
	data: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.element])
	).isRequired,
};

export default Modal;
