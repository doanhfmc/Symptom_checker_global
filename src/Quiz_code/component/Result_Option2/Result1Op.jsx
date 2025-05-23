import React, { useState } from "react";
import { useBearStore } from "../../store/app.js";
import "./ResultOp.css";
import CTA from "../../../img/Eng - Export/GYNE/CTA 1.png";
import img from "../../../img/Gyne/thumb nhiem nam am dao.png";
import arrow from "../../../img/Button_img/mui ten.png";
import icon_center from "../../../img/Gyne/icon ban co biet - nhiem nam am dao.png";
const Result1Op = () => {
  const dataSelect = useBearStore((state) => state.dataSelect);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="background_Result">
      <div className="Result_container">
        <div className="Sick_result">
          <div className="img_result">
            <img
              className=""
              src={img}
              alt="Nấm âm đạo và những dấu hiệu ngứa ngáy, khó chịu!"
            />
          </div>
          <div className="text_result_container">
            {" "}
            <span className="text_result_123">
              Based on the symptoms you described, you may have{" "}
            </span>
            <p className="text3_result1">VULVOVAGINAL CANDIDIASIS</p>
            <a
              href="https://www.canesten.com.vn/moi-dieu-ban-can-biet-ve-benh-nhiem-nam-am-dao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CTA} alt="VULVOVAGINAL CANDIDIASIS" />
            </a>
          </div>
        </div>
        <div className="center_container">
          <div className="img_leftRS">
            {" "}
            <img src={icon_center} alt="NHIỄM NẤM ÂM ĐẠO" />
          </div>
          <div className="text_rightRS">
            <p className="text1_center">DO YOU KNOW?</p>

            <p className="text2_center">
              <span>
                <span style={{ fontWeight: 600 }}>
                  {" "}
                  70-75% of women of reproductive age experience Vulvovaginal
                  Candidiasis (VVC) at least once in their life,
                </span>{" "}
                hich can be difficult to treat as 40-45% recur at least once and
                5-8% of patients develop persistent vaginitis (≥ 4 times/year)
                <sup>2</sup>.
              </span>
            </p>
            <p className="text3_center">
              2. Zeng et al. Biomed Research International. 2018; 9703754
            </p>
          </div>
        </div>
        <div className="Dropdown_result_total">
          <div onClick={toggleDropdown} className="Info1">
            {isOpen ? (
              <div className="Dropdown_result3">
                <p style={{ background: "#172bc1" }}>
                  REVIEW YOUR ANSWERS <img src={arrow} alt="NHIỄM NẤM ÂM ĐẠO" />{" "}
                </p>
              </div>
            ) : (
              <div className="Dropdown_result4">
                <p style={{ background: "#172bc1" }}>
                  REVIEW YOUR ANSWERS <img src={arrow} alt="NHIỄM NẤM ÂM ĐẠO" />{" "}
                </p>
              </div>
            )}
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "0",
              maxHeight: isOpen ? "1200px" : "0",
              marginBottom: 40,
              transition: "max-height 1.5s ease",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
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
                      <div className="Drop_As5" style={{ paddingTop: 10 }}>
                        <div className="question_Drop">
                          <span className="Queston_Drop" style={{}}>
                            Question {index + 1}:{" "}
                          </span>
                          <span className="Queston_Drop_Title2" style={{}}>
                            {item.questionText || "Không có dữ liệu"}
                          </span>
                        </div>
                        <div className="Answer_Drop2" style={{}}>
                          <span style={{ fontWeight: "normal" }}>
                            <strong> Your Answers: </strong>
                            {item.selectedAnswers2.join(". ") ||
                              "Chưa chọn đáp án"}

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
      </div>
    </div>
  );
};

export default Result1Op;
