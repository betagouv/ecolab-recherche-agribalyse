import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors } from 'utils/styles'

import Button from 'components/Button'

import SearchContext from 'utils/searchContext'

const Input = styled.input`
  width: 48vw;
  margin-bottom: 2vw;
  background-color: ${colors.white};
  border: none;
  padding: 0.3em 1em;
  font-size: 1.5vw;
`

export default function Search() {
  const { search, setSearch } = useContext(SearchContext)

  let history = useHistory()

  return (
    <div style={{ display: "flex", flexDirection: "row", }}>
      <Input
        type='text'
        value={search}
        placeholder={'Rechercher'}
        onChange={e => {
          history.push('/')
          setSearch(e.currentTarget.value)
        }}
      />

      <Button expand hollow>
          Télécharger la base
      </Button>
    </div>
  )
}
