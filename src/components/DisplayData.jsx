import React from "react";
import styled from "styled-components";

function DisplayData({data, setData}) {
  var count =0;
  return (
    <div>
        { data && data.map((val, index, arr)=>{
            count++;
            console.log("id is: "+ val.id + " roll is: "+ val.roll +" checkin is: "+ val.checkIn);
            return(
                <Data>
                <ol class="my-row">
                <li key={val.id}>
                    {(index+1)<10 ? <span>0{index + 1}.</span> : <span>{index + 1}.</span>}
                    <input
                     type="text"
                     value={val.roll}
                     onChange={(event) => event.preventDefault()}
                      /> 
                      <input
                     type="text"
                     value={val.student}
                     onChange={(e) => e.preventDefault()}
                      />
                      <input
                     type="text"
                     value={val.checkIn}
                     onChange={(e) => e.preventDefault()}
                      />
                </li>
                </ol>
                </Data>
            )
            })
        }
        <h3 style={{margin: "24px"}}>Total number of students: {count}</h3>
    </div>
  )
}

export default DisplayData

const Data = styled.div`
   @media only screen and (max-width: 1215px) {
            display: inline-block;
    }
    input{
        font-size: 1.5rem;
        border: 1px solid gray;
        border-radius: 2px;
        @media only screen and (max-width: 1215px) {
            display: flex;
        }
    }
    ol{
        width: 80%;
        margin: 10px;
    }
    li {
        list-style: none;
        font-size: 1.5rem;
        margin-left: 0;
    }
    span{
        margin-right: 2rem;
    }
`