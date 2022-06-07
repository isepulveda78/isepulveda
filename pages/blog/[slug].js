import LayoutTwo from '@/components/LayoutTwo'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getPost, getSlugs } from 'utls/wordpress'
import Link from 'next/link'
export default function PostPage({post}){
    return (
        <LayoutTwo>
            <Navigation />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page"><Link href="/blog">Back</Link></li>
                        </ol>
                    </nav>
                        <article className='card bg-white text-dark p-2'>
                            <header className="mb-4">
                                <h2 className="fw-bolder mb-1 text-center" dangerouslySetInnerHTML={{ __html: post.title.rendered}}></h2>
                            </header>

                            <section className="mb-5">
                                <div className="fs-5 mb-4" dangerouslySetInnerHTML={{ __html: post.content.rendered}}></div>
                            </section>
                         </article>
                    </div>
                </div>
            </div>
            <Footer />
        </LayoutTwo>
    )
}

export async function getStaticPaths(){
    const paths = await getSlugs('posts')
 
    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({ params }){
    const post = await getPost(params.slug)
    return {
        props: {
            post
        },
        revalidate: 10,
    }
}
