import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizCard = () => {
    const qItem = useLoaderData();
    const tost = () => {
        toast(`${qItem.data.questions[0].correctAnswer}`);
      }
    return (
        <div>
            <div>
        <div className="">
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
      </div>
        </div>
    );
};

export default QuizCard;