import Link from "next/link"
export default function MainDashPage() {
    return (
        <div className="font-bold fs-0.5 bg-success text-light col-sm-12 col-md-12 col-lg-10" >
            main dashboard
            <Link href={'/crud'} type="button" className="btn btn-primary">
                Save Your Notes Here
            </Link >

           
        </div>
    )
}