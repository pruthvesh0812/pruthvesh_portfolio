import "./App.css";

const user = {
  name: "Pruthvesh Shetkar",
  imageUrl: "",
  imageSize: 90,
  address: "Pernem, Goa",
  phNum: "9309954944",
  email: "pruthveshshetkar@gmail.com",
  linkedIn: "",
  gitHub: "",
  Entry_para:
    "Passionate about problem-solving and eager to dive into the inner workings of companies and learn the ins and outs of the Technology and design work. Adept at Entrepreneurship, strategy and analysis of business and project growth. Alongside my B.Tech degree at NIT Goa in Computer Science and Engineering, I have co-founded a startup named Toptrip.in - a travel based startup(currently unregistered) and have the experience of handling a team of 4 people for more than 7 months."
};

function MyButton({ level }) {
  if ("excellent" == level) {
    return <button className="showLevel_exc"></button>;
  } else if ("very good" == level) {
    return <button className="showLevel_vg"></button>;
  } else if ("good" == level) {
    return <button className="showLevel_g"></button>;
  } else if ("average" == level) {
    return <button className="showLevel_av"></button>;
  }
}

function Line() {
  return (<div className="line">
    <button style={{ backgroundColor: "yellow", width: 500, height: .1, borderRadius: 10, border: 0 }}></button>
  </div>);
}

export default function App() {
  return (
    <div className="portfolio">
      <div className="auxillary"></div>
      <div className="leftDiv">
        <h1 className="title">{user.name}</h1>
        <h2 style={{ fontFamily: "sans-serif", marginBottom: 5, marginTop: 25 }}>Profile</h2>
        <p className="profile" style={{ marginTop: 5, marginBottom: 25 }}>{user.Entry_para}</p>

        <Line />


        <h2 style={{ fontFamily: "sans-serif", marginBottom: 5, marginTop: 25 }}>Education</h2>

        <h4 className="edu" style={{ marginTop: 7 }}>
          <li>BTech (Computer Science and Engineering), National Institute of
            Technology Goa, Ponda</li>
        </h4>


        <h5 style={{ fontFamily: "sans-serif", fontSize: 12, marginTop: 5, marginBottom: 5, opacity: .7 }}>
          December 2020 - May 2024 (currently ongoing)
        </h5>

        <h4 className="edu">
          <li>11th & 12th Science, St. Xavier's Higher Secondary School, Mapusa</li>
        </h4>
        <h5 style={{ fontFamily: "sans-serif", fontSize: 12, marginTop: 5, marginBottom: 35, opacity: .7 }}>
          May 2018 - May 2020
        </h5>

        <Line />

        <h2 style={{ fontFamily: "sans-serif", marginBottom: 7, marginTop: 35 }}>Courses</h2>
        <h4 className="courseDetail">
          <li>Data Structures, National Institute of Technology Goa, Ponda</li>
        </h4>
        <h4 className="courseDetail">
          <li>Design and analysis of Algorithms, National Institute of Technology
            Goa, Ponda</li>
        </h4>
        <h4 className="courseDetail">
          <li>Computer Networks, National Institute of Technology Goa, Ponda</li>
        </h4>
        <h4 className="courseDetail">
          <li>Operating Systems, National Institute of Technology Goa, Ponda</li>
        </h4>
        <h4 className="courseDetail">
          <li>Database Management, National Institute of Technology Goa, Ponda</li>
        </h4>
        <h4 className="courseDetail" style={{ marginBottom: 35 }}>
          <li>Software Engineering, National Institute of Technology Goa, Ponda</li>
        </h4>

        <Line />

        <h2 style={{ fontFamily: "sans-serif", marginBottom: 5, marginTop: 35 }}>My Project</h2>
        <a href="https://github.com/pruthvesh0812/UI-Ux_designs_pruthvesh">
          This is my Github repository link for all my design work:
        </a>

        <h4 style={{ fontFamily: "sans-serif" , opacity:.6 , marginTop: 50 , textAlign:"right" }}>
          (Built using React.js)
        </h4>

      </div>
      <div className="rightDiv">
        <div className="details">
          <h3
            style={{
              color: "white",
              fontFamily: "sans-serif",
              marginBottom: 10
            }}
          >
            Details
          </h3>
          <div className="detailsData">{user.address}</div>
          <div className="detailsData">{user.phNum}</div>
          <div className="detailsData">{user.email}</div>

          <h3
            style={{
              color: "white",
              fontFamily: "sans-serif",
              marginBottom: 10,
              marginTop: 30
            }}
          >
            Links
          </h3>
          <a
            className="detailsData"
            style={{ color: "aqua", display: "block", marginBottom: 10 }}
            href={user.linkedIn}
          >
            LinkedIn
          </a>

          <a
            className="detailsData"
            style={{ color: "aqua" }}
            href={user.gitHub}
          >
            GitHub
          </a>

          <h3
            style={{
              color: "white",
              fontFamily: "sans-serif",
              marginBottom: 10,
              marginTop: 30
            }}
          >
            Skills
          </h3>

          <div className="skills">
            <div className="detailsSkill">{skill.sk1}</div>
            <MyButton level={skill.lv1} />
            <div className="detailsSkill">{skill.sk2}</div>
            <MyButton level={skill.lv2} />
            <div className="detailsSkill">{skill.sk3}</div>
            <MyButton level={skill.lv3} />
            <div className="detailsSkill">{skill.sk4}</div>
            <MyButton level={skill.lv4} />
            <div className="detailsSkill">{skill.sk5}</div>
            <MyButton level={skill.lv5} />
            <div className="detailsSkill">{skill.sk6}</div>
            <MyButton level={skill.lv6} />
          </div>

          <h3
            style={{
              color: "white",
              fontFamily: "sans-serif",
              marginBottom: 10,
              marginTop: 30
            }}
          >
            Languages
          </h3>
          <div className="skills">
            <div className="detailsSkill">English</div>
            <MyButton level={"very good"} />
            <div className="detailsSkill">Marathi</div>
            <MyButton level={"average"} />
            <div className="detailsSkill">Konkani</div>
            <MyButton level={"excellent"} />
            <div className="detailsSkill">Hindi</div>
            <MyButton level={"good"} />
          </div>
        </div>
      </div>
    </div>
  );
}

const skill = {
  sk1:
    "C++ , C , MySQL , CSS , HTML , Reactjs , UI-UX design using Figma , webflow",
  lv1: "good",
  sk2: "Problem Solving",
  lv2: " very good",
  sk3: "Analytical Thinking",
  lv3: "very good",
  sk4: "Leadership",
  lv4: "very good",
  sk5: "Decision Making",
  lv5: "very good",
  sk6: "Product Building , Marketing , Customer Communication skill",
  lv6: "very good"
};
