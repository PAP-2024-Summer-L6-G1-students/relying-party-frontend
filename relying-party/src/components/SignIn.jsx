import React from 'react';
import './SignIn.css';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
function SignIn() {
    return (
        <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

               <h2 className="bold-text-center">Welcome to Volunteer Website</h2>
              <p className="text-white-50 mb-3">To continue using this website, please login below </p>

              
              <MDBBtn className="login-button" size='lg'>
                Login with SSO
              </MDBBtn>

              {/* sign up link will be redirected to identity provider sign up */}
              <p className="sign-up-text"> Don't have an account? Click here to <a href="">sign up </a>.</p>


              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    );
}

export default SignIn;
