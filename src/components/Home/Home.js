import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizLogo from "../QuizLogo/QuizLogo";

const Home = () => {
    const quizItem = useLoaderData();
    console.log(quizItem);
  return (
    <div>
        <p>Name: {quizItem.data.length}</p>
      <div className="bg-lime-500">
        <div className='px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <h2 className="text-white text-5xl font-bold">
            Start The Questionnaire Answer
          </h2>
          <p className="mt-5 text-white text-lg">
            A questionnaire is a research instrument that consists of a set of questions
            or other types of prompts that aims to collect information from a respondent.
            A research questionnaire is typically a mix of close-ended questions and
            open-ended questions.
          </p>
        </div>
      </div>
      {
        quizItem.data.map(qItem => <QuizLogo
        key={qItem.id}
        qItem={qItem}
        ></QuizLogo>)
      }
    </div>
  );
};

export default Home;
