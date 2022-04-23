import Navigation from "@/components/Navigation"
import LayoutTwo from "@/components/LayoutTwo"
import Post from "@/components/PostColumn"
import Link from "next/link"
import Categories from "@/components/Categories"

export default function blog({posts, categories, categoryName}){
    return (
        <LayoutTwo>
               <Navigation />
               <div className="container">
                    <div className="row mt-5">
                    <div className="col-lg-8">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page"><Link href="/notes">Back</Link></li>
                        </ol>
                    </nav>
                        <h2>Notes on {categoryName}</h2>
         
                            { posts.length === 0 && <h3>No notes.</h3> }

                            {posts.map((evt) => (
                                <Post key={evt.id} post={evt}/>
                            ))}
                        </div>
                        <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-header">Topics</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled mb-0">
                                               <Categories categories={categories} />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
               </div>
        </LayoutTwo>
     
    )
}

export async function getStaticPaths() {
    const res = await fetch(`/api/posts`)
    const posts = await res.json()

    const categories = posts.map((post) => post.category.toLowerCase() )

    const paths = categories.map((category) => ({
      params: { category_name: category },
    }))
  
    return {
      paths,
      fallback: false,
    }
  }
  

export async function getStaticProps({ params: { category_name } }){
    const res = await fetch(`http://localhost:3000/api/posts`)
    const posts = await res.json()

    const categories = posts.map((post) => post.category )
    const uniqueCategories = [...new Set(categories) ]

    const categoryPosts = posts.filter(
        (post) => post.category.toLowerCase() === category_name
    )
    
    return {
        props: {
            posts: categoryPosts,
            categoryName: category_name,
            categories: uniqueCategories
        }
    }
}
