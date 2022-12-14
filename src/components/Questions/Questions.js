import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

const Questions = () => {
  const qItem = useLoaderData();
  console.log(qItem.data);
  return (
    <div className="my-14">
      <h2 className="text-3xl">
        question of: <i className=" font-bold text-orange-500">{qItem.data.name}</i>{" "}
        <span>({qItem.data.total})</span>
      </h2>

      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <QuizCard></QuizCard>
      </div>

      {/* <div>
        <div className="px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="card w-96 bg-gray-800 shadow-xl m-auto mt-8">
            <div className="card-body">

              <div className="card-actions justify-end">
              <button onClick={tost}>
              <EyeIcon className="h-6 w-6 text-blue-500"/>
              </button>
              <ToastContainer />
              </div>

              <p className="text-white text-left text-xl mt-7">
                <span className="text-yellow-500">Question:</span>{" "}
                {qItem.data.questions[0].question}
              </p>

              <div className="form-control">
                <label className="label cursor-pointer justify-start bg-white rounded-md mt-5">
                  <input type="radio" name="radio-5" className="radio" />
                  <span className="label-text text-black ml-4">
                    {" "}
                    {qItem.data.questions[0].options[0]}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start bg-white rounded-md mt-3">
                  <input type="radio" name="radio-5" className="radio" />
                  <span className="label-text text-black ml-4">
                    {" "}
                    {qItem.data.questions[0].options[1]}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start bg-white rounded-md mt-3">
                  <input type="radio" name="radio-5" className="radio" />
                  <span className="label-text text-black ml-4">
                    {" "}
                    {qItem.data.questions[0].options[2]}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer justify-start bg-white rounded-md mt-3">
                  <input type="radio" name="radio-5" className="radio" />
                  <span className="label-text text-black ml-4">
                    {" "}
                    {qItem.data.questions[0].options[3]}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Questions;
