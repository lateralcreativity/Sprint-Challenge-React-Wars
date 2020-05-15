# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React helps massively with cutting down time by using JSX which looks like HTML but is really javascript. This removes wasting time doing things such as document.querySelector('example').appendChild('example') and instead allows you to write what looks like normal HTML while also being able to apply javascript logic to it since its jsx.

1. Describe component state.

State is what makes your page dynamic, everytime state is changed it will cause a rerender. So for example you have a state set to 0 and modify it to be the value 1 because it was changed the dom will rerender and display the page with the new value added into state.

1. Describe props.

I like to think of props like variables in functions. When you first write a variable it is undefined but we can assign a value to it so it can be used in your function. Same thing with variables you just setup a name for them and pass a value for your component to use in their function.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A change outside of the scope of the current function being executed is known as a side effect. An example is getting data from an api to pass to your components. Using the useEffect hook allows you to manage how they are used.