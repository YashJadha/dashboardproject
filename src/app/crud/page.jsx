'use client'

import { FaEdit } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
import style from './style.module.css';
import Removebtnpage from '../crudComponent/removebtn';
import EditBtnpage from '../crudComponent/edittopicform';
import { useEffect, useState } from 'react';

export default function crudpage() {
    const [api, setApi] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/topicroute');
                const data = await response.json();
                setApi(data.data);
                console.log(data.data)
                setLoader(false);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={style.mainpage}>
            <div className={style.innermainpage}>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <div className={`font-bold fs-0.8 text-dark ${style.head}`}>
                            Note_App
                        </div>
                        <div className="">
                            <Link href={'/addtopic'} className='btn btn-success cursor-pointer'>Add Topic</Link>
                        </div>
                    </div>
                </nav>

                <main className={style.maincontent}>
                    {
                        loader ? <div className="d-flex justify-content-center">
                            <div className="spinner-border text-light" style={{ width: "3rem", height: "3rem" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                            :
                            api.map((element) => (
                                <>
                                    <div className={style.mainbox}>
                                        <div className={style.content}>
                                            <div className={style.title}>
                                                {element.title}
                                            </div>
                                            <div className={style.description}>
                                                {element.description}
                                            </div>
                                        </div>
                                        <div className={style.icons}>
                                            <div>
                                                <Link href={`/edittopic/${element._id}`}>
                                                    <FaEdit size={23} className={`text-primary cursor-pointer`} />
                                                </Link>
                                            </div>
                                            <div>
                                                <Removebtnpage id={element._id} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                    }
                </main>
            </div>
        </div>
    )
}
