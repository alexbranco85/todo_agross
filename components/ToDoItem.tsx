import React from 'react';
import { ListItem, Checkbox, IconButton, Box, Tooltip, ListItemText, Typography } from '@mui/material';
import { Check, Close, Delete } from '@mui/icons-material';
import { Todo } from '@/services/todoService';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <Box sx={{ border: '1px solid #aaa', borderRadius: '30px', mb: 1 }}>
      <ListItem
        key={todo.id}
        secondaryAction={
          <>
            <IconButton
              sx={{ backgroundColor: todo.status === 'incomplete' ? '#198754' : '#a80000', mr: 1, color: '#fff' }}
              size="small"
              edge="end"
              aria-label="complete"
              onClick={() => onToggleComplete(todo.id)}
            >
              {todo.status === 'incomplete' ? (
                <Tooltip title="Concluir Tarefa">
                  <Check />
                </Tooltip>
              ) : (
                <Tooltip title="Reabrir Tarefa">
                  <Close />
                </Tooltip>
              )}
            </IconButton>
            <Tooltip title="Deletar Tarefa">
              <IconButton
                sx={{ backgroundColor: '#a80000' }}
                size="small"
                edge="end"
                aria-label="delete"
                onClick={() => onDelete(todo.id)}
              >
                <Delete sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
          </>
        }
      >
        <Checkbox
          edge="start"
          checked={todo.status === 'completed'}
          tabIndex={-1}
          disableRipple
          onChange={() => onToggleComplete(todo.id)}
        />
        <Typography
          sx={{ textDecoration: todo.status == 'completed' ? "line-through" : "" }}
        >
          {todo.text}
        </Typography>
      </ListItem>
    </Box>
  );
};

export default TodoItem;