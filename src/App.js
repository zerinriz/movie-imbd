import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  var axios = require("axios").default;
  const [requestToken, setRequestToken] = useState(false);

  useEffect(() => {
    axios
    .get(
      "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=05198e442625199bcbb16f52a684f1dc"
    )
    .then(function (response) {
      setRequestToken(response.data.guest_session_id);
    })
    .catch(function (error) {
      console.error(error);
    });
  }, [axios]);
 

  return (
    <div className="App">
      <MainPage requestToken={requestToken} />
    </div>
  );
}

export default App;
