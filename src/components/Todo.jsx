import React, { useState } from 'react'
import { Flex, Box, Input } from '@blockstack/ui'
import styled from 'styled-components'

const TodoInput = styled(Input)`
  background: none;
  border: none;
  &:focus {
    border: none;
    box-shadow: none;
  }
`

/**
 * @typedef {Object} TodoProps
 * @property {boolean} complete
 * @property {string} value
 * @property {number} index
 * @property {({ value: string, complete: boolean, index: number, remove: boolean }) => void} save
 * @property {() => void} create
 * @property {boolean} isDisabled
 */

/**
 * Component for an individual task
 * @param {TodoProps} properties
 */
export const Todo = ({ complete = false, value = '', index, save, create, disabled = false }) => {
  const [input, setInput] = useState(value)
  const [focused, setFocused] = useState(false)
  const [completeTick, setCompleteTick] = useState(complete)

  const doSave = () => {
    if (!disabled) {
      save({
        value: input,
        complete,
        index,
        remove: input.length === 0
      })
    }
  }
  return (
    <Box
      width="100%"
      backgroundColor={focused ? '#FAFAFC' : 'white'}
      px={3}
      py={0}
      _hover={{ backgroundColor: '#FAFAFC' }}
    >
      <Flex>
        <Box
          style={{ position: 'relative', top: '14px' }}
          onClick={() => {
            complete = !completeTick
            if (!disabled) {
              save({
                complete,
                value: input,
                index
              })
              setCompleteTick(complete)
            }
          }}
        >
        </Box>
        <Box flexGrow={1}>
          <TodoInput
            placeholder={index === 0 ? 'Write your first keyword' : 'Add another'}
            fontSize={2}
            value={input}
            onBlur={() => {
              setFocused(false)
              doSave()
            }}
            autoFocus={!value}
            isDisabled={disabled}
            style={{
              textDecoration: completeTick ? 'line-through' : 'none'
            }}
            onFocus={() => setFocused(true)}
            onKeyDown={e => {
              if (e.keyCode === 27) {
                e.target.blur()
              } else if (e.key === 'Enter') {
                create()
                e.target.blur()
              }
            }}
            onChange={e => {
              if (!disabled) {
                setInput(e.target.value)
              }
            }}
          />
        </Box>
      </Flex>
    </Box>
  )
}
