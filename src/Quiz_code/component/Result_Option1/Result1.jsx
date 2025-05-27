import { useBearStore } from "../../store/app.js";
import { useEffect, useState } from "react";
import "./Result_1.css";
import thumbmain from "../../../img/Result_img/thucung-1080x630.jpg";
import thumbslide1 from "../../../img/Thumb_Slide/02 slider-cham.jpg";
import thumbslide2 from "../../../img/Thumb_Slide/02 slider-thucung-viemdatietba.jpg";
import Arrow_prev from "../../../img/Button_img/slider icon 2.png";
import Arrow_next from "../../../img/Button_img/slider icon.png";
import Btn_Sol from "../../../img/Eng - Export/Fungus/button tim hieu.png";
import arrow from "../../../img/Button_img/mui ten.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { questionsData } from "../../Data.js";

// Data slide Line 17-100
const sliderData = [
  {
    title: (
      <p>
        Eczema <sup style={{ fontSize: 12 }}>1,2</sup>
      </p>
    ),
    description: (
      <ul
        style={{
          margin: "20px",
          textAlign: "left",
        }}
      >
        <li>
          Red coin-shaped plaques <sup style={{ fontSize: 12 }}>1,2</sup>.{" "}
        </li>
        <li>
          Most lack central clearing<sup style={{ fontSize: 12 }}>2</sup>.
        </li>
        <li>
          {" "}
          Coexisting hyperpigmentation
          <sup style={{ fontSize: 12 }}>2</sup>.
        </li>

        <li>
          Commonly appears on lower legs, dorsal hands, extensor surface of arms{" "}
          <sup style={{ fontSize: 12 }}>2</sup>.
        </li>
      </ul>
    ),
    img: thumbslide1,
    ref: (
      <>
        1. Leung AKC, Lam JM, Leong KF, et al. Nummular Eczema: An Updated
        Review. Recent Pat Inflamm Allergy Drug Discov. 2020; 14(2):146–55. doi:
        10.2174/1872213X14666200810152246. <br />
        2. Kellawan K, Andrasik W. Not All Round Rashes Are Ringworm: A
        Differential Diagnosis of Annular and Nummular Lesions. Available from:{" "}
        <a
          href="https://www.reliasmedia.com/articles/143473-not-all-round-rashes-are-ringworm-a-differential-diagnosis-of-annular-and-nummular-lesions"
          target="blank"
        >
          https://www.reliasmedia.com/articles/143473-not-all-round-rashes-are-ringworm-a-differential-diagnosis-of-annular-and-nummular-lesions
        </a>
        .
      </>
    ),
  },
  {
    title: (
      <p>
        Seborrheic dermatitis<sup style={{ fontSize: 12 }}>3</sup>
      </p>
    ),
    description: (
      <ul style={{ margin: "20px", textAlign: "left" }}>
        <li>
          Firm, greasy, scales on the crown and frontal regions of the scalp.
        </li>
        <li>
          Yellowish-silvery scales in infants and red papules with silvery
          scales in adults.
        </li>
        <li>
          Commonly occurs in regions where sebaceous glands are present, such as
          the scalp, face and diaper area.
        </li>
      </ul>
    ),
    ref: (
      <>
        3. Tucker D, Masood S. Seborrheic Dermatitis. [Updated 2021 Aug 3]. In:
        StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2022
        Jan. Available from:{" "}
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK551707/." target="blank">
          https://www.ncbi.nlm.nih.gov/books/NBK551707/.
        </a>
      </>
    ),
    img: thumbslide2,
  },
];

function Result1() {
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
    slidesToShow: 2, // ✅ Show 2 slide on page
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true, // ✅ Show default navigation buttons
    // ❗ If you want to hide navigation buttons, set to false
    prevArrow: <img className="prev-button" src={Arrow_prev} alt="Prev" />,
    nextArrow: <img className="next-button" src={Arrow_next} alt="Next" />,
    responsive: [
      {
        breakpoint: 768, // 📱 768px (mobile)
        settings: {
          slidesToShow: 1, // ❗Show 1 slide on mobile
          slidesToScroll: 1,
          arrows: true, // Hide navigation buttons on mobile if needed
          dots: true, // Show dots for slide navigation
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
            alt="Thú cưng có thể là nguồn lây nhiễm bệnh nấm da"
          />
        </div>
        <div className="section_left">
          {" "}
          <p className="tilte_sick" style={{}}>
            Based on the symptoms you described, you may have
          </p>
          <p className="sick" style={{}}>
            PET-RELATED SKIN FUNGUS INFECTION
          </p>
          <a
            href="https://www.canesten.com.vn/moi-dieu-ban-can-biet-ve-nam-da-do-thu-cung"
            target="blank"
          >
            <img src={Btn_Sol} alt="PET-RELATED SKIN FUNGUS INFECTION" />{" "}
          </a>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider">
        <p className="content_1" style={{}}>
          DO YOU KNOW?
        </p>
        <p className="content_2" style={{}}>
          Difference between Pet-related fungal infection & other skin
          infections:
        </p>

        <div className="slider-container">
          <Slider {...settings}>
            {sliderData.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.img} alt={slide.title} />
                <p
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    marginTop: 20,
                  }}
                >
                  {slide.title}
                </p>
                <p style={{ fontWeight: 300 }} className="slide_desc">
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
                <img src={arrow} alt="NẤM DA LIÊN QUAN ĐẾN ĐỘNG VẬT NUÔI" />{" "}
              </p>
            </div>
          ) : (
            <div className="Dropdown_result2">
              <p style={{ background: "#172bc1" }}>
                REVIEW YOUR ANSWERS{" "}
                <img src={arrow} alt="NẤM DA LIÊN QUAN ĐẾN ĐỘNG VẬT NUÔI" />{" "}
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
                    <div className="Drop_As" style={{}}>
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
                <p style={{ textAlign: "center", padding: "20px" }}>No data</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result1;
