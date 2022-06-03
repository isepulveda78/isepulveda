import Link from "next/link"
import Image from "next/image"
export default function Post({post, cats}){
    return (
        <div className="col-lg-6 my-2 portfolio">
            <div className="card h-100">
            <Image src={post.thumbnail} width={1366} height={625} alt={post.name} className="card-img-top img-fluid" />
                <div className="card-body bg-white text-dark rounded-bottom">
                    <div className="card-title text-center"><Link href={post.acf.website}>{post.title.rendered}</Link></div>
                    <hr/>
                    {cats}
                </div>
            </div>
        </div>
    )
}