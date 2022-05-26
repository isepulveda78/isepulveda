import Link from "next/link"

export default function Post({post}){
    
    return(
        <>
            <li className="list-group-item p-1" role="button">
                <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
            </li>
        </>
    )
}