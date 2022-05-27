import { useState } from 'react'
import Link from 'next/link'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Search({ placeholder, data }){

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
                filteredData.length === 0 ? <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> : <span id='clearBtn' onClick={clearInput}><i class="fa-solid fa-xmark"></i></span> 
            }
            </span>
        </div>

          </div>
            {filteredData.length != 0 && (
                <ul className="search-card list-group h-100 bg-light">
                    {filteredData.slice(0, 5).map((post, key) => {
                      return (
                        <li className="list-group-item" role="button">
                            <Link href={`/blog/${post.slug}`} key={key} target="_blank" className="text-dark">
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