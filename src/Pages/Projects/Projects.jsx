const Projects = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-[50px] uppercase mt-[60px]">
        PROJECTS
      </h1>
      <div className="grid grid-cols-2 w-[1000px] mx-auto ml-[180px]">
        <div className="card card-compact w-[400px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">TechProduct_Client_side</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions ">
              <button className="btn btn-primary">View Live Site</button>
              <button className="btn btn-primary">Github Repo Link</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-[400px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions ">
              <button className="btn btn-primary">View Live Site</button>
              <button className="btn btn-primary">Github Repo Link</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-[400px] bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions ">
              <button className="btn btn-primary">View Live Site</button>
              <button className="btn btn-primary">Github Repo Link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
