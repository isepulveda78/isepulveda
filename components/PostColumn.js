import Link from "next/link"

export default function Post({post, cats }){
    return(
            <div className="card mb-4 bg-white" key={post.id}>
                <div className="card-body text-dark">
                    <h2 className="card-title post">
                        <Link href={`/blog/${post.slug}`}>
                            <a className="text-dark text-decoration-none font-anton">{post.title.rendered}</a>
                        </Link>
                    </h2>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}}>
                    </div>
                    <hr/>
                    {cats}
                </div>
            </div>
    )
}