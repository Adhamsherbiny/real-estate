import React from "react";
import "../../../../styles/createPost.scss";
import AdminHeader from "@/app/components/AdminHeader";

export default function Createpost() {
  return (
    <div>
      <AdminHeader />
      <div className="page">
        <form action="" method="post">
          <h4>Create Post</h4>
          <div className="form-container">
            <div className="location-info">
              <div className="form-div">
                <label htmlFor="">Adress</label>
                <input type="text" />
              </div>
              <div className="form-div">
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
            </div>
            <div className="price-type">
              <div className="form-div">
                <label htmlFor="">Price</label>
                <input type="text" />
              </div>
              <div className="form-div">
                <label htmlFor="">Type</label>
                <input type="text" />
              </div>
            </div>
            <div className="description-info">
              <div className="form-div">
                <label htmlFor="">Floor</label>
                <input type="text" />
              </div>
              <div className="form-div">
                <label htmlFor="">Rooms</label>
                <input type="text" />
              </div>
              <div className="form-div">
                <label htmlFor="">Bathrooms</label>
                <input type="text" />
              </div>
              <div className="form-div">
                <label htmlFor="">Description</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
