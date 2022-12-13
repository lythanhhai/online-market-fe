import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
} from "mdb-react-ui-kit";
import { getDistrict, getProfile, updateProfile } from "../../APIs/profile.api";
import { getLocalStorage, STORAGE } from "../../Utils/storage";
import axios from "axios";
import baseUrl from "../../APIs/config";

export default function Seller() {
  const [dataProfile, setDataProfile] = useState({
    name: "",
    address: "",
    gender: "",
    userId: JSON.parse(getLocalStorage(STORAGE.USER_DATA)).userId,
    file: null,
  });

  const handleRegisterToSeller = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("userId", dataProfile.userId);
    bodyFormData.append("name", dataProfile.name);
    bodyFormData.append("gender", dataProfile.gender);
    bodyFormData.append("address", dataProfile.address);
    bodyFormData.append("idCards", dataProfile.file);

    axios({
      method: "post",
      url: `${baseUrl}seller/register`,
      data: bodyFormData,
      headers: {
        Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section style={{ backgroundColor: "rgb(253, 253, 253)" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          {/* <MDBCol lg="4"></MDBCol> */}
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow display="flex">
                  <MDBCol lg="2">
                    <MDBCardText>Full Name: </MDBCardText>
                  </MDBCol>
                  <MDBCol lg="6">
                    <MDBInput
                      onChange={(e) => {
                        setDataProfile({
                          ...dataProfile,
                          name: e.target.value,
                        });
                      }}
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow>
                  <MDBCol lg="2">
                    <MDBCardText>Address: </MDBCardText>
                  </MDBCol>
                  <MDBCol lg="6">
                    <MDBInput
                      onChange={(e) => {
                        setDataProfile({
                          ...dataProfile,
                          address: e.target.value,
                        });
                      }}
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol lg="2">
                    <MDBCardText>Gender: </MDBCardText>
                  </MDBCol>
                  <MDBCol lg="6">
                    <MDBInput
                      onChange={(e) => {
                        setDataProfile({
                          ...dataProfile,
                          gender: e.target.value,
                        });
                      }}
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol lg="2">
                    <MDBCardText>File ID Card: </MDBCardText>
                  </MDBCol>
                  <MDBCol lg="6">
                    <MDBInput
                      type="file"
                      onChange={(e) => {
                        setDataProfile({
                          ...dataProfile,
                          file: e.target.files[0],
                        });
                      }}
                    ></MDBInput>
                  </MDBCol>
                </MDBRow>
                <hr></hr>
                <div class="text-center cart-buttons mt-3">
                  <a
                    // href="cart"
                    class="btn btn-small btn-main btn-inline-block"
                    onClick={() => {
                      handleRegisterToSeller();
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Register
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
