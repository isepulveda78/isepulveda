import Link from "next/link"

export default function Categories({categories}){
    return (
                <>
                        {categories.map((category, id) => (
                           <div key={id}> <Link href={`/blog/category/${category.toLowerCase()}`}>
                                {category}
                            </div> 
                        ))}
               </>
    )
}
