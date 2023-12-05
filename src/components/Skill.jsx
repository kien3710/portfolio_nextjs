import Image from "next/image";

function Skill() {
  return (
    <>
      <div className="skill">
        <div className="breadrum">MY SKILL</div>
        <div className="title">
          My <span>Advantages</span>
        </div>
        <div className="list_skill">
          <ul>
            {/* {data?.data.map((item) => (
              <li key={item.id}>
                <img src={`http://localhost:3000/${item.image}`} alt="" />
                <div className="name">{item.name}</div>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
      <div className="skill">
        <div className="breadrum">PORTFOLIO</div>
        <div className="title">
          Featured
          <span> Projects</span>
        </div>
        <div className="project">
          <div className="item">
            <div
              className="item-image"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
                marginBottom: "2rem",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
                href="https://images.unsplash.com/photo-1699376187680-b998aa93dbe7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="item-content" style={{ color: "white" }}>
              <h3 className="item-title">Title</h3>
            </div>
          </div>
          <div className="item">
            <div
              className="item-image"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
                marginBottom: "1rem",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
                href="https://images.unsplash.com/photo-1699376187680-b998aa93dbe7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="item-content" style={{ color: "white" }}>
              <h3 className="item-title">Title</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
