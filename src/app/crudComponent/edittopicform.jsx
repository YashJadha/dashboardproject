'use client';
import style from '../page.module.css'
import { useParams, useRouter } from "next/navigation"
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
import { doPatch } from '../actions/reqActions';

export default function EditTopicform() {
    const { id } = useParams();
    const router = useRouter();
    async function patchhandler(formdata){
        try{
            var data = {};
            formdata.forEach((value, key) => (data[key] = value));
            const updated = await doPatch(`/topicroute/${id}`, data);
            if(updated){
                router.replace('/crud');
            }
        }
        catch(error){
            console.log("Data can't updated :-(");
        }
    }
    return (
        <div className={style.mainpage}>
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
            <form action={patchhandler} method='patch' className={style.form}>
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
        </div>
    )
}