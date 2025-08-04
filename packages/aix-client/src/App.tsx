import "./App.less";
import { createClassPrefix } from "@utils/classPrefix";

const cls = createClassPrefix("aix-trail");

const App = () => {
  return <div className={cls()}></div>;
};

export default App;
