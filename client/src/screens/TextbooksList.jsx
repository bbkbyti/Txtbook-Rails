import { useState, useEffect } from 'react'
import Search from '../components/Search'
import Sort from '../components/Sort'
import { AZ, ZA, lowestFirst, highestFirst } from '../utils/sort'
import { getAllTextbooks } from '../services/textbook'
import { Link } from 'react-router-dom'

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
    <div>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className='min-h-screen grid grid-cols-3 '>
        {searchResult.map((textbook, index) => {
          // console.log(textbook);
          return (
            <div className='flex flex-col justify-center items-center'  key={index}>
             <p className='text-xl'>{textbook.title}</p>
             <div className='flex flex-col justify-center'>
             <Link  to={`/textbooks/${textbook.id}`}>
                <img className='w-40 h-full object-cover ' src={textbook.img_url} alt={textbook.title} />
              </Link>
             </div>
             
            </div>

          )
        })}
      </div>
    </div>
  )
}
export default TextbookList