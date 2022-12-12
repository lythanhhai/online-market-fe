import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import React, { useState } from 'react';

function Orders() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShowAdd = () => setBasicModal(!basicModal);
  const [isEdit, setIsEdit] = useState(false);
  const toggleShowEdit = () => setIsEdit(!isEdit);
  return (
  <div className="p-4 block">
      <div className="d-flex">
        <h4>Orders</h4>
      </div>
      <MDBCol className="mt-4" style={{marginLeft : "-15px"}}>
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBRow className="mt-4 ml-1">
                <MDBCol sm="2">
                  <MDBCardText></MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>All</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>Ordered</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>Transport</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>Received</MDBCardText>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-4 ml-1 pt-4 border-top">
              <MDBCol sm="1">
                  <MDBCardText></MDBCardText>
                </MDBCol>
                <MDBCol sm="1">
                  <MDBCardText>Total</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>120</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>20</MDBCardText>
                </MDBCol>
                <MDBCol sm="2">
                  <MDBCardText>50</MDBCardText>
                </MDBCol>
                <MDBCol sm="1">
                  <MDBCardText>50</MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
      </MDBCol>
  </div>
  )
}
export default Orders