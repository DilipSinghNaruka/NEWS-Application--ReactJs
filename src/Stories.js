import React, { useEffect, useState } from "react";

import { useGlobalContext } from "./context";
import "./css/Stories.css";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  }

  return (
    <div>
      <h2 className="heading">My Tech News Website</h2>
      {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments } = curPost;
        return (
          <div className="card_main" key={objectID}>
            <div className="card">
              <h2>{title}</h2>
              <p>
                By <span> {author} </span> | <span>{num_comments}</span>{" "}
                comments
              </p>
              <div className="cardButton">
                <a href={url} target="blank">
                  Read More
                </a>
                <a  onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
