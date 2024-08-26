import "./App.css";
import Home from "./components/Home";
import CustomerFeedbackFormk from "./components/CustomerFeedbackFormk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <Home />

      <CustomerFeedbackFormk />
    </>
  );
}

export default App;
