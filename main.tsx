import * as React from "react";
import * as ReactDOM from "react-dom";
import Hoge from "./src/index";

const Main: React.FC = () => {
  return <Hoge />;
};

ReactDOM.render(<Main />, document.getElementById("root"));
