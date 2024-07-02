'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '../page.module.css'
import { MdDelete } from "react-icons/md";
import { doDelete } from "../actions/reqActions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Removebtnpage({ id }) {
  const router = useRouter();
  const [toasting, setToasting] = useState();
  const myid = id;
  async function removehandler() {
    const confirmation = confirm('are you confirm to delete this data ? ');
    if (confirmation) {
      const res = await doDelete(`/topicroute/${myid}`);
      window.location.reload();

      if (res) {
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
    }
    else {
      setToasting(toast.error('Your data is not deleted please try again :-( ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }))
    }
  }

  return (
    <>
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
      <MdDelete size={25} className={`text-danger ${style.pointer}`} onClick={removehandler} />
    </>
  )
}
