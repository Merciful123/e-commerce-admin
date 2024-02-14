import DashData from "./data";
const Dashboard = () => {
  return (
    <div className="row" style={{ height: "150px" }}>
      {DashData?.map((data, index) => (
        <div key={index} className="col-md-6 mt-4">
          <div className="card " style={{ backgroundColor: `${data.color}` }}>
            <div className="card-body d-flex justify-content-between border-0">
              <div>
                <p className="card-title text-white">{data?.name}</p>
                <h5 className="fw-bold text-white">{data?.number}</h5>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={data?.icon}
                  alt="logo"
                  className=""
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
