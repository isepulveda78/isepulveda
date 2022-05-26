import Link from "next/link"

export default function Post({post}){
    return(
        <div className="col-lg-4 my-2">
            <div className="card h-100">
                <div className="card-body">
                    <h2 className="card-title h4"><Link href={`/blog/${post.slug}`}><a>{post.title.rendered}</a></Link></h2>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}>
                    </div>
                </div>
            </div>
        </div>
    )
}