import { useState, useEffect } from 'react'

import Textbook from "../components/Textbook"
import Search from '../components/Search'
import Sort from '../components/Sort'
import { AZ, ZA, lowestFirst, highestFirst } from '../utils/sort'

import { getAllTextbooks } from '../services/textbook'

const TextbookList = (props) => {
  const [textbooks, setTextbooks] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')
  
  useEffect(() => {
    const fetchTextbooks = async () => {
      const allTextbooks = await getAllTextbooks()
      setTextbooks(allTextbooks)
      setSearchResult(allTextbooks)
    }
    fetchTextbooks()
  }, [])
  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      case 'price-ascending':
        setSearchResult(lowestFirst(searchResult))
        break
      case 'price-descending':
        setSearchResult(highestFirst(searchResult))
        break
      default:
        break
    }
  }
  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }
  const handleSearch = (event) => {
    const results = textbooks.filter((textbook) =>
      textbook.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSearchResult(results)
    setApplySort(true)
  } 
  const handleSubmit = (event) => event.preventDefault()
  return (
    <div className="lg:bg-blue-100 bg-blue-100">
      <div className='lg:flex lg:justify-evenly lg:py-12 lg:bg-yellow-200 lg:flex-col bg-yellow-200 flex justify-evenly flex-row py-8' >
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      </div>
      
      <div className='lg:min-h-screen lg:grid lg:grid-cols-3 grid grid-cols-2'>
        {searchResult.map((textbook, index) => {
          return (
            <Textbook
              id={textbook.id}
              title={textbook.title}
              img_url={textbook.img_url}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}
export default TextbookList