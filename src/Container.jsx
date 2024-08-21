import React from "react";
import "./App.css";


const Container = () => {
    const studentData =  [
        {
          id: 1,
          name: 'John Doe',
          age: 20,
          course: 'Computer Science',
        },
        {
          id: 2,
          name: 'Jane Smith',
          age: 22,
          course: 'Mathematics',
        },
        {
          id: 3,
          name: 'Michael Johnson',
          age: 21,
          course: 'Physics',
        },
        {
          id: 4,
          name: 'Emily Davis',
          age: 23,
          course: 'Chemistry',
        }
      ];
      
  
    return (
      <div className="container">
        <div className="header">
          <h1>Student Data</h1>
        </div>
        <div className="items_container">
          {studentData.map((data, ind) => {
           return <div key={ind} className="items">
              <h4>
                Name: <span>{data.name}</span>
              </h4>
              <h4>
                Age : <span>{data.age}</span>
              </h4>
              <h4>
                course : <span>{data.course}</span>
              </h4>
            </div>
          })}
        </div>
      </div>
    );
  };





export default Container;