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
  import React, { useState , useEffect} from 'react';

  import {
    getAllCategory,
    getProductByShop,
    apiCreateProduct,
    apiUpdateProduct
  } from "../../../APIs/product.api";

function Products() {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShowAdd = () => setBasicModal(!basicModal);
    const [isEdit, setIsEdit] = useState(false);
    const toggleShowEdit = () => setIsEdit(!isEdit);

    useEffect(() => {
      getAllCategory(setListCategory);
      getProductByShop(setListProduct);
    }, []);

    const [listCategory, setListCategory] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [file, setFile] = useState([]);
    const [data, setData] = useState({
      idCategory: '',
      name: '',
      price: '',
      description: '',
      quantity: '',
    });

    const [type, setType] = useState({
      id: '',
      name: '',
      size: '',
      color: '',
    });

    const [dataUpdate, setDataUpdate] = useState({
      idCategory: '',
      idProduct: '',
      name: '',
      price: '',
      description: '',
      quantity: '',
    });

    const [typeUpdate, setTypeUpdate] = useState({
      id: '',
      name: '',
      size: '',
      color: '',
    });

    const [chooseImg, setChooseImg] = useState(false);
    const onImageChange = (e) => {
        setFile(e.target.files[0])
        setChooseImg(true)
    }

    const handleAdd = () => {
      const form_data = new FormData();
      form_data.append(
        "createProductRequest",
        new Blob([JSON.stringify(data)], {type: 'application/json'})
      );
  
      form_data.append(
        "listTypeRequests",new Blob([JSON.stringify(type)],{type: 'application/json'})
      )  
      form_data.append("listImg", file, {type: 'image/jpeg'})

      apiCreateProduct(form_data)
    }

    const handleUpdate = () => {
      const form_data = new FormData();
      form_data.append(
        "updateProductRequest",
        new Blob([JSON.stringify(dataUpdate)], {type: 'application/json'})
      );
  
      form_data.append(
        "listTypeRequests",new Blob([JSON.stringify(typeUpdate)],{type: 'application/json'})
      )  
      if(chooseImg){
        form_data.append("listImg", file, {type: 'image/jpeg'})
      }
    
      apiUpdateProduct(form_data)
    }

    const elemCategory = listCategory.map((item, index) => {
      return (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      );
    });

    const size = [{"name":"L"},{"name":"XL"},{"name":"M"},{"name":"S"},{"name":"XS"}];
    const elemTypeSize = size.map((item, index) => {
      return (
        <option value={item.name} key={item.id}>
          {item.name}
        </option>
      );
    });
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
                  <MDBCol sm="2">
                    <MDBCardText>Product</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>Description</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>Category</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="2">
                    <MDBCardText>Type</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>Price</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>Quantity</MDBCardText>
                  </MDBCol>
                </MDBRow>
                {listProduct.map((item, index) => (
                <MDBRow className="mt-4 ml-1 pt-4 border-top">
                  <MDBCol sm="1">
                    <MDBCardImage
                        src={`https://res.cloudinary.com/dpnhk5kup/image/upload/${item.urlImgList[0].url}`}
                        alt="avatar"
                        className=" ml-4"
                        style={{ width: "50px" }}
                        fluid
                    />
                  </MDBCol>
                  <MDBCol sm="2">
                    <MDBCardText>{item.productResponse.name}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCardText>{item.productResponse.description}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>{item.productResponse.category.name}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="2">
                    <MDBCardText>{item.typeList[0].name} - {item.typeList[0].size} -{item.typeList[0].color} </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>{item.productResponse.price}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <MDBCardText>{item.productResponse.quantity}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="1">
                    <button type="button" class="btn btn-dark btn-small" name="edit" disabled=""
                     onClick={() => {
                      toggleShowEdit();
                      setDataUpdate({
                        ...dataUpdate,
                        idCategory:item.productResponse.category.id,
                        idProduct : item.productResponse.id,
                        name: item.productResponse.name,
                        price:item.productResponse.price,
                        description:item.productResponse.description,
                        quantity: item.productResponse.quantity,
                      });
                      setTypeUpdate({
                        id : item.typeList[0].id,
                        name : item.typeList[0].name,
                        size: item.typeList[0].size,
                        color: item.typeList[0].color
                      })
                    }}>
                    Edit</button>
                  </MDBCol>
                </MDBRow>
                ))}
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
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    name: e.target.value,
                                  })
                                }}
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
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    description: e.target.value,
                                  })
                                }}
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
                                <input type="file" multiple="multiple" onChange={(e) => onImageChange(e)}/>
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Category</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                            <form class="ordering " method="get">
                              <select
                                name="orderby"
                                class="orderby form-control"
                                aria-label="Shop order"
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    idCategory: e.target.value,
                                  })
                                }}
                              >
                                <option value="0" selected="selected">
                                  All Category
                                </option>
                                {elemCategory}
                              </select>
                              <input type="hidden" name="paged" value="1" />
                            </form>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Type</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="3" className="d-block">
                              <MDBCardText>name</MDBCardText>
                              <MDBInput
                                onChange={(e) => {
                                  setType({
                                    ...type,
                                    name: e.target.value,
                                  })
                                }}
                              ></MDBInput>
                            </MDBCol>
                            <MDBCol sm="3" className="d-block">
                              <MDBCardText>size</MDBCardText>
                              <form class="ordering " method="get">
                              <select
                                name="orderby"
                                class="orderby form-control"
                                aria-label="Shop order"
                                onChange={(e) => {
                                  setType({
                                    ...type,
                                    size: e.target.value,
                                  })
                                }}
                              >
                                {elemTypeSize}
                              </select>
                              <input type="hidden" name="paged" value="1" />
                            </form>
                            </MDBCol>
                            <MDBCol sm="3" className="d-block">
                              <MDBCardText>color</MDBCardText>
                              <MDBInput
                                onChange={(e) => {
                                  setType({
                                    ...type,
                                    color: e.target.value,
                                  })
                                }}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Price</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                value={data.price.replace(/\D/,'')}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    price: e.target.value,
                                  })
                                }}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Quantity</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                value={data.quantity.replace(/\D/,'')}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    quantity: e.target.value,
                                  })
                                }}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color='secondary' style={{height : "40px"}} onClick={toggleShowAdd}>
                            Close
                        </MDBBtn>
                        <MDBBtn style={{height : "40px"}} onClick={() => {handleAdd()}} >Save</MDBBtn>
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
                                value={dataUpdate.name}
                                onChange={(e) => {
                                  setDataUpdate({
                                    ...dataUpdate,
                                    name: e.target.value,
                                  })
                                }}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Description</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBTextArea
                                value={dataUpdate.description}
                                onChange={(e) => {
                                  setDataUpdate({
                                    ...dataUpdate,
                                    description: e.target.value,
                                  })
                                }}
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
                                <input type="file" id="input-file-now" class="file-upload" onChange={(e) => onImageChange(e)} />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Category</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                            <form class="ordering " method="get">
                              <select
                                name="orderby"
                                class="orderby form-control"
                                aria-label="Shop order"
                                value={dataUpdate.idCategory}
                                onChange={(e) => {
                                  setDataUpdate({
                                    ...dataUpdate,
                                    idCategory: e.target.value,
                                  })
                                }}
                              >
                                <option value="0" selected="selected">
                                  All Category
                                </option>
                                {elemCategory}
                              </select>
                              <input type="hidden" name="paged" value="1" />
                            </form>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Type</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="3" className="d-block">
                              <MDBCardText>name</MDBCardText>
                              <MDBInput
                                value={`${typeUpdate.name ? typeUpdate.name : ''}`}
                                onChange={(e) => {
                                  setTypeUpdate({
                                    ...typeUpdate,
                                    name: e.target.value,
                                  })
                                }}
                              ></MDBInput>
                            </MDBCol>
                            <MDBCol sm="3" className="d-block">
                              <MDBCardText>size</MDBCardText>
                              <form class="ordering " method="get">
                              <select
                                name="orderby"
                                class="orderby form-control"
                                aria-label="Shop order"
                                value={`${typeUpdate.size ? typeUpdate.size : ''}`}
                                onChange={(e) => {
                                  setTypeUpdate({
                                    ...typeUpdate,
                                    size: e.target.value,
                                  })
                                }}
                              >
                                {elemTypeSize}
                              </select>
                              <input type="hidden" name="paged" value="1" />
                            </form>
                            </MDBCol>
                            <MDBCol sm="3" className="d-block">
                              <MDBCardText>color</MDBCardText>
                              <MDBInput
                                value={`${typeUpdate.color ? typeUpdate.color : ''}`}
                                onChange={(e) => {
                                  setTypeUpdate({
                                    ...typeUpdate,
                                    color: e.target.value,
                                  })
                                }}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Price</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                               value={dataUpdate.price}
                               onChange={(e) => {
                                 setDataUpdate({
                                   ...dataUpdate,
                                   price: e.target.value,
                                 })
                               }}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="mt-4">
                            <MDBCol sm="2">
                                <MDBCardText>Quantity</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="10">
                              <MDBInput
                                value={dataUpdate.quantity}
                                onChange={(e) => {
                                  setDataUpdate({
                                    ...dataUpdate,
                                    quantity: e.target.value,
                                  })
                                }}
                              ></MDBInput>
                            </MDBCol>
                          </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn color='secondary' style={{height : "40px"}} onClick={toggleShowEdit}>
                            Close
                        </MDBBtn>
                        <MDBBtn style={{height : "40px"}} onClick={() => {handleUpdate()}}>Save</MDBBtn>
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