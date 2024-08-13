import { useRef } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

interface FormAddTaskProps {
  handleAddTask: Function;
  todos: any;
  setTodos: Function;
}

const FormAddTask: React.FC<FormAddTaskProps> = ({ handleAddTask, todos, setTodos }) => {

  const taskNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const taskName = taskNameRef.current?.value;
    if (taskName) {
      handleAddTask(todos, taskName, setTodos);
    }
  };

  return (
    <Box sx={{ border: '1px solid #aaa', borderRadius: '10px', p: 2 }}>
      <Typography
        variant="h5"
        align='center'
        sx={{ my: 2 }}
      >Adicionar Tarefa
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          label="Nome da Tarefa"
          inputRef={taskNameRef}
          variant="outlined"
          fullWidth
          inputProps={{
            style: { textAlign: 'center' },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          sx={{ mb: 1, mt: 2 }}
        >
          Adicionar
        </Button>
      </form>
    </Box>
  );
};

export default FormAddTask;
