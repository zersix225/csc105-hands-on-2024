import { useEffect, useState } from "react";
import TodoList from "../todo/todo";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {DialogCloseButton} from "@/components/pop"

const Home = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    name: "",
    success: false,
  });
  const URL = "http://localhost:8000";

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${URL}/todos`);
      const newData = response.data.data;
      console.log(newData);
      setData(newData);
    } catch (error) {
      console.log("error");
    }
  };

  const createTodo = async (e) => {
    try {
      const response = await axios.post(`${URL}/todos`, input);
      fetchTodos();
      setInput({
        name: "",
        success: false,
      });
      console.log("Todo created:", response.data);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${URL}/todos/${id}`);
      console.log("Todo deleted:", id);
      setData(data.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const handleSave = (newData) => {
    console.log('rr',newData)
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-2xl">
        <h1 className="text-center text-3xl my-4">Welcome to TODO List</h1>
        <div>
          <div className="flex space-x-2 mb-2">
            <Input
              name="name"
              type="text"
              placeholder="Type somthing..."
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
              }}
              value={input.name}
            />
            <Button onClick={createTodo}>Add</Button>
          </div>

          {data.map((item, index) => (
            <div key={index} className="mb-2">
              <TodoList title={item.name}>
                <DialogCloseButton onSave={handleSave}/>
                {/* <Button className='bg-gray-500'
                  
                >
                  Edit
                </Button> */}

                <Button
                  className="bg-red-500"
                  onClick={() => deleteTodo(item.id)}
                >
                  Delete
                </Button>
              </TodoList>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
