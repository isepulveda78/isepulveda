import Link from "next/link"

export default function Categories({categories}){
    return (
                <>
                        {categories.map((category, index) => (
                            
                                {category}
                          
                        ))}
               </>
    )
}
