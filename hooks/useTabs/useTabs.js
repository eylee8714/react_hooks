const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    // allTabs 가 아닐때, 배열이 아닐때 return 한다 : 빠져나온다.
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};
