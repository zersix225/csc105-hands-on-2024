import React, { Children } from "react";
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


const TodoList = ({ title, children }) => {
  return (
    <Card className="w-full">
      <CardContent className='flex justify-between items-center'>
        <div className="flex space-x-2">
            <Checkbox />
            <CardTitle>{title}</CardTitle>
        </div>

        <div className="space-x-1">
            {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoList;
