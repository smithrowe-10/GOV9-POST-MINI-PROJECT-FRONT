/** @jsxImportSource @emotion/react */
import ReactModal from "react-modal";
import  * as s  from "./styles";
import { useEffect } from "react";

function AddPostModal({isOpen, onRequestClose, layoutRef}) {

    return <ReactModal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        parentSelector={() => layoutRef.current}
        appElement={layoutRef.current}
        ariaHideApp={false}>
        
    </ReactModal>

}

export default AddPostModal;