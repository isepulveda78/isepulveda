import Link from "next/link"
import {
    FaLinkedinIn,
    FaFacebookF,
    FaGithub,
    FaCopyright
} from 'react-icons/fa'

export default function Footer(){
    return(
        <>
        <footer className="bg-dark">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                    <h2 className="p-4 footer-brand"><Link href="/" className="text-light">isepulveda</Link></h2>
                        <ul className="nav justify-content-center">
                            <li className="nav-item"><Link href="#"><div className="nav-link text-light" role="button">About</div></Link></li>
                            <li className="nav-item"><Link href="/blog"><div className="nav-link text-light" role="button">Blog</div></Link></li>
                        </ul>
                        <ul className="nav justify-content-center">
                        <li><Link href="#"><div className="fa fa-linkedin" data-toggle="tooltip" data-placement="top" title="LinkedIn" role="button"><FaLinkedinIn className="text-dark text-center"/></div></Link></li>
                            <li><Link href="#"><div className="fa fa-facebook" data-toggle="tooltip" data-placement="top" title="Facebook" role="button"> <FaFacebookF className="text-dark" /> </div></Link></li>
                            <li><Link href="#"><div className="fa fa-github" data-toggle="tooltip" data-placement="top" title="GitHub" role="button"> <FaGithub className="text-dark" /></div></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center mb-4">
                        <div className="text-light">
                            All rights reserved <FaCopyright /> 2022 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}