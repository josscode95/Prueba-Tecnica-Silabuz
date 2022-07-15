import { useState, useEffect } from "react";

const useLinked = ( url ) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setState(data))
      .catch(error => console.log(error))
  }, [url])
  
  return state;

}

export default useLinked;