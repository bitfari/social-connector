// ** React Imports
import { useState, Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { Editor } from 'react-draft-wysiwyg'
import { X, Star, Trash } from 'react-feather'
import Select, { components } from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { EditorState, ContentState } from 'draft-js'

// ** Reactstrap Imports
import { Modal, ModalBody, Button, Form, Input, Label, FormFeedback } from 'reactstrap'

// ** Utils
import { isObjEmpty, selectThemeColors } from '@utils'

// ** Styles Imports
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/react-select/_react-select.scss'

// ** Function to capitalize the first letter of string
const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

// ** Modal Header
const ModalHeader = props => {
  // ** Props
  const { children, store, handleTaskSidebar, setDeleted, deleted, important, setImportant, deleteTask, dispatch } =
    props

  // ** Function to delete task
  const handleDeleteTask = () => {
    setDeleted(!deleted)
    dispatch(deleteTask(store.selectedTask.id))
    handleTaskSidebar()
  }

  return (
    <div className='modal-header d-flex align-items-center justify-content-between mb-1'>
      <h5 className='modal-title'>{children}</h5>
      <div className='todo-item-action d-flex align-items-center'>
        {store && !isObjEmpty(store.selectedTask) ? (
          <Trash className='cursor-pointer mt-25' size={16} onClick={() => handleDeleteTask()} />
        ) : null}
        <span className='todo-item-favorite cursor-pointer mx-75'>
          <Star
            size={16}
            onClick={() => setImportant(!important)}
            className={classnames({
              'text-warning': important === true
            })}
          />
        </span>
        <X className='fw-normal mt-25' size={16} onClick={handleTaskSidebar} />
      </div>
    </div>
  )
}

const TaskSidebar = props => {
  // ** Props
  const { open, handleTaskSidebar, store, dispatch, updateTask, selectTask, addTask, deleteTask } = props

  // ** States
  const [tags, setTags] = useState([])
  const [desc, setDesc] = useState(EditorState.createEmpty())
  const [completed, setCompleted] = useState(false)
  const [important, setImportant] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [dueDate, setDueDate] = useState(new Date())

  const {
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { title: '' }
  })

  // ** Tag Select Options
  const tagOptions = [
    { value: 'family', label: 'Family' },
    { value: 'local', label: 'Local' },
    { value: 'business', label: 'Business' },
    { value: 'info', label: 'Information' },
    { value: 'shopping', label: 'Shopping' }
  ]

  // ** Custom Assignee Component
  const AssigneeComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex align-items-center'>
          <img className='d-block rounded-circle me-50' src={data.img} height='26' width='26' alt={data.label} />
          <p className='mb-0'>{data.label}</p>
        </div>
      </components.Option>
    )
  }

  // ** Returns sidebar title
  const handleSidebarTitle = () => {
    if (store && !isObjEmpty(store.selectedTask)) {
      return (
        <Button
          outline
          size='sm'
          onClick={() => setCompleted(!completed)}
          color={completed === true ? 'success' : 'secondary'}
        >
          {completed === true ? 'Completed' : 'Mark Completed'}
        </Button>
      )
    } else {
      return 'Add Goal'
    }
  }

  // ** Function to run when sidebar opens
  const handleSidebarOpened = () => {
    const { selectedTask } = store
    if (!isObjEmpty(selectedTask)) {
      setValue('title', selectedTask.title)
      setCompleted(selectedTask.isCompleted)
      setImportant(selectedTask.isImportant)
      setDueDate(selectedTask.dueDate)
      if (typeof selectedTask.description === 'string') {
        setDesc(EditorState.createWithContent(ContentState.createFromText(selectedTask.description)))
      } else {
        const obj = selectedTask.description._immutable.currentContent.blockMap
        const property = Object.keys(obj).map(val => val)

        setDesc(EditorState.createWithContent(ContentState.createFromText(obj[property].text)))
      }

      if (selectedTask.tags.length) {
        const tags = []
        selectedTask.tags.map(tag => {
          tags.push({ value: tag, label: capitalize(tag) })
        })
        setTags(tags)
      }
    }
  }

  // ** Function to run when sidebar closes
  const handleSidebarClosed = () => {
    setTags([])
    setDesc('')
    setValue('title', '')
    setCompleted(false)
    setImportant(false)
    setDueDate(new Date())
    dispatch(selectTask({}))
  }

  // ** Function to reset fields
  const handleResetFields = () => {
    const descValue = EditorState.createWithContent(ContentState.createFromText(store.selectedTask.description))

    setValue('title', store.selectedTask.title)
    setDesc(descValue)
    setCompleted(store.selectedTask.isCompleted)
    setImportant(store.selectedTask.isImportant)
    setDeleted(store.selectedTask.isDeleted)
    setDueDate(store.selectedTask.dueDate)

    if (store.selectedTask.tags.length) {
      const tags = []
      store.selectedTask.tags.map(tag => {
        tags.push({ value: tag, label: capitalize(tag) })
      })
      setTags(tags)
    }
  }

  // ** Renders Footer Buttons
  const renderFooterButtons = () => {
    if (store && !isObjEmpty(store.selectedTask)) {
      return (
        <Fragment>
          <Button color='primary' className='update-btn update-todo-item me-1'>
            Update
          </Button>
          <Button color='secondary' onClick={handleResetFields} outline>
            Reset
          </Button>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button color='primary' className='add-todo-item me-1'>
            Add
          </Button>
          <Button color='secondary' onClick={handleTaskSidebar} outline>
            Cancel
          </Button>
        </Fragment>
      )
    }
  }

  const onSubmit = data => {
    const newTaskTag = []

    if (tags.length) {
      tags.map(tag => newTaskTag.push(tag.value))
    }

    const state = {
      dueDate,
      title: data.title,
      tags: newTaskTag,
      description: desc,
      isCompleted: completed,
      isDeleted: deleted,
      isImportant: important
    }

    if (data.title.length) {
      if (isObjEmpty(errors)) {
        if (isObjEmpty(store.selectedTask) || (!isObjEmpty(store.selectedTask) && !store.selectedTask.title.length)) {
          dispatch(addTask(state))
        } else {
          dispatch(updateTask({ ...state, id: store.selectedTask.id }))
        }
        handleTaskSidebar()
      }
    } else {
      setError('title', {
        type: 'manual'
      })
    }
  }
  return (
    <Modal
      isOpen={open}
      toggle={handleTaskSidebar}
      className='sidebar-lg'
      contentClassName='p-0'
      onOpened={handleSidebarOpened}
      onClosed={handleSidebarClosed}
      modalClassName='modal-slide-in sidebar-todo-modal'
    >
      <Form id='form-modal-todo' className='todo-modal' onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader
          store={store}
          deleted={deleted}
          dispatch={dispatch}
          important={important}
          deleteTask={deleteTask}
          setDeleted={setDeleted}
          setImportant={setImportant}
          handleTaskSidebar={handleTaskSidebar}
        >
          {handleSidebarTitle()}
        </ModalHeader>
        <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
          <div className='mb-1'>
            <Label className='form-label' for='task-title'>
              Title <span className='text-danger'>*</span>
            </Label>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <Input
                  id='task-title'
                  placeholder='Title'
                  className='new-todo-item-title'
                  invalid={errors.title && true}
                  {...field}
                />
              )}
            />
            {errors.title && <FormFeedback>Please enter a valid wish title</FormFeedback>}
          </div>
          
          <div className='mb-1'>
            <Label className='form-label' for='task-tags'>
              Tags
            </Label>
            <Select
              isMulti
              id='task-tags'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={tagOptions}
              theme={selectThemeColors}
              value={tags}
              onChange={data => {
                setTags(data !== null ? [...data] : [])
              }}
            />
          </div>
          <div className='mb-1'>
            <Label for='task-desc' className='form-label'>
              Description
            </Label>
            <Editor
              editorState={desc}
              wrapperClassName='toolbar-bottom'
              toolbar={{
                options: ['inline', 'textAlign'],
                inline: {
                  inDropdown: false,
                  options: ['bold', 'italic', 'underline']
                }
              }}
              onEditorStateChange={data => setDesc(data)}
            />
          </div>
          <div>{renderFooterButtons()}</div>
        </ModalBody>
      </Form>
    </Modal>
  )
}

export default TaskSidebar