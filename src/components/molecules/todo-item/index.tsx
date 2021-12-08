import { TodoItem as TodoItemTypes } from 'todo-types'
import { nanoid } from 'nanoid'
import { priority } from '../../../const'
import { EditButton, InputCheckbox, Label, TrashButton } from '../../atoms'
import styles from './styles.module.scss'

interface TodoItemProps {
  onCheck: (props: TodoItemTypes) => void
  onEdit: (props: TodoItemTypes) => void
  onRemove: (props: TodoItemTypes) => void
  todo_items: TodoItemTypes[]
}
const { todoContainer, todo, rightTodo, leftTodo, notActive } = styles
const TodoItem: React.FC<TodoItemProps> = ({
  todo_items,
  onCheck,
  onEdit,
  onRemove,
}) => {
  return (
    <div className={todoContainer}>
      {todo_items.map((v) => (
        <div data-cy="todo-item" className={todo} key={nanoid()}>
          <div className={leftTodo}>
            <InputCheckbox
              is_active={!!v.is_active}
              onCheck={() => onCheck(v)}
            />
            <Label
              dataCy="todo-item-priority-indicator"
              color={
                priority.find(({ value }) => value === v.priority)?.color ||
                'white'
              }
            >
              <span
                data-cy="todo-item-title"
                className={!v.is_active ? notActive : ''}
              >
                {v.title}
              </span>
            </Label>

            <EditButton
              dataCy="todo-item-edit-button"
              size={15}
              onClick={() => onEdit(v)}
            />
          </div>
          <div className={rightTodo}>
            <TrashButton
              dataCy="todo-item-delete-button"
              onClick={() => onRemove(v)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoItem
