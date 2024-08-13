'use client'
import React, { useEffect, useState } from 'react';
import { Container, List, Grid, Button, Box, Typography } from '@mui/material';
import FormAddTask from './FormAddTask';
import TodoItem from './ToDoItem';
import { Todo, toggleComplete, deleteTodo, addTodo } from '@/services/todoService';

export const ToDoList: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [showForm, setShowForm] = useState<Boolean>(false);

  const handleOpenApp = () => {
    const storedTasksJSON = localStorage.getItem('tasks');
    if (!storedTasksJSON) {
      const tasks = [
        { id: 1, text: 'Estudar React', status: 'incomplete' },
        { id: 2, text: 'Ler um livro', status: 'incomplete' },
        { id: 3, text: 'Fazer exercícios', status: 'incomplete' },
      ];
      const tasksJSON = JSON.stringify(tasks);
      setTodos(tasks);
      localStorage.setItem('tasks', tasksJSON);
    } else {
      const tasks = JSON.parse(storedTasksJSON);
      setTodos(tasks);
    }
  }

  useEffect(() => {
    handleOpenApp();
  }, [])

  return (
    <Container>
      <Grid container spacing={4} sx={{ my: 1 }}>
        <Grid item sm={12}>
          <Button
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Fechar Formulário' : 'Adicionar Tarefa'}
          </Button>
        </Grid>
        {showForm && (
          <Grid item sm={12}>
            <FormAddTask
              handleAddTask={addTodo}
              todos={todos}
              setTodos={setTodos}
            />
          </Grid>
        )}
      </Grid>
      <Grid container spacing={4} sx={{ my: 2 }}>
        <Grid item sm={12}>
          <Box
            sx={{ border: '1px solid #aaa', borderRadius: '10px', p: 2 }}
          >
            <Typography
              align='center'
              variant='h5'
              sx={{ my: 2 }}
            >
              Minhas Tarefas
            </Typography>
            <Container>
              <List>
                {todos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={() => toggleComplete(todos, todo.id, setTodos)}
                    onDelete={() => deleteTodo(todos, todo.id, setTodos)}
                  />
                ))}
              </List>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Container >
  );
};
