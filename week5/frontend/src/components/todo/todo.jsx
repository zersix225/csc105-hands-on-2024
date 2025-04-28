import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"


const TodoList = ({ title }) => {
  return (
    <Card className="w-full">
      <CardContent className='flex justify-between items-center'>
        <div className="flex space-x-2">
            <Checkbox />
            <CardTitle>{title}</CardTitle>
        </div>

        <div className="space-x-1">
            <Button className='bg-gray-500'>Edit</Button>
            <Button className='bg-red-500'>Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoList;
