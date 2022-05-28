import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import User from './components/User';
import Users from './components/Users';

const name: string = "Arif";
const age: number = 55;
const isAvailable: boolean = true;

const users: string[] = [
  'Binu', 'Arif', 'Shahin'
]
const ages: number[] = [
  12, 12, 15
]

interface Student {
  name: string,
  age: number,
  job?: string | boolean;
}


const student: Student = {
  name: "Arif",
  age: 14,
  job: true
}

const user = (name: string, age: number): void => {
  console.log(name, age);

}


function App() {
  return (
    <div className="App">
      <Counter />
      <Users />
    </div>
  );
}

export default App;
