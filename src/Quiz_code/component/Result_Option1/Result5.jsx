import { useBearStore } from "../../store/app.js";
import { useEffect, useState } from "react";
import "./Result_1.css";
import thumbmain from "../../../img/Result_img/langben-1080x630.jpg";
import thumbslide1 from "../../../img/Thumb_Slide/05 slider-vayphanhong.jpg";
import thumbslide2 from "../../../img/Thumb_Slide/05 slider-vaynenethegiot.jpg";
import thumbslide3 from "../../../img/Thumb_Slide/05 slider-bachbien.jpg";
import Arrow_prev from "../../../img/Button_img/slider icon 2.png";
import Arrow_next from "../../../img/Button_img/slider icon.png";
import Btn_Sol from "../../../img/Button_img/button tim hieu.png";
import arrow from "../../../img/Button_img/mui ten.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { questionsData } from "../../Data.js";

const sliderData = [
  {
    title: (
      <p>
        Pityriasis rosea<sup style={{ fontSize: 12 }}>1,2</sup>
      </p>
    ),
    description: (
      <ul
        style={{
          margin: "20px",
          textAlign: "left",
        }}
      >
        <li>Scaly pink eruptions. </li>
        <li>Begins as herald patch followed by a more generalised rash.</li>
        <li> May have "Christmas-tree" appearance.</li>
        <li>
          Commonly appears first on the trunk, neck, and proximal extremities.
        </li>
      </ul>
    ),
    img: thumbslide1,
    ref: (
      <>
        1. Kellawan K, Andrasik W. Not All Round Rashes Are Ringworm: A
        Differential Diagnosis of Annular and Nummular Lesions. [internet].
        [cited April 22, 2022]. Available from:
        <a
          href="https://www.reliasmedia.com/articles/143473-not-all-round-rashes-are-ringworm-a-differential-diagnosis-of-annular-and-nummular-lesions"
          target="_blank"
        >
          https://www.reliasmedia.com/articles/143473-not-all-round-rashes-are-ringworm-a-differential-diagnosis-of-annular-and-nummular-lesions.
        </a>{" "}
        2. Litchman G, Nair PA, Le JK. Pityriasis Rosea. [Updated 2022 May 8].
        In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing;
        2022 Jan-. Available from:{" "}
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK448091/" target="_blank">
          https://www.ncbi.nlm.nih.gov/books/NBK448091/
        </a>
        .
      </>
    ),
  },
  {
    title: (
      <p>
        Guttate psoriasis <sup style={{ fontSize: 12 }}>5</sup>
      </p>
    ),
    description: (
      <ul style={{ margin: "20px", textAlign: "left" }}>
        <li>Small drop-like lesions.</li>
        <li>
          Elongation of the dermal papillae, dilated superficial blood vessels,
          hypergranulosis, and parakeratosis.
        </li>
        <li>
          Previous history of streptococcal infection, typically pharyngitis or
          perianal streptococcus.
        </li>
      </ul>
    ),
    ref: (
      <>
        5. Saleh D, Tanner LS. Guttate Psoriasis. [Updated 2021 Aug 3]. In:
        StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2022
        Jan-. Available from:{" "}
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK482498/" target="_blank">
          https://www.ncbi.nlm.nih.gov/books/NBK482498/
        </a>
        .
      </>
    ),
    img: thumbslide2,
  },
  {
    title: (
      <p>
        Vitiligo <sup style={{ fontSize: 12 }}>3,4</sup>
      </p>
    ),
    description: (
      <ul style={{ margin: "20px", textAlign: "left" }}>
        <li>
          Loss of melanocytes from the skin, leading to non-scaly, chalky-white
          patches/spots with distinct margins
          <sup style={{ fontSize: 12 }}>3</sup>.
        </li>
        <li>
          First noted on the fingers, knuckles, around eyes and mouth, and on
          feet and genitalia<sup style={{ fontSize: 12 }}>4</sup>.
        </li>
      </ul>
    ),
    ref: (
      <>
        3. Bergqvist C, Ezzedine K. Vitiligo: A Review. Dermatology.
        2020;236(6):571-592. doi:10.1159/000506103. <br />
        4. Nordlund JJ. Vitiligo: a review of some facts lesser known about
        depigmentation. Indian J Dermatol. 2011 Mar;56(2):180-9. doi:
        10.4103/0019-5154.80413. PMID: 21716544; PMCID: PMC3108518.
      </>
    ),
    img: thumbslide3,
  },
];

function Result5() {
  const dataSelect = useBearStore((state) => state.dataSelect);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  //   const answers = location.state?.answers || [];
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
    slidesToShow: 3, // ✅ Hiển thị 2 slide mỗi lần
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true, // ✅ Hiển thị nút điều hướng mặc định
    prevArrow: <img className="prev-button" src={Arrow_prev} alt="Prev" />,
    nextArrow: <img className="next-button" src={Arrow_next} alt="Next" />,
    responsive: [
      {
        breakpoint: 768, // 📱 Khi màn hình nhỏ hơn 768px (mobile)
        settings: {
          slidesToShow: 1, // ❗ Hiển thị 1 slide
          slidesToScroll: 1,
          arrows: true, // Ẩn nút điều hướng trên mobile nếu cần
          dots: true, // Hiển thị chấm tròn để chuyển slide
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
          <img src={thumbmain} alt="Biểu hiện phổ biến của bệnh lang ben!" />
        </div>
        <div className="section_left">
          {" "}
          <p className="tilte_sick">
            Based on the symptoms you described, you may have
          </p>
          <p className="sick">PITYRIASIS VERSICOLOR</p>
          <a
            href="https://www.canesten.com.vn/Moi-dieu-ban-can-biet-ve-benh-lang-ben"
            target="blank"
          >
            <img src={Btn_Sol} alt="LANG BEN" />{" "}
          </a>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider">
        <p className="content_1">DO YOU KNOW?</p>
        <p className="content_2">
          Difference between Pityriasis Versicolor & "lookalike" conditions:
        </p>

        <div className="slider-container_3">
          <Slider {...settings}>
            {sliderData.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.img} alt={slide.title} />
                <p style={{ fontSize: 24, fontWeight: 600, marginTop: 20 }}>
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
                REVIEW YOUR ANSWERS <img src={arrow} alt="LANG BEN" />{" "}
              </p>
            </div>
          ) : (
            <div className="Dropdown_result2">
              <p style={{ background: "#172bc1" }}>
                REVIEW YOUR ANSWERS <img src={arrow} alt="LANG BEN" />{" "}
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

                          {/* {questionsData.skin
                            .filter((item_) => item_.id === index + 1)[0]
                            .options.filter(
                              (op) => op._id === item.selectedAnswers.join(",")
                            )[0]?.text || "Chưa chọn đáp án"} */}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ textAlign: "center", padding: "20px" }}>
                  Không có dữ liệu để hiển thị.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Footer */}
      {/* <footer className="footer">
        <p>
          This is a guide on conditions you may have and recommendations for
          suitable treatments. For more accurate diagnosis, please seek advice
          from your healthcare professional.
        </p>
      </footer> */}
    </div>
  );
}

export default Result5;
