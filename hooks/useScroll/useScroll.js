export const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    // console.log('y', window.scrollY, 'x', window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll); // event 를 추가했으면 같은 이름으로 지워줘야한다.
  }, []);
  return state;
};

//  import React, { useEffect, useState } from 'react';

// const useScroll = () => {
//   const [state, setState] = useState({ x: 0, y: 0 });
//   const onScroll = () => {
//     // console.log('y', window.scrollY, 'x', window.scrollX);
//     setState({ y: window.scrollY, x: window.scrollX });
//   };
//   useEffect(() => {
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll); // event 를 추가했으면 같은 이름으로 지워줘야한다.
//   }, []);
//   return state;
// };

// const App = () => {
//   const { y } = useScroll();
//   return (
//     <div style={{ height: '1000vh' }}>
//       <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>Hi</h1>
//     </div>
//   );
// };

// export default App;
