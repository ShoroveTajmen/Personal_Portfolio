const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Put Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <textarea className="border border-blue-600" id="w3review" name="w3review" rows="4" cols="30">
                
                </textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
              </div>
              <div>
                <h1>Email: sorovitajmen@gmail.com</h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
