import React from "react";

const QuizLogo = ({qItem}) => {
  return (
    <div>
      <div>
        <div className="card w-72 bg-base-100 shadow-xl shadow-black">
          <figure>
            <img src={qItem.logo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{qItem.name}</h2>
            <p className="w-16">Total: {qItem.total}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Quiz start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLogo;
