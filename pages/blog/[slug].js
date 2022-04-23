
import LayoutTwo from '@/components/LayoutTwo'
import Navigation from '@/components/Navigation'
import { API_URL } from 'utls/url'
export default function PostPage({post}){
    return (
        <LayoutTwo>
            <Navigation />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <article>
                            <header className="mb-4">
                                <h2 className="fw-bolder mb-1">{post.title}</h2>
                                <a className="badge bg-secondary text-decoration-none link-light" href="#!">{post.category}</a>
                            </header>

                            <section className="mb-5">
                                <p className="fs-5 mb-4">{post.body}</p>
                            </section>
                         </article>
                    </div>
                </div>
            </div>
        </LayoutTwo>
    )
}

export async function getServerSideProps({ query: { slug }}){
    const res = await fetch(`${API_URL}/api/posts/${slug}`)
    const posts = await res.json()

    return {
        props: {
            post: posts[0]
        }
    }
}
