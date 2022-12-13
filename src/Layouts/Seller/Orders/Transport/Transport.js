import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBTextArea,
} from "mdb-react-ui-kit";
import React, { useState } from 'react';

function Transport() {
  const [isEdit, setIsEdit] = useState(false);
  const toggleShowEdit = () => setIsEdit(!isEdit);
  return (
  <div className="p-4 block">
      <div className="d-flex">
        <h4>Transport</h4>
      </div>
      <MDBCol className="mt-4" style={{marginLeft : "-15px"}}>
          <MDBCard className="mb-4">
            <MDBCardBody>
            <div class="container-fluid" style={{marginLeft : "110px"}}>
              <form class="d-flex w-75">
                  <input
                      type="Filter order"
                      class="form-control rounded"
                      placeholder="Filter order"
                      aria-label="Filter order"
                      aria-describedby="search-addon"
                  />
                  <span class="input-group-text border-0 ml-4" id="search-addon">
                  <i class="fas fa-search"></i>
                  </span>
              </form>
              </div>
              <MDBRow className="mt-4 ml-1">
                <MDBCol sm="2">
                  <MDBCardText>Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>PhoneNumber</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>List item</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>Province</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="1">
                  <MDBCardText>Total</MDBCardText>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4 ml-1 pt-4 border-top">
                <MDBCol sm="2">
                  <MDBCardText>Nguyen van a</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>0365663332</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>Ao phong - Xl </MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>Da nang</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>120 NVL</MDBCardText>
                </MDBCol>
                <MDBCol sm="1">
                  <MDBCardText>200000</MDBCardText>
                </MDBCol>
                <MDBCol sm="1" style={{marginTop : "-5px", marginLeft : "-15px"}}>
                  <button type="button" class="btn btn-dark btn-small" name="edit" disabled="" >Received</button>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
      </MDBCol>
  </div>
  )
}
export default Transport