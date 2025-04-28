import { useState } from "react";
import TodoList from "../todo/todo";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input"


const Home = () => {
  const [isAdd, setAdd] = useState([]);
  const [input, setInput] = useState('')

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-2xl">
        <h1 className="text-center text-3xl my-4">Welcome to TODO List</h1>
        <div>
          <div className="flex space-x-2 mb-2">
            <Input 
              type="text" 
              placeholder="Type somthing..." 
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <Button
              onClick = {() => 
                setAdd([...isAdd, input],
                setInput('')
              )}
            >
              Add
            </Button>
          </div>

          {isAdd.map((item, index) => (
            <div key={index} className="mb-2">
              <TodoList title={item}/>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
