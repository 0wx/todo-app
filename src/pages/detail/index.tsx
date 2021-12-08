import { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { useParams, Navigate } from 'react-router-dom'
import {
  ItemPayload,
  SortMenuTypes,
  TodoItem as TodoItemTypes,
  UpdateItemPayload,
  UpdateItemPayloadWithId,
} from 'todo-types'
import { Empty } from '../../components/atoms'
import { DetailLayout, MainLayout } from '../../components/layout'
import {
  Alert,
  AlertFail,
  Error,
  FormItem,
  Loading,
  TodoItem,
} from '../../components/molecules'
import { defaultSortMenu } from '../../const'
import {
  sortAZ,
  sortBelumSelesai,
  sortTerbaru,
  sortTerlama,
  sortZA,
} from '../../helpers/sort'
import {
  getActivityGroupDetail,
  addItem,
  updateItem,
  removeItem,
} from '../../services'
import { updateActivityTitle } from '../../services/activity/updateActivityTitle'

const Detail: React.FC = () => {
  const { id } = useParams()
  const [todos, setTodos] = useState<TodoItemTypes[] | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [title, setTitle] = useState<string | undefined>(undefined)
  const [showForm, setShowForm] = useState<boolean>(false)
  const [sortValue, setSortValue] = useState<SortMenuTypes>(defaultSortMenu)
  const [formInitialValue, setFormInitialValue] = useState<
    UpdateItemPayloadWithId | undefined
  >(undefined)
  useEffect(() => {
    if (!todos && id && Number(id))
      getActivityGroupDetail(+id)
        .then((data) => {
          setTodos(data.todo_items)
          setTitle(data.title)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
  }, [todos, id])

  const handleAdd = () => {
    setShowForm(true)
  }
  const handleTitleChange = async (text: string) => {
    if (id && !!text) {
      const response = await updateActivityTitle(+id, { title: text })
      if (!response) {
        confirmAlert({
          customUI: () => <AlertFail label="Gagal mengganti nama Activity" />,
        })
      }
    }
  }
  const handleUpdate = async (payload: UpdateItemPayloadWithId) => {
    const { title, is_active, priority } = payload
    setFormInitialValue(undefined)
    const response = await updateItem(payload.id, {
      title,
      is_active,
      priority,
    })

    if (response) {
      setTodos((todos) => {
        if (!todos) return todos
        return todos.map((todo) => {
          if (todo.id === response.id) {
            todo.title = response.title
            todo.priority = response.priority
          }
          return todo
        })
      })
      setShowForm(false)
    }
  }
  const handleSubmit = async (payload: ItemPayload) => {
    try {
      const response = await addItem(payload)
      const { title, priority, id, activity_group_id, is_active } = response
      if (todos) {
        const newTodos: TodoItemTypes[] = [
          {
            title,
            priority,
            id,
            activity_group_id,
            is_active: is_active ? 1 : 0,
          },
          ...todos,
        ]
        setTodos(newTodos)
      }
      setShowForm(false)
    } catch (error) {
      confirmAlert({
        customUI: () => <AlertFail label="Gagal menyimpan Item" />,
      })
    }
  }
  if (!id || !Number(id)) return Navigate({ to: '/' })

  const handleEdit = async (todo: TodoItemTypes) => {
    setFormInitialValue(todo)

    setShowForm(true)
  }
  const handleCheck = async (todo: TodoItemTypes) => {
    if (todos) {
      const newTodos = todos.map((v) => {
        if (v.id !== todo.id) return v

        v.is_active = todo.is_active === 1 ? 0 : 1
        return v
      })
      setTodos(newTodos)
      handleOnSort(sortValue)
    }
    const { title, is_active, priority } = todo
    const payload: UpdateItemPayload = {
      title,
      is_active,
      priority,
    }

    await updateItem(todo.id, payload)
  }

  const handleConfirmRemove = async (props: TodoItemTypes) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <Alert
          onNo={onClose}
          title={props.title}
          type={'List Item'}
          onYes={async () => {
            if (todos) {
              const newTodos = todos.filter(({ id }) => id !== props.id)
              setTodos(newTodos)
              onClose()
              await removeItem(props.id)
            }
          }}
        />
      ),
    })
  }

  const handleOnSort = (sortValue: SortMenuTypes) => {
    setSortValue(sortValue)
    if (todos) {
      let newTodos = todos
      switch (sortValue.value) {
        case 'terbaru':
          newTodos = todos.sort(sortTerbaru)
          break
        case 'terlama':
          newTodos = todos.sort(sortTerlama)
          break
        case 'a-z':
          newTodos = todos.sort(sortAZ)
          break
        case 'z-a':
          newTodos = todos.sort(sortZA)
          break
        case 'belum-selesai':
          newTodos = todos.sort(sortBelumSelesai)
          break
      }

      setTodos([...newTodos])
    }
  }
  return (
    <MainLayout>
      <DetailLayout
        onAdd={handleAdd}
        title={title}
        onTitleChange={(text) => {
          setTitle(text)
          handleTitleChange(text)
        }}
        onSort={handleOnSort}
      >
        {showForm && (
          <FormItem
            id={+id}
            onClose={() => {
              setShowForm(false)
              setFormInitialValue(undefined)
            }}
            onSubmit={handleSubmit}
            onUpdate={handleUpdate}
            initialValue={formInitialValue}
          />
        )}
        {loading && <Loading />}
        {error && <Error />}

        {todos && todos.length > 0 && (
          <TodoItem
            onEdit={handleEdit}
            onRemove={handleConfirmRemove}
            onCheck={handleCheck}
            todo_items={todos}
          />
        )}
        {todos && todos.length < 1 && (
          <Empty onClick={handleAdd} type={'List Item'} />
        )}
      </DetailLayout>
    </MainLayout>
  )
}

export default Detail
