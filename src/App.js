import { useState, useEffect } from "react";
import Student from "./components/Student";
import DisplayData from "./components/DisplayData";

function App() {
  const initialState = JSON.parse(localStorage.getItem("data")) || [];
  const [roll, setRoll] = useState("");
  const [student, setStudent] = useState("");
  const [data, setData] = useState(initialState);
 
  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);
  return (
    <div className="App">
      <Student
      roll={roll}
      setRoll={setRoll}
      student={student}
      setStudent={setStudent}
      data={data}
      setData={setData}
      />
      <br />
      <DisplayData
      data={data}
      setData={setData}
      />
    </div>
  );
}

export default App;
