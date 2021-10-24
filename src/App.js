import React, { useState, useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  //console.log("앱 실행순서 확인하기 >>> 1");
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => {
    console.log("onSelect 콜백함수 호출", category);
    setCategory(category);
  }, []);
  return (
    <>
      {/* {console.log("앱 실행순서 확인하기 >>> 2")} */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
