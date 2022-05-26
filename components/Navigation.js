import Link from "next/link"
import Search from "./Search"
export default function Navigation(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-padding">
        <div className="container">
            <Link href="/"><div className="navbar-brand" role="button">isepulveda</div></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ms-auto">
                  <Search />
                </div>
            </div>
        </div>
    </nav>
    )
}