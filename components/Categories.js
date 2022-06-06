import Link from "next/link"

export default function Categories({categories}){
    return (
             <>
                <div className="border-bottom p-1">
                    <Link href={`/blog/category/${categories.id}`}><a className="text-dark fw-lighter font-anton">{categories.name}</a></Link>
                </div>
             </>
    )
}
