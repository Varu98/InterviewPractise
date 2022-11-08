# React Interview Theory
### What is React ?
- Javascript Framework Library.
- efficient, flexible, open-source.
- Jordan Walke, Facebook.
- single page applications
- building complex and reusable user interface
- components of mobile and web apps as it follows the component-based approach
### What do you mean by React Hooks ?
- enables to use the state.
- functions that connect React State with the lifecycle features from the function components.
### What is the scope of react ?
- considered to be the fastest growing Javascript framework among all.
- reusable components.
### Advantages of React ?
- use of virtual DOM to improve efficiency.
    1. Virtual DOM virtual representation of real dom. (Document Object Model)
    2. Creating virtual DOM is much faster than rendering the UI inside the browser. hence efficiency ++.
- SEO friendly
- Reusable Components
- Huge ecosystem of libraries to choose from.
### Limitations of React ?
- not a full blown framework but a library
- Numerous components in React
- difficult for beginner programmers to understand React
- coding can become difficult at times due to the use of inline templating and jsx
### What is Usestate in React ?
- built in React Hook that allows having state variables in functional components.
- used when DOM has something that is dynamically manipulating / controlling
```javascript
const [count, setCounter] = useState(0);

const setCount = () => {
   setCounter(count + 1);
}
```

