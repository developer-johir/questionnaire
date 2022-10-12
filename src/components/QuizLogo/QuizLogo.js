import React from "react";
import { Link } from "react-router-dom";

const QuizLogo = ({qItem}) => {
  return (
    <div>
      <div>
        <div className="card w-72 bg-gray-800 shadow-xl">
          <figure>
            <img src={qItem.logo} alt="Shoes" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">{qItem.name}</h2>
            <p className="w-16">Total: {qItem.total}</p>
            <div className="card-actions justify-end">
              <Link to={`/qItem/${qItem.id}`}>
                <button className="btn btn-primary">Quiz start</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLogo;
