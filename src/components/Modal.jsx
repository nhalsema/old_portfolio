import React from "react";
import { useEffect } from "react";
import './Modal.css';

// const Modal = () => {
//   // const [showPopup, setShowPopup] = useState(false);
//   return (
//     <div className='popBox popFont '>
//       <p>I'm A Pop Up!!!</p>
//       <a href="#" class="close-btn">X</a>
//     </div>
//   );
// };

// export default Modal;

const Modal = ({ onRequestClose }) => {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <h3 className="modal__title">I'm a modal!</h3>
        <p>
          When this modal is open, we disable scrolling the <code>body</code> using{" "}
          <code>overflow: hidden</code>. This allows users to scroll the modal
          without losing their position on the page.
        </p>
        <p>
          To close this modal, press the button below or use the Escape key on desktop.
        </p>
        <button type="button" onClick={onRequestClose}>
          Close this modal
        </button>
        <div className="placeholder" />
        <div className="placeholder" />
        <div className="placeholder medium" />
        <div className="placeholder" />
      </div>
    </div>
  );
};

export default Modal;