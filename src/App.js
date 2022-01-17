import {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import TableData from "./components/TableData";
import './App.css';

function App() {

  const [title, setTitle] = useState([])
  const [input, setInput] = useState("")

  const handleInput = async (e) => {
     await setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        title : input,
        status : 0
      }
      await setTitle([...title, data])
      setInput("")
    }

  const handleUpdate = (index) => {
      const temp = [...title]
      if( temp[index].status === 1) {
        temp[index].status = 0
      } else {
        temp[index].status = 1
      }
     
      setTitle([...temp])
      console.log(title)
  }

  const handleDelete = (index) => {
      const temp = [...title]
      temp.splice(index, 1)
      setTitle(temp)
      console.log(title)
  }
    
    useEffect(() => {
    console.log(title)
  }, [title])


  return (
    <div className="App">
        <Navbar/>
      <div className="container">
          <InputField title={input} handleInput={handleInput} handleSubmit={handleSubmit}/>
          <TableData handleUpdate={handleUpdate} handleDelete={handleDelete} data={title}/>
      </div>
    </div>
  );
}

export default App;
