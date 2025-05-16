import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../img/0 thumb 1.png";
import img2 from "../../img/0 thumb 2.png";
import "./Option_question.css";
import { useBearStore } from "../store/app";
import footer from "../../img/Button_img/footer curve-PC-crop.png";
import footerMobile from "../../img/footer curve.png";

const Option_question = () => {
  const { increasePopulation } = useBearStore();

  const navigate = useNavigate();
  const handleConditionSelect = (condition) => {
    increasePopulation({ condition });

    navigate(`/${condition}`);
  };
  const [footerImage, setFooterImage] = useState(
    window.innerWidth <= 768 ? footerMobile : footer
  );

  useEffect(() => {
    const handleResize = () => {
      setFooterImage(window.innerWidth <= 768 ? footerMobile : footer);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="quesiton_1"
      style={{
        flex: 1,

        display: "flex",
      }}
    >
      <div
        className="container_qs1"
        style={{
          flex: 1,
        }}
      >
        <div className="center-container" style={{}}>
          <div>
            <p className="title-container">
              What is your condition related to?
            </p>
          </div>
          <div className="card-container">
            <div
              className="card-wrapper"
              onClick={() => handleConditionSelect("skin")}
            >
              <div className="card">
                <img src={img1} alt="Skin fungus" />
                <p>
                  {" "}
                  <strong> Skin fungus</strong>
                </p>
              </div>
            </div>
            <div
              className="card-wrapper"
              onClick={() => handleConditionSelect("gyne")}
            >
              <div className="card">
                <img src={img2} alt="Gynecological infections" />
                <p>
                  <strong>Gynecological infections</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={footerImage}
          alt="footer"
          className="img_footer"
          style={{
            objectFit: "contain",
            width: "100vw",
          }}
        />
      </div>
    </div>
  );
};

export default Option_question;
