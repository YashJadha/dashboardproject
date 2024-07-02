'use client'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import style from './style.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from "next/navigation";
import { doPost } from "../actions/reqActions";
import { useState } from 'react';

export default function addpage() {

    const [toasting, setToasting] = useState();
    const router = useRouter();
    async function submithandler(formdata) {
        try {
            var data = {};
            formdata.forEach((value, key) => (data[key] = value));
            const res = await doPost('/topicroute', data);

            if (res) {
                setToasting(toast.success('Your data has been posted !', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }))

                router.replace('/crud');
            }
        }
        catch (error) {
            setToasting(toast.error('Please enter the Unique Email-Id please try again ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }))
            console.log('Your data is not posted !');
        }
    }

    function clickhandler() {
        setToasting(toast.success('Your data has been Deleted !', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }))
    }
    return (
        <div className={style.mainpage}>
            {
                toasting &&
                <ToastContainer position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored" />
            }
            <div className={style.innermainpage}>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <Link href={'/crud'} className={`font-bold fs-0.8 text-dark text-decoration-none ${style.head}`}>
                            Note_App
                        </Link>
                        <div className="">
                            <button className='btn btn-success cursor-pointer'>Add Topic</button>
                        </div>
                        
                    </div>
                </nav>
                <main className={style.maincontent}>
                    <form action={submithandler} className={style.form}>
                        <div className="mb-3">
                            <label for="title" className="form-label text-light">Title</label>
                            <input type="text" name="title" className="form-control" id="title" aria-describedby="titlehelp" />
                            <div id="titlehelp" className="form-text">Your information will be very secure.</div>
                        </div>
                        <div className="mb-3">
                            <label for="description" className="form-label text-light">Description</label>
                            <input type="text" name="description" className="form-control" id="description" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </main>

                <button className='btn btn-primary' onClick={clickhandler}>
                            Click to magic
                        </button>
            </div>
        </div>
    )
}
