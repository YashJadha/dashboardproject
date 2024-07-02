import 'bootstrap/dist/css/bootstrap.css'

export default function ContactPage() {
    return (
        <div className='w-screen h-screen bg-dark p-3' style={{ height: "100%" }}>
            <div className='text-light font-ariel w-full text-center fs-3 fw-bold lh-lg mb-4'>
                Contact Us
            </div>
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label text-light">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>

                <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label text-light">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>

                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label text-light">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>

                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label text-light">Report Complaint</label>
                    <select id="inputState" className="form-select">
                        <option selected>Complaint About</option>
                        <option>Software Issue</option>
                        <option>Pricing Issue</option>
                        <option>Account Problem</option>
                    </select>
                </div>

                <div className="col-12 mb-4">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label htmlFor="floatingTextarea2">Type Your Complaint :</label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label text-light" htmlFor="gridCheck">
                            Your all Complaints Are Done
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}
