import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-20 m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 class="text-center text-4xl">Question and answer</h1>
      <div className="mt-6">
        <h4 className="text-xl">
          <span class="text-primary">Question-1:</span> What is React Router and what does
          it do with it?
        </h4>
        <p>
          <span class="text-yellow-400">Answer:- </span>
          React Router is a standard library for routing in React. It enables the
          navigation among views of various components in a React Application, allows
          changing the browser URL, and keeps the UI in sync with the URL.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span class="text-primary">Question-2:</span> How does the Context API work?
        </h4>
        <p>
          <span class="text-yellow-400">Answer:- </span>
          The React Context API is a way for a React app to effectively produce global
          variables that can be passed around. This is the alternative to "prop drilling"
          or moving props from grandparent to child to parent, and so on. Context is also
          touted as an easier, lighter approach to state management using Redux.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="text-xl">
          <span class="text-primary">Question-3:</span> what is the use ref hook?
        </h4>
        <p>
          <span class="text-yellow-400">Answer:- </span>
          The useRef Hook allows you to persist values between renders. It can be used to
          store a mutable value that does not cause a re-render when updated. It can be
          used to access a DOM element directly. The useRef returns a mutable ref object.
          This object has a property called .current. The value is persisted in the
          refContainer.current property. These values are accessed from the current
          property of the returned object. The .current property could be initialised to
          the passed argument initialValue e.g. useRef(initialValue). The object can
          persist a value for a full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
