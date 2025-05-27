import { useBearStore } from "../../store/app.js";
import { useEffect, useState } from "react";
import "./Result_1.css";
import thumbmain from "../../../img/Result_img/viemdanepke-1080x630.jpg";
import thumbslide1 from "../../../img/Thumb_Slide/06 slider-viemdanepke 1.jpg";
import thumbslide2 from "../../../img/Thumb_Slide/06 slider-viemdanepke 2.jpg";
import Arrow_prev from "../../../img/Button_img/slider icon 2.png";
import Arrow_next from "../../../img/Button_img/slider icon.png";
import Btn_Sol from "../../../img/Eng - Export/Fungus/button tim hieu.png";
import arrow from "../../../img/Button_img/mui ten.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { questionsData } from "../../Data.js";

// Data slide Line 17-84
const sliderData = [
  {
    title: <p className="Title6">Erythrasma </p>,
    description: (
      <ul
        style={{
          margin: "20px",
          textAlign: "left",
        }}
      >
        <li>
          Erythrasma is a bacterial infection typically affects adults
          <sup style={{ fontSize: 12 }}>12</sup>and is associated with hot,
          humid climate; more common in obese, diabetic and elderly individuals
          <sup style={{ fontSize: 12 }}>12,13</sup>{" "}
        </li>
        <li style={{ paddingTop: "4px" }}>
          Erythrasma can spread to other parts of the body
          <sup style={{ fontSize: 12 }}>13</sup>.
        </li>
      </ul>
    ),
    img: thumbslide1,
    ref: (
      <>
        12. Forouzan P, Cohen PR. Erythrasma Revisited: Diagnosis, Differential
        Diagnoses, and Comprehensive Review of Treatment. Cureus. 2020;
        12(9):e10733. <br />
        13. Groves JB, Nassereddin A, Freeman AM. Erythrasma. [Updated 2021 Aug
        11]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls
        Publishing; 2022 Jan. Available from:
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK513352/" target="_blank">
          https://www.ncbi.nlm.nih.gov/books/NBK513352/
        </a>
        .
      </>
    ),
  },
  {
    title: (
      <p className="Title6">
        CTo prevent Erythrasma <sup style={{ fontSize: 12 }}>13</sup>
      </p>
    ),
    description: (
      <ul style={{ margin: "20px", textAlign: "justify" }}>
        <li>Exercising frequently and losing excess weight.</li>
        <li>Wearing light, cotton clothing.</li>
        <li>Maintaining good personal hygiene.</li>

        <li>Keeping skin folds dry.</li>
        <li>Limiting intake of sugary foods.</li>
      </ul>
    ),
    ref: (
      <>
        13. Groves JB, Nassereddin A, Freeman AM. Erythrasma. [Updated 2021 Aug
        11]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls
        Publishing; 2022 Jan. Available from:
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK513352/" target="_blank">
          https://www.ncbi.nlm.nih.gov/books/NBK513352/
        </a>
        .
      </>
    ),
    img: thumbslide2,
  },
];

function Result6() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dataSelect = useBearStore((state) => state.dataSelect);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue =
        "Nếu bạn tiếp tục hành động này, tất cả dữ liệu hiện tại sẽ bị mất.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // ✅ Show 2 slides on page
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true, // ✅ Show navigation arrows
    prevArrow: <img className="prev-button" src={Arrow_prev} alt="Prev" />,
    nextArrow: <img className="next-button" src={Arrow_next} alt="Next" />,
    responsive: [
      {
        breakpoint: 768, // 📱  768px (mobile)
        settings: {
          slidesToShow: 1, // ❗ Show 1 slide on mobile
          slidesToScroll: 1,
          arrows: true, // show arrows on mobile
          dots: true, // Show dots on mobile
        },
      },
    ],
  };
  return (
    <div className="symptom-checker">
      {/* Result Section */}
      <section className="result">
        {" "}
        <div className="section_rìght">
          <img
            src={thumbmain}
            alt="Dấu hiệu điển hình của hăm kẽ do vi khuẩn"
          />
        </div>
        <div className="section_left">
          {" "}
          <p className="tilte_sick">
            Based on the symptoms you described, you may have
          </p>
          <p className="sick">ERYTHRASMA</p>
          <a
            href="https://www.canesten.com.vn/moi-dieu-ban-can-biet-ve-ham-ke-do-vi-khuan"
            target="blank"
          >
            <img src={Btn_Sol} alt="ERYTHRASMA" />{" "}
          </a>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider">
        <p className="content_1">DO YOU KNOW?</p>
        <p className="content_2"></p>

        <div className="slider-container">
          <Slider {...settings}>
            {sliderData.map((slide, index) => (
              <div key={index} className="slide6">
                <img src={slide.img} alt={slide.title} />
                <p style={{ fontSize: 24, fontWeight: 600, marginTop: 20 }}>
                  {slide.title}
                </p>
                <p style={{ fontWeight: 300 }} className="slide_desc6">
                  {slide.description}
                </p>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 300,
                    position: "absolute",
                    bottom: 20,
                  }}
                  className="slide_ref"
                >
                  {slide.ref}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div className="Dropdown_result">
        <div onClick={toggleDropdown} className="Info">
          {isOpen ? (
            <div className="Dropdown_result1">
              <p style={{ background: "#172bc1" }}>
                REVIEW YOUR ANSWERS{" "}
                <img src={arrow} alt="VIÊM DA NẾP KẼ DO VI KHUẨN" />{" "}
              </p>
            </div>
          ) : (
            <div className="Dropdown_result2">
              <p style={{ background: "#172bc1" }}>
                REVIEW YOUR ANSWERS{" "}
                <img src={arrow} alt="VIÊM DA NẾP KẼ DO VI KHUẨN" />{" "}
              </p>
            </div>
          )}
        </div>
        <div
          className="Xem_KQ"
          style={{
            backgroundColor: "#fff",
            padding: "0",
            maxHeight: isOpen ? "1200px" : "0",

            transition: "max-height 1.5s ease",
          }}
        >
          {isOpen && (
            <div className="expand_result">
              {dataSelect && dataSelect.length > 1 ? (
                dataSelect.slice(1).map((item, index) => (
                  <div
                    key={index}
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      padding: "0",
                    }}
                  >
                    <div className="Drop_As">
                      <div className="question_Drop">
                        <span className="Queston_Drop" style={{}}>
                          Question {index + 1}:{" "}
                        </span>
                        <span className="Queston_Drop_Title" style={{}}>
                          {item.questionText || "Không có dữ liệu"}
                        </span>
                      </div>
                      <div className="Answer_Drop" style={{}}>
                        <span style={{ fontWeight: "normal" }}>
                          <strong>Your Answers: </strong>
                          {index !== 1 &&
                            questionsData.skin
                              .filter((item_) => item_.id === index + 1)[0]
                              .options.filter((op) =>
                                item?.selectedAnswers.includes(op._id)
                              )
                              .map((item__) => item__?.text)
                              .join(". ")}
                          {index === 1 &&
                            questionsData.skin
                              .filter((item_) => item_.id === index + 1)[0]
                              .options.filter((op) =>
                                item?.selectedAnswers.includes(op._id)
                              )[0]?.text}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center", padding: "20px" }}>NO</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result6;
