import Link from "next/link"

export default function Post({post}){
    return(
        <div className="col-lg-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title h4"><Link href={`/blog/${post.slug}`}><a>{post.title}</a></Link></h2>
                    <p className="card-text">
                        {post.excerpt}...
                    </p>
                    <hr />
                    <span className="badge bg-success">{post.category}</span>
                </div>
            </div>
        </div>
    )
}