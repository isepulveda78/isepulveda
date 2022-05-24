import Link from "next/link"

export default function Categories({categories}){
    return (
                <>
                <div key={categories.id}>
                    <Link href={`/blog/category/${categories.id}`}>
                                {categories.name}
                    </Link>
                </div>
         
               </>
    )
}
