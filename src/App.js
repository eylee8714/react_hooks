import React, { useEffect, useRef, useState } from 'react';
import useAxios from './useAxios';

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });

  console.log(
    `loading : ${loading},\n data : ${JSON.stringify(data)}, \nerror:${error}`
  );
  return (
    <>
      <h1>{data && data.status}</h1>
      <h2>{loading && 'Loading'}</h2>
      <button onClick={refetch}>Refetch</button>
    </>
  );
};

export default App;
