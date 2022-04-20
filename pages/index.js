import Image from "next/image"

import { 
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaHtml5,
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaSass,
    FaWordpress,
    FaGulp
} from "react-icons/fa"
import Link from 'next/link'

import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Israel Sepulveda</span>
                    <span className="d-none d-lg-block"><Image className="img-fluid img-profile rounded-circle mx-auto " src="/img/profile.jpg" alt="..." width={400} height={400} /></span>
                </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link href="#about"><a className="nav-link js-scroll-trigger">About</a></Link></li>
                        <li className="nav-item"><Link href="/blog"><a className="nav-link js-scroll-trigger">Blog</a></Link></li>
                        <li className="nav-item"><Link href="#education"><a className="nav-link js-scroll-trigger">Education</a></Link></li>
                        <li className="nav-item"><Link href="#skills"><a className="nav-link js-scroll-trigger">Skills</a></Link></li>
                        <li className="nav-item"><Link href="#projects"><a className="nav-link js-scroll-trigger">Projects</a></Link></li>
                    </ul>
                </div>
            </nav>
        <div className="container-fluid p-0">
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Israel
                        <span className="text-primary">Sepulveda</span>
                    </h1>
                    <div className="subheading mb-5">
                        8 Andrew Paul Way, Greensboro, NC 27410
                        <a href="mailto:sepulveda.israel@gmail.com"> sepulveda.israel@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I've been developing web applications for the past seven years. I'm capable of building applications with WordPress, Laravel, React, Vue, and Node.js.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><FaLinkedinIn /></a>
                        <a className="social-icon" href="#!"><FaGithub /></a>
                        <a className="social-icon" href="#!"><FaFacebookF /></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Webmaster</h3>
                            <div className="subheading mb-3">Guilford County Schools</div>
                            <p>Brought a whole new fresh look to the Guilford County School's website. In addition, I helped teachers with their websites.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2021 - Present</span></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">New Borns in Need</div>
                            <p>Created a WordPress chile theme and maintained the website.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2021 - December 2021</span></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Kayser-Roth</h3>
                            <div className="subheading mb-3">Greensboro, NC</div>
                            <p>Worked with BigCommerce to build out nononsense.com. Fixed bugs on Hue.com, Burlix.com, and Glove.com. I used HTML, CSS, and Javascript for all websites.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2020 - February 2021</span></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">TimeCatchApp</h3>
                            <div className="subheading mb-3">Durham, NC</div>
                            <p>Built a custom web application in Laravel and Vue to manage time by adding multiple projects together.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2019 - December 2019</span></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Allure Aesthetics and Medical Spa</h3>
                            <div className="subheading mb-3">Fayetteville, NC</div>
                            <p>Built WordPress theme using Bootstrap and PHP.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2017 - July 2019</span></div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">New Hope Family Practice</h3>
                            <div className="subheading mb-3">Fayetteville, NC</div>
                            <p>Built WordPress theme using Bootstrap and PHP.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2016 - May 2017</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Tech Talent South</h3>
                            <div className="subheading mb-3">Ruby on Rails - Javascript</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">November 2018 - May 2019</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Methodist University</h3>
                            <div className="subheading mb-3">Mass Communications</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2002 - December 2006</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><FaHtml5 /></li>
                        <li className="list-inline-item"><FaReact /></li>
                        <li className="list-inline-item"><FaVuejs /></li>
                        <li className="list-inline-item"><FaNodeJs /></li>
                        <li className="list-inline-item"><FaSass /></li>
                        <li className="list-inline-item"><FaWordpress /></li>
                        <li className="list-inline-item"><FaGulp /></li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    </Layout>
  )
}
