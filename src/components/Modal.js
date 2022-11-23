import React from 'react'
import "./Modal.css"
const Modal = ({displayModal,setDisplayModal,modalData}) => {
    function handleDrag() {
        console.log("Dragging...")
    }
  return (
    <>
     
     <div className={`Modal ${displayModal ? "Show" : ""}`}   >
        <h3 className='ps-2 mt-2' onClick={() => setDisplayModal(!displayModal)}>Details</h3>
        <button
          className="Close"
          onClick={() => setDisplayModal(!displayModal)}
        >
          X
        </button>
       <img className='modalcover' src={modalData.img} alt=""/>
       <h6>Ingredients :</h6>
<div>
 <p>{modalData.ingredients}</p>
</div>

      </div>
   
    </>
  )
}

export default Modal