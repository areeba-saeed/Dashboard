import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top-new">
          <h1 className="heading-top">{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form className="form-new">
              <div className="formInput">
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

             
                <div className="formInput" >
                  <label>Name</label>
                  <input type="text" placeholder="Areeba" />
                  <label className="labels">Email</label>
                  <input type="email" placeholder="areeba@gmail.com" />
                  <label className="labels">No of Devices</label>
                  <input type="number" placeholder="22" />
                  {/* <label className="labels">DeiveId</label>
                  <input type="text" placeholder="1212234" multiple/> */}
                </div>
             
              <button className="createButton">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;