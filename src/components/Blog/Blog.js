import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 px-5'>
            <h1 class="text-center">Question and answer</h1>
            <div className='mt-4'>
            <h4><span class="text-primary">Question-1:</span> How does React work?</h4>
            <p><span class="text-danger fw-bold">Answer:- </span>
            We generally use JavaScript along with HTML, CSS on the website. Now the browser creates a dom tree behind the scenes so that the user can interact with that dom. This browser process is called critical render path[].

            React creates another DOM similar to the DOM of this browser, which is called virtual DOM. Now this DOM looks exactly like the real DOM, but this virtual DOM is actually a JavaScript object. React makes it so that any element can be modified quickly and efficiently using JavaScript with this DOM.
            </p>
            </div>
            <div className='mt-4'>
            <h4><span class="text-primary">Question-2:</span> What is the difference between props and state?</h4>
            <p><span class="text-danger fw-bold">Answer:- </span>
            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.
            </p>
            </div>
            <div className='mt-4'>
            <h4><span class="text-primary">Question-3:</span> useEffect দিয়ে Api ডাটা লোড করা ছাড়া আর কি কি কাজ করা হয়?</h4>
            <p><span class="text-danger fw-bold">Answer:- </span>
            এই useEffectটিকে উপযোগী করার জন্য, আমাদের প্রয়োজন হবে: URL-এ id নামক একটি প্রপ পাস করতে আমাদের useEffect আপডেট করুন, একটি নির্ভরতা অ্যারে ব্যবহার করুন, যাতে আমরা শুধুমাত্র আইডি পরিবর্তনের সময় এই useEffectটি চালাতে পারি। আমাদের ডেটা সংরক্ষণ করতে useState হুক ব্যবহার করুন যাতে আমরা পরে এটি প্রদর্শন করতে পারি।
            </p>
            </div>
        </div>
    );
};

export default Blog;