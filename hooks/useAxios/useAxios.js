// [src > useAxios.js]
import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

//basicUrl, header 설정할수있는  axiosInstanse를 얻는다. 얻지못하면 defaultAxios를 기본값으로한다.
const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };
  useEffect(() => {
    if (!opts.url) {
      return; // url은 항상 필요하다.
    }
    axiosInstance(opts)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;

// [src > App.js]

// import React, { useEffect, useRef, useState } from 'react';
// import useAxios from './useAxios';

// const App = () => {
//   const { loading, data, error, refetch } = useAxios({
//     url: 'https://yts.mx/api/v2/list_movies.json',
//   });

//   console.log(
//     `loading : ${loading},\n data : ${JSON.stringify(data)}, \nerror:${error}`
//   );
//   return (
//     <>
//       <h1>{data && data.status}</h1>
//       <h2>{loading && 'Loading'}</h2>
//       <button onClick={refetch}>Refetch</button>
//     </>
//   );
// };

// export default App;
