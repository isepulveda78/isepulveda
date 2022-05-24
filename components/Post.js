import Link from "next/link"

export default function Post({post}){
    return(
        <div className="col-lg-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title h4"><Link href={`/blog/${post.slug}`}><a>{post.title.rendered}</a></Link></h2>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}>
                   
                    </div>
                    <hr />
                     <span className="badge bg-success">{post.categories}</span> 
                </div>
            </div>
        </div>
    )
}