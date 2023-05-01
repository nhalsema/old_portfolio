import React, { useState } from "react";
import './Boxes.css';

const PopUp = () => {
  // const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='popBox popFont '>
      <p>I'm A Pop Up!!!</p>
      <a href="#" class="close-btn">X</a>
    </div>
  );
};

export default PopUp;

{/* <div className="grid h-screen place-items-center ">
<button onClick={openModal} className="bg-white px-4 py-3 rounded border-2 shadow-md shadow-red-600 hover:bg-gray-200">Open Modal</button>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="Example Modal"
>
  <div >
    <button onClick={closeModal} className="relative right-0 float-right text-red-600 font-bolder text-2xl">X</button>
    <h2  className="text-center text-xl">Modal Header</h2>
    <div className="">some text goes here...</div>
   </div>
</Modal>
</div> */}


// function PopUp() {
//   handleClick = () => {
//     this.props.toggle();
//   return (
//     <div className='poppop'>
//       <p>I'm A Pop Up!!!</p>
//     </div>
//   );
// }

// export default PopUp;


// reference https://codepen.io/m3hm3tcan/pen/yLExMbe
// has a nice close func