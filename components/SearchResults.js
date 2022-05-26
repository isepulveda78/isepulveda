import SearchPost from "./SearchPost"

export default function SearchResults({posts}){
    if(posts.length === 0) return <></>

    return (
            <div className="">
              <div className="card mt-1"><h4 className="p-1">{posts.length} Result(s)</h4></div>
                {posts.map((post) => (
                    <SearchPost key={post.id} post={post} compact={true} />
                    ))}
            </div>
    )
}

