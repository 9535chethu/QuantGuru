// Testimonials.jsx
import React from "react";
import image from "./image.png";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import './Testemonials.css'; // Ensure this file exists

const Testemonials = () => {
  return (
    <MDBContainer fluid className="outer-container">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10">
          <MDBCard className="inner-card">
            <MDBCardBody className="inner-card-body">
              <div className="avatar-container">
                <img
                  src={image}
                  className="avatar-img"
                  alt="men avatar"
                />
              </div>
              <div className="text-container">
                <p className="text-muted fw-light mb-4">
                  Join us to become Quant Experts. 
                  "Quantitative Aptitude Made Easy" by Quant Guru is an initiative to help students to crack Quantitative Aptitude Round during any Interview of Competitive Examination. 
                  A series of topics are being discussed which will help the users understand Quant easily and make them more confirmable during interviews.
                </p>
                <h3 className="fw-bold lead mb-2">
                  <strong>Dhananjay</strong>
                </h3>
                <p className="fw-bold text-muted mb-0">CEO & Founder of QuantGuru</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Testemonials;
