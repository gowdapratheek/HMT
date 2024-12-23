import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        {/* <div className="pt-20"> */}
        <Outlet />
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
