import { useState } from "react";
// import Modal from 'react-bootstrap/Modal';
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
    zIndex: "10",
  },
  overlay: {
    padding: "2rem",
    zIndex: "10",
  },
};
function ProjectDetails({ show, close, data }) {
  const handleClose = () => close();

  return (
    <>
      <Modal isOpen={show} onRequestClose={handleClose} style={customStyles}>
        <div className="flex items-center gap-2"></div>

        <span className="text-[28px]">Project Details</span>

        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <br />
          <li>{data.point1}</li>
          <li>{data.point2}</li>
          <li className="font-semibold">Demo</li>
          <a href={`${data.laiba}`}>{data.laiba}</a>
        </ul>
        <br />
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="btn btn hover:bg-dark_primary transition-colors duration-500 ease-in-out hover:text-white"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ProjectDetails;
