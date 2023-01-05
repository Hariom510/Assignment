import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

function Student({roll, setRoll, student, setStudent, data, setData}) {
    const rollChange = (event)=>{
        setRoll(event.target.value);
    }
    const studentChange = (event)=>{
        setStudent(event.target.value);
    }
    const formSubmit = (event)=>{
        event.preventDefault();
        const currTime = new Date().toLocaleTimeString();
        setData([...data, {id: uuidv4(), roll: roll, student: student, checkIn: currTime, completed: false}]);
        setRoll("");
        setStudent("");
    }
  return (
    <AddStudent>
        <form onSubmit={formSubmit}>
            <input required type="number" placeholder="Enter Roll" value={roll} onChange={rollChange} /> &nbsp; 
            <input required type="text" placeholder="Enter Student Name" value={student} onChange={studentChange} /> &nbsp;
            <button type="submit">
            <i class="fa-solid fa-plus"></i>
            </button>
        </form>
    </AddStudent>
  )
}

export default Student

const AddStudent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media only screen and (max-width: 850px) {
            text-align: center;
            margin: 0 auto;   
    }
    input{
        margin: 30px auto;
        font-size: 1.6rem;
        border-radius: 5px;
        border: 1px solid black;
        @media only screen and (max-width: 850px) {
           display: flex;
           flex-direction: column; 
        }
    }
    button{
        border-radius: 10%;
        border: 2px solid;
    }
    i{
        font-size: 1.6rem;
        cursor: pointer;
    }
`