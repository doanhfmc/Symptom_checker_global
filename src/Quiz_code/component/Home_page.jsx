import { useNavigate } from "react-router-dom";
import "./Home_page.css";
import start from "../../img/Eng - Export/Fungus/btn Start.png";
const Home_page = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="Container">
        <h1 style={{ display: "none" }}></h1>
        <div className="container_all">
          <div className="header_first"></div>
          <div className="footer_first">
            <div className="footer_first_content">
              <p>
                Welcome to your personal{" "}
                <strong>Canesten® Symptom Checker.</strong> Experiencing
                itching, discomfort and soreness? Wondering what it might be, or
                just want some information and treatment options?
                <br />
                <br />
                The <strong>Canesten® Symptom Checker</strong> swill help you
                better understand your symptoms and help guide you on a
                treatment to help get you back to you. <br /> <br />
                If you are under 18 or over 60, it is recommended you speak to
                your healthcare professional before continuing.
                <br />
                <br />
              </p>
            </div>
            <div className="footer_first_button">
              <img
                src={start}
                alt="Nhận diện bệnh nấm da hoặc viêm âm hộ/viêm nhiễm vùng kín nhanh chóng với Công cụ Kiểm Tra Triệu Chứng"
                onClick={() => navigate("/Option")}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_page;
