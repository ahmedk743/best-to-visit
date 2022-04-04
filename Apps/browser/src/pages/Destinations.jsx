import React from "react";
import { useState, useEffect } from "react";
// import axios from 'axios';
import { destinationList } from "../assets/destinations";

const Destinations = () => {
  const [posts, setPosts] = useState([]);

  // const getPosts = async () => {
  //   try {
  //     const response = await axios.get(

  //      'http://localhost:8900/destinationList'
  //     );
  //     setPosts(response.data);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  // useEffect(() => {
  //   getPosts();

  // }, []);
  return (
    <div className="page-style">
      <h2>Destinations List</h2>
      {destinationList.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <div>
      <table className="tb">
        <ul className="album">
          <picList />
          <tr>
            <li>
              {" "}
              <p>Name: {post.NAME}</p>
            </li>
          </tr>
          <tr>
            <li>
              {" "}
              <p>Adress: {post.ADDRESS_FULL}</p>
            </li>
          </tr>
          <tr>
            <li>
              {" "}
              <p>Description:{post.ATTRACTION_DESC}</p>
            </li>
          </tr>
          <tr>
            <li>
              {" "}
              <p>Phone: {post.PHONE}</p>
            </li>
          </tr>
        </ul>
      </table>
    </div>
  );
};

export default Destinations;
