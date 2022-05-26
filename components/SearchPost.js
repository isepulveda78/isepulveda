import Link from "next/link"

export default function Post({post}){
    
    return(
        <div className="card bg-light mt-1">
           <Link href={`/blog/${post.slug}`}><div className="p-2" role="button">{post.title.rendered}</div></Link>
        </div>
    )
}