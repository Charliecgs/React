import React from "react";
import "./More.css";

const More = ({habilities, volunteer, languages}) => {
  return (
    <div>
      <div className="education card">
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h2>{item} </h2>
            </div>
          );
        })}
      </div>
      <div className="education card">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.name} </p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="education card">
            <div>
              <p>{languages.language} </p>
              <p>{languages.wrlevel} </p>
              <p>{languages.splevel} </p>
            </div>
      </div>
    </div>
  );
};

export default More;