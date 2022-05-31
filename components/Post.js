import Link from "next/link"

export default function Post({post, cats}){
    return (
        <div className="col-lg-4 my-2">
            <div className="card h-100">
                <div className="card-body">
                    <h2 className="card-title h4"><Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link></h2>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}>
                    </div>
                    <hr/>
                    <span className="badge bg-primary">{cats}</span>
                </div>
            </div>
        </div>
    )
}