'use client'

import { useState } from "react"

export default function AppHeader() {
    const [ishover, setIshover] = useState(false);
    const [ishover1, setIshover1] = useState(false);
    const [ishover2, setIshover2] = useState(false);
    const [ishover3, setIshover3] = useState(false);
    const [ishover4, setIshover4] = useState(false);

    return ( 
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid ">
                <a className="navbar-brand text-light" href="/">ShopKart</a>
                <button className="navbar-toggler bg-light text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-dark">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className={`dropdown-item ${ishover ? 'bg-primary' : ''}`} href="#" onMouseEnter={(e) => setIshover(true)} onMouseLeave={(e) => setIshover(false)}>AI-ML</a></li>
                                <li><a className={`dropdown-item ${ishover1 ? 'bg-success' : ''}`} href="#" onMouseEnter={(e) => setIshover1(true)} onMouseLeave={(e) => setIshover1(false)}>Web-Developement</a></li>
                                <li><a className={`dropdown-item ${ishover2 ? 'bg-warning' : ''}`} href="#" onMouseEnter={(e) => setIshover2(true)} onMouseLeave={(e) => setIshover2(false)}>Ardiuno Courses</a></li>
                                <li><a className={`dropdown-item ${ishover3 ? 'bg-danger' : ''}`} href="#" onMouseEnter={(e) => setIshover3(true)} onMouseLeave={(e) => setIshover3(false)}>Software-Developer</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className={`dropdown-item ${ishover4 ? 'bg-primary' : ''}`} href="#" onMouseEnter={(e) => setIshover4(true)} onMouseLeave={(e) => setIshover4(false)}>Other Courses</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" style={{ marginRight: "10px" }} role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-light" type="submit">Search</button>
                    </form>

                    <li className="nav-items d-flex justify-content-start align-items-center">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Sign Up
                        </button>
                    </li>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 " id="staticBackdropLabel">Sign Up Here 😇</h1>
                                    <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form className="modal-body">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Username :</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="abc@gmail.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Pasword</label>
                                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />
                                    </div>
                                    <button className="btn btn-primary">Submit</button>
                                </form>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}