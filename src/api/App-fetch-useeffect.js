import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null); // Null is initial value
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  //
  //--Default Behaviour
  //
  //We pass the function (document.title) and it gets called
  // every time the component has finished rendering.

  useEffect(async () => {
    // Update the document title using the browser API
    // Tab title
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []); //With an empty array it will only get rendered one time.

  return { data, loading };
};

export default () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch("https://api.randomuser.me/");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      {loading ? <div>Loading...</div> : <div>{data.name.first}</div>}
    </div>
  );
};
