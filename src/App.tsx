import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";

const App = () => {
  return (
    <div className="h-full min-h-svh">
      <div className="absolute h-svh w-full bg-black">
        {/*static background*/}
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="" element={} /> */}
          </Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;
