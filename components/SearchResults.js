import SearchPost from "./SearchPost"

export default function SearchResults({posts}){
            if(posts.length === 0 || !posts) return <></>
    return (
            <>
                <ul className="search-card card list-group w-25 shadow border border-primary border-2">
                <li className="list-group-item lead ">{posts.length} Result(s)</li>
                    {posts.map((post) => (
                        <SearchPost key={post.id} post={post} compact={false} />
                    ))}
                </ul>
            </>
    )
}

