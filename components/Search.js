import { useState } from 'react'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
export default function Search({ placeholder, data}){

    const [filteredData, setFilteredData ] = useState([])
    const [wordEntered, setWordEntered ] = useState('')
    
    const handleFilter = (e) => {
      const searchWord = e.target.value
      setWordEntered(searchWord)

      const newFilter = data.filter((value) => {
        return value.title.rendered.toLowerCase().includes(searchWord.toLowerCase())
      })

        if(searchWord === ""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }
      
        }
        const clearInput = () => {
            setFilteredData([])
            setWordEntered('')
        }

    return (
        <>
           <div>
            <div>
        <div className="input-group ">
          <input type="text"
            className="form-control" 
            placeholder={placeholder}
            onChange={handleFilter}
            value={wordEntered}
            />
            <span className="input-group-text">
            {
                filteredData.length === 0 ? <span><FaSearch /></span> : <span id='clearBtn' onClick={clearInput} role="button"><GrClose /></span> 
            }
            </span>
        </div>

          </div>
            {filteredData.length != 0 && (
                <ul className="search-card list-group h-100 bg-light">
                    {filteredData.slice(0, 5).map((post) => {
                      return (
                        <li className="list-group-item" role="button" key={post.id}>
                            <Link href={`/blog/${post.slug}`} target="_blank" className="text-dark">
                                <p>{post.title.rendered}</p>
                            </Link> 
                         </li>
                      )
                    })} 
                </ul>
                )}
            </div>
        </>
    )
}
