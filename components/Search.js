import { useState, useEffect } from 'react'
import SearchResults from './SearchResults'
import axios from 'axios'
export default function Search(){

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    
    useEffect(() => {
        const getResults = async () => {
            if(searchTerm.length <= 2 || searchTerm === ''){
                setSearchResults([])
            }else{
                const data = await axios.get(`https://webdev102.com/wp-json/wp/v2/posts?search=${searchTerm}`)
                .then((res)=> {
                    const posts = res.data
                    setSearchResults(posts)
                })
            }
        }
        getResults()
    }, [searchTerm])

    return (
        <>
            <form>
                <input
                id="search" 
                className="form-control"
                name="search" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                autoComplete='off'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
                
            <SearchResults posts={searchResults === '' ? <></> : searchResults} />
               
        </>
    )
}