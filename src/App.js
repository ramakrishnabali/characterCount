import {useState} from 'react'
import {v4} from 'uuid'

import './App.css'

// Replace your code here
const App = () => {
  const [word, setWord] = useState('')
  const [wordList, setWordList] = useState([])

  const getUserInput = event => {
    setWord(event.target.value)
  }

  const addWord = event => {
    event.preventDefault()
    const newWord = {
      id: v4(),
      word,
    }

    setWordList(prevState => [...prevState, newWord])
    setWord('')
  }

  return (
    <div className="app-container">
      <div className="left-container">
        <div className="left-top-container">
          <h1>Count the characters like a Boss</h1>
        </div>
        {wordList.length === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        ) : (
          <ul className="left-bottom-container">
            {wordList.map(each => (
              <li className="list" key={each.id}>
                <p>
                  {each.word} : {each.word.length}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="right-container">
        <h1 className="right-heading">Character Counter</h1>
        <form onSubmit={addWord}>
          <input
            onChange={getUserInput}
            value={word}
            className="input"
            type="text"
            placeholder="Enter the Characters here"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default App
