import {
    MDBCol,
    MDBInput,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTextArea,
  } from "mdb-react-ui-kit";
  import React, { useState } from 'react';

function Products() {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShowAdd = () => setBasicModal(!basicModal);
    const [isEdit, setIsEdit] = useState(false);
    const toggleShowEdit = () => setIsEdit(!isEdit);
    return (
    <div className="p-4 block">
        <div className="d-flex">
          <h4>Products</h4>
          <button type="button" class="btn btn-dark btn-small" style={{marginLeft : "80%"}} name="add_product" disabled="" onClick={toggleShowAdd}>Add product</button>
        </div>
        <MDBCol className="mt-4" style={{marginLeft : "-15px"}}>
            <MDBCard className="mb-4">
              <MDBCardBody>
              <div class="container-fluid" style={{marginLeft : "110px"}}>
                <form class="d-flex w-75">
                    <input
                        type="Filter products"
                        class="form-control rounded"
                        placeholder="Filter products"
                        aria-label="Filter products"
                        aria-describedby="search-addon"
                    />
                    <span class="input-group-text border-0 ml-4" id="search-addon">
                    <i class="fas fa-search"></i>
                    </span>
                </form>
                </div>
                <MDBRow className="mt-4 ml-1">
                  <MDBCol sm="1">
                    <MDBCardText></MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>Product</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>Description</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>Category</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>Price</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>Quantity</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mt-4 ml-1 pt-4 border-top">
                  <MDBCol sm="1">
                    <MDBCardImage
                        src="https://product.hstatic.net/1000383583/product/weee_oops_den_002_29bc565a5a7441c88adf5c1b1f9d41ec_master.jpg"
                        alt="avatar"
                        className="rounded-circle ml-4"
                        style={{ width: "30px" }}
                        fluid
                    />
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>ao phong</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>ao phong form rong cho nam va nu</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>t-shirt</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>240000</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>200</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <button type="button" class="btn btn-dark btn-small" name="edit" disabled="" onClick={toggleShowEdit}>Edit</button>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mt-4 ml-1 pt-4 border-top">
                  <MDBCol sm="1">
                    <MDBCardImage
                        src="https://product.hstatic.net/1000383583/product/weee_oops_den_002_29bc565a5a7441c88adf5c1b1f9d41ec_master.jpg"
                        alt="avatar"
                        className="rounded-circle ml-4"
                        style={{ width: "30px" }}
                        fluid
                    />
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>ao phong</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>ao phong form rong cho nam va nu</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>t-shirt</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>240000</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>200</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <button type="button" class="btn btn-dark btn-small" name="edit" disabled="">Edit</button>
                  </MDBCol>
                </MDBRow>
                <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                    <MDBModalDialog style={{marginLeft : "25%"}}>
                    <MDBModalContent style={{ width : "160%", marginTop : "4rem"}}>
                        <MDBModalHeader>
                        <MDBModalTitle style={{marginLeft : "10px"}}>Add product</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShowAdd}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody style={{marginLeft : "10px"}}>
                          <MDBRow>
                            <MDBCol sm="2">
                                <MDBCardText>Title</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                placeholder="Short T-shirt"
                                onChange={() => {}}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Description</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBTextArea
                                placeholder=". . . . . . ."
                                onChange={() => {}}
                                style={{ height : "100px"}}
                              ></MDBTextArea>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Image</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <div class="file-upload-wrapper">
                                <input type="file" id="input-file-now" class="file-upload" />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Category</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                onChange={() => {}}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Price</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                onChange={() => {}}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Quantity</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                onChange={() => {}}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color='secondary' style={{height : "40px"}} onClick={toggleShowAdd}>
                            Close
                        </MDBBtn>
                        <MDBBtn style={{height : "40px"}} >Save</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
                <MDBModal show={isEdit} setShow={setIsEdit} tabIndex='-1'>
                    <MDBModalDialog style={{marginLeft : "25%"}}>
                    <MDBModalContent style={{ width : "160%", marginTop : "4rem"}}>
                        <MDBModalHeader>
                        <MDBModalTitle style={{marginLeft : "10px"}}>Edit product</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShowEdit}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody style={{marginLeft : "10px"}}>
                          <MDBRow>
                            <MDBCol sm="2">
                                <MDBCardText>Title</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                placeholder="Short T-shirt"
                                onChange={() => {}}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Description</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBTextArea
                                placeholder=". . . . . . ."
                                onChange={() => {}}
                                style={{ height : "100px"}}
                              ></MDBTextArea>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Image</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <div class="file-upload-wrapper">
                                <input type="file" id="input-file-now" class="file-upload" />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Category</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                onChange={() => {}}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Price</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                onChange={() => {}}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Quantity</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                onChange={() => {}}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color='secondary' style={{height : "40px"}} onClick={toggleShowEdit}>
                            Close
                        </MDBBtn>
                        <MDBBtn style={{height : "40px"}} >Save</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </div>
    )
}
export default Products