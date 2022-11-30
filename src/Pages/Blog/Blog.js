import React from "react";

const Blog = () => {
    return (
        <div className="border m-12">
            <h3 className="text-3xl font-bold">
                What are the different ways to manage a state in a React
                application?
            </h3>
            <p className="mb-10">
                React's useState is the best option for local state management.
                If you need a global state solution, the most popular ones are
                Redux, MobX, and the built-in Context API. Your choice will
                depend on the size of your project, your needs, and your
                engineers' expertise.
            </p>
            <h3 className="text-3xl font-bold">How does prototypical inheritance work?</h3>
            <p className="mb-10">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
            </p>
            <h3 className="text-3xl font-bold">What is a unit test? Why should we write unit tests?</h3>
            <p className="mb-10">
                Unit Testing is a testing method that tests an individual unit
                of software in isolation. Unit testing for React Apps means
                testing an individual React Component. Unit Testing is important
                for React Apps, as it helps in testing the individual
                functionality of React components.
            </p>
            <h3 className="text-3xl font-bold">React vs Angular vs Vue.</h3>
            <p className="mb-10">
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option.
            </p>
        </div>
    );
};

export default Blog;
