import Link from "next/link"

export default function Categories({categories}){
    return (
                <div>
                    <Link href={`/blog/category/${categories.id}`}><a>{categories.name}</a></Link>
                </div>
    )
}
