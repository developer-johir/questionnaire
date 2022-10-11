import React from "react";

const QuizLogo = ({ qItem }) => {
  return (
    <div className="px-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 justify-items-center py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img src={qItem.logo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{qItem.name}</h2>
            <p>Total: {qItem.total}</p>
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
