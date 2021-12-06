import React from "react";
import Footer from "react-bootstrap/ModalFooter";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../assets/img/footer.jpg";
import "../assets/css/footer.css"

export default function footer() {
    return (
        <div className='footer'>
            <Footer>

                <img className='imgfooter' src={img1} alt="Logo"/>
            </Footer>
        </div>
    )
}


