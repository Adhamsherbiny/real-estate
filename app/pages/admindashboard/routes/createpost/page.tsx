/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import "../../../../styles/createPost.scss";
import AdminHeader from "@/app/components/AdminHeader";
import { useState } from "react";
import axios from "axios";

export default function Createpost() {
  const [adress, setAdress] = useState<any>();
  const [floor, setFloor] = useState<any>();
  const [phone, setPhone] = useState<any>();
  const [city, setCity] = useState<any>("Futures City");
  const [price, setPrice] = useState<any>();
  const [type, setType] = useState<any>("Sell");
  const [area, setArea] = useState<any>();
  const [rooms, setRooms] = useState<any>();
  const [bathrooms, setBathrooms] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [imageOne, setImageOne] = useState<any>();
  const [imageTwo, setImageTwo] = useState<any>();
  const [imageThree, setImageThree] = useState<any>();

  function post(e: { preventDefault: () => void }) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imageOne", imageOne);
    formData.append("imageTwo", imageTwo);
    formData.append("imageThree", imageThree);
    formData.append("adress", adress);
    formData.append("floor", floor);
    formData.append("phone", phone);
    formData.append("city", city);
    formData.append("price", price);
    formData.append("type", type);
    formData.append("area", area);
    formData.append("rooms", rooms);
    formData.append("description", description);
    formData.append("bathrooms", bathrooms);
    axios
      .post("http://localhost:5000/uploadpost", formData)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
                <input
                  type="text"
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>
              <div className="form-div">
                <label htmlFor="">Floor</label>
                <input
                  type="number"
                  onChange={(e) => setFloor(e.target.value)}
                />
              </div>
              <div className="form-div">
                <label htmlFor="">Phone</label>
                <input type="text" onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-div">
                <label htmlFor="">City</label>
                <select
                  className="select"
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="Futures City">Futures City</option>
                  <option value="Elrehab City">Elrehab City</option>
                  <option value="Elobour City">Elobour City</option>
                  <option value="Elsherouk City">Elsherouk City</option>
                  <option value="Emaar Mivida">Emaar Mivida</option>
                  <option value="Palm Hills">Palm Hills</option>
                  <option value="New Cairo">New Cairo</option>
                </select>
              </div>
            </div>
            <div className="price-type">
              <div className="form-div">
                <label htmlFor="">Price</label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="form-div">
                <label htmlFor="">Type</label>
                <select
                  className="select"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Sell">Sell</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
            </div>
            <div className="description-info">
              <div className="form-div">
                <label htmlFor="">Area</label>
                <input
                  type="number"
                  onChange={(e) => setArea(e.target.value)}
                />
              </div>
              <div className="form-div">
                <label htmlFor="">Rooms</label>
                <input
                  type="number"
                  onChange={(e) => setRooms(e.target.value)}
                />
              </div>
              <div className="form-div">
                <label htmlFor="">Bathrooms</label>
                <input
                  type="number"
                  onChange={(e) => setBathrooms(e.target.value)}
                />
              </div>
              <div className="form-div">
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="upload-image">
            <input
              type="file"
              name=""
              id=""
              className="input-file"
              onChange={(e) => {
                setImageOne(e.target.files![0]);
              }}
            />
            <input
              type="file"
              name=""
              id=""
              className="input-file"
              onChange={(e) => {
                setImageTwo(e.target.files![0]);
              }}
            />
            <input
              type="file"
              name=""
              id=""
              className="input-file"
              onChange={(e) => {
                setImageThree(e.target.files![0]);
              }}
            />
          </div>
          <input
            onClick={post}
            className="submit"
            type="submit"
            value="Create Post"
          />
        </form>
      </div>
    </div>
  );
}
