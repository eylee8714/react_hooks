export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    //컴포넌트가 mount 되었을때
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    // componentWillUnMount 일때 (eventListener를 정리한다.)
    // component가 mount 되지 않았을때 eventListener가 배치되지 않도록한다.
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []); // [] : componentDidMount 때 단 한번만 실행된다.
  return element;
};

// import React, { useEffect, useRef } from 'react';

// const useClick = (onClick) => {
//   const element = useRef();
//   useEffect(() => {
//     if (typeof onClick !== 'function') {
//       return;
//     }
//     //컴포넌트가 mount 되었을때
//     if (element.current) {
//       element.current.addEventListener('click', onClick);
//     }
//     // componentWillUnMount 일때 (eventListener를 정리한다.)
//     // component가 mount 되지 않았을때 eventListener가 배치되지 않도록한다.
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener('click', onClick);
//       }
//     };
//   }, []); // [] : componentDidMount 때 단 한번만 실행된다.
//   return element;
// };

// const App = () => {
//   const sayHello = () => console.log('say hello');
//   const title = useClick(sayHello);
//   return (
//     <>
//       <h1 ref={title}>Hi</h1>
//     </>
//   );
// };

// export default App;
