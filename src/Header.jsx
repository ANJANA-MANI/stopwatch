import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src='clock.jpg'
              height='70'
              width='70'
              alt=''
              loading='lazy'
            />
            <h2 style={{color:'#34495E',fontFamily:"Tektur",fontSize:"50px"}}>StopWatch</h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header