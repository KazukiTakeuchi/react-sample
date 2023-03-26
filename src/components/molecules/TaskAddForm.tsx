import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

type TaskAddFormProps = {
  onAdd: (taskName: string) => void;
}

export const TaskAddForm: React.FC<TaskAddFormProps> = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAdd(taskName);
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>Task Name</Label>
      <Input
        value={taskName}
        onChange={setTaskName}
        placeholder="Enter task name"
      />
      <Button action="add">Add Task</Button>
    </form>
  );
};
