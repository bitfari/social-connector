import React, { useState, useEffect } from 'react'
import { Flex, Box, Text } from '@blockstack/ui'
import { Session } from '../auth'
import { Todo } from './Todo'
import { v4 as uuid } from 'uuid'
import { Sharer } from './Sharer'
import { fetchTasks, saveTasks } from '../storage'

export const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [isPublic, setIsPublic] = useState(false)
  const [username, setUsername] = useState('')
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const username = document.location.pathname.split('/')[2]
    if (username) {
      setUsername(username)
    }
    const doFetchTasks = async () => {
      const response = await fetchTasks(Session, username)
      if (response.tasks === null) {
        setNotFound(true)
      } else {
        setTasks(response.tasks)
      }
      setIsPublic(!!response.public)
      setLoading(false)
    }
    doFetchTasks()
  }, [])

  const saveTask = ({ value, complete, index, remove }) => {
    setTasks(currentTasks => {
      if (remove && index !== 0) {
        currentTasks.splice(index, 1)
        void saveTasks(Session, currentTasks)
        return currentTasks
      } else {
        const task = currentTasks[index]
        task.value = value
        task.complete = complete
        currentTasks[index] = task
        void saveTasks(Session, currentTasks)
        return currentTasks
      }
    })
  }

  const createTask = () => {
    setTasks(tasks.concat([{ value: '', completed: false, id: uuid() }]))
  }
 
  const todos = tasks.map((task, index) => (
    <Todo
      {...task}
      index={index}
      key={task.id}
      save={saveTask}
      disabled={!!username}
      create={createTask}
    />
  ))
 
  const getHeader = () => {
    if (loading) {
      return 'Loading...'
    }
    if (notFound) {
      return '404. No keywords found here.'
    }
    if (username) {
      if (isPublic) {
        return `${username.split('.')[0]}'s keywords`
      }
      return `${username.split('.')[0]}'s keywords are private`
    }
    return 'My Keywords'
  }

  return (
    <Flex>
      <Box maxWidth="660px" width="100%" mx="auto" mt="75px">
        <Flex width="100%" flexWrap="wrap">
          <Box mb={4} width="100%">
            <Text textStyle="display.large" fontSize={7}>
              {getHeader()}
            </Text>
          </Box>
          {loading ? <Text>loading...</Text> : todos}
        </Flex>
      </Box>
    </Flex>
  )
}