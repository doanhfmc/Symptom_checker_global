import { useBearStore } from "../../store/app.js";
import { useEffect, useState } from "react";
import "./Result_1.css";
import thumbmain from "../../../img/Result_img/viemdanepke-1080x630.jpg";
import thumbslide1 from "../../../img/Thumb_Slide/06 slider-viemdanepke 1.jpg";
import thumbslide2 from "../../../img/Thumb_Slide/06 slider-viemdanepke 2.jpg";
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
    title: <p className="Title6">Bệnh viêm da nếp kẽ</p>,
    description: (
      <ul
        style={{
          margin: "20px",
          textAlign: "justify",
        }}
      >
        <li>
          Bệnh viêm da nếp kẽ do vi khuẩn là một dạng nhiễm khuẩn da thường gặp
          ở người lớn<sup style={{ fontSize: 12 }}>12</sup>, đặc biệt trong điều
          kiện thời tiết nóng ẩm. Bệnh phổ biến hơn ở những người: Béo phì, Tiểu
          đường, Người cao tuổi
          <sup style={{ fontSize: 12 }}>12,13</sup>{" "}
        </li>
        <li style={{ paddingTop: "4px" }}>
          Bệnh Viêm da nếp kẽ do vi khuẩn có thể lan sang các vùng da khác trên
          cơ thể nếu không được điều trị<sup style={{ fontSize: 12 }}>13</sup>.
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
        Cách phòng ngừa bệnh Viêm da nếp kẽ{" "}
        <sup style={{ fontSize: 12 }}>13</sup>
      </p>
    ),
    description: (
      <ul style={{ margin: "20px", textAlign: "justify" }}>
        <li>Tập thể dục thường xuyên và duy trì cân nặng hợp lý.</li>
        <li>Mặc quần áo thoáng mát, chất liệu cotton.</li>
        <li>Giữ vệ sinh cá nhân sạch sẽ.</li>

        <li>Giữ cho vùng nếp gấp da luôn khô thoáng.</li>
        <li>Hạn chế ăn thực phẩm chứa nhiều đường.</li>
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
    slidesToShow: 2, // ✅ Hiển thị 2 slide mỗi lần
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
          <img
            src={thumbmain}
            alt="Dấu hiệu điển hình của hăm kẽ do vi khuẩn"
          />
        </div>
        <div className="section_left">
          {" "}
          <p className="tilte_sick">Có thể bạn đang gặp bệnh</p>
          <p className="sick">VIÊM DA NẾP KẼ DO VI KHUẨN</p>
          <a
            href="https://www.canesten.com.vn/moi-dieu-ban-can-biet-ve-ham-ke-do-vi-khuan"
            target="blank"
          >
            <img src={Btn_Sol} alt="VIÊM DA NẾP KẼ DO VI KHUẨN" />{" "}
          </a>
        </div>
      </section>

      {/* Slider Section */}
      <section className="slider">
        <p className="content_1">BẠN CÓ BIẾT?</p>
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
                XEM LẠI CÂU TRẢ LỜI{" "}
                <img src={arrow} alt="VIÊM DA NẾP KẼ DO VI KHUẨN" />{" "}
              </p>
            </div>
          ) : (
            <div className="Dropdown_result2">
              <p style={{ background: "#172bc1" }}>
                XEM LẠI CÂU TRẢ LỜI{" "}
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
                          Câu hỏi {index + 1}:{" "}
                        </span>
                        <span className="Queston_Drop_Title" style={{}}>
                          {item.questionText || "Không có dữ liệu"}
                        </span>
                      </div>
                      <div className="Answer_Drop" style={{}}>
                        <span style={{ fontWeight: "normal" }}>
                          <strong>Bạn trả lời: </strong>
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

export default Result6;
