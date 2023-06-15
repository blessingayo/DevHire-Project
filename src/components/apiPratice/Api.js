import axios from "axios";
import { useState, useEffect } from "react";

const Api = () => {
  const [callApi, setCallApi] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);
        setCallApi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {callApi.map((apiCall) => (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          key={apiCall.id}
        >
          <p>{apiCall.title}</p>
          <img style={{ width: "20%" }} src={apiCall.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Api;
