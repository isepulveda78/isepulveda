import Link from "next/link"

export default function Post({post, cats }){
    return(
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title h4">
                        <Link href={`/blog/${post.slug}`}>
                            {post.title.rendered}
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