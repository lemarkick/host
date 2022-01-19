import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MFE1_Button = React.lazy(() => import("MFE1/Button"));

const App = () => {
  const [account, setAccount] = useState("");

  return (
    <div>
      請輸入身分證字號：
      <input
        type="text"
        onChange={(e) => {
          setAccount(e.target.value);
        }}
      />
      <React.Suspense fallback="Loading Button">
        <MFE1_Button value={account} />
      </React.Suspense>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
