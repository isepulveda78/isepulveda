import { useState, useEffect } from 'react'
import SearchResults from './SearchResults'

export default function Search(){

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const getResults = async () => {
            if(searchTerm === ''){
                setSearchResults([])
            }else{
                const res = await fetch(`https://webdev102.com/wp-json/wp/v2/posts?search=${searchTerm}`)
                const posts = await res.json()
                setSearchResults(posts)
            }
        }
        getResults()
    }, [searchTerm])

    return (
        <>
            <form className="d-flex">
                <input
                id="search" 
                className="form-control me-2"
                name="search" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                autoComplete='off'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <div>
            <SearchResults posts={searchResults} />
            </div>
        </>
    )
}