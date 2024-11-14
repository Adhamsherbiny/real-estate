/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @typescript-eslint/no-unused-expressions */
import AdminHeader from "@/app/components/AdminHeader";
import AdminPostWidget from "@/app/components/AdminPostWidget";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminShowAllPost() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://realestate-server-one.vercel.app/posts")
      .then((response) => {
        setData(response.data.respon);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <AdminHeader />
      {data.map((post: any) => (
        <AdminPostWidget
          id={post.id}
          adress={`Adress: ${post.adress}`}
          floor={`Floor Number: ${post.floor}`}
          city={post.city}
          key={post.id}
          pic={post.imageOne}
          price={post.price}
          rooms={post.rooms}
          bathrooms={post.bathrooms}
          area={post.area}
          type={post.type}
        />
      ))}
    </div>
  );
}
