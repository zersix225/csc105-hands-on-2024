import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function DialogCloseButton({ onSave }) {
    const [newData, setNewData] = useState('')
    const handleClick = () => {
        onSave(newData); 
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-gray-500">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Todo</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Input 
                            placeholder="Enter new todo" 
                            onChange={(e) => setNewData(e.target.value)}
                            value={newData}
                        />
                    </div>
                    <Button type="submit" onClick={handleClick}>Save</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

