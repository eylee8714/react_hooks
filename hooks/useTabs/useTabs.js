const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    // allTabs 가 아닐때, 배열이 아닐때 return 한다 : 빠져나온다.
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

// import React, { useState } from 'react';

// const useTabs = (initialTab, allTabs) => {
//   const [currentIndex, setCurrentIndex] = useState(initialTab);
//   if (!allTabs || !Array.isArray(allTabs)) {
//     // allTabs 가 아닐때, 배열이 아닐때 return 한다 : 빠져나온다.
//     return;
//   }
//   return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
// };

// const content = [
//   {
//     tab: 'Section 1',
//     content: "I'm the content of the Section 1",
//   },
//   {
//     tab: 'Section 2',
//     content: "I'm the content of the Section 2",
//   },
// ];

// const App = () => {
//   const { currentItem, changeItem } = useTabs(0, content); // useTabs(0) 이면 content(0) 를 얻는다.
//   return (
//     <>
//       {content.map((section, index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>{currentItem.content}</div>
//     </>
//   );
// };

// export default App;
