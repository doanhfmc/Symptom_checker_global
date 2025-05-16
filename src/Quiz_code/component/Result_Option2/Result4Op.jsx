import React, { useState } from "react";
import { useBearStore } from "../../store/app.js";
import "./ResultOp.css";
import CTA from "../../../img/Gyne/CTA3.png";
import img from "../../../img/Gyne/thumb khong co trieu chung.png";
import arrow from "../../../img/Button_img/mui ten.png";

const Result4Op = () => {
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
              alt="VIÊM ÂM ĐẠO DO VI KHUẨN, VIÊM NẤM ÂM ĐẠO"
            />
          </div>
          <div className="text_result_container">
            {" "}
            <span className="text_result">
              Triệu chứng của bạn có thể liên quan đến
            </span>
            <p className="text5_result">VIÊM ÂM ĐẠO DO VI KHUẨN,</p>
            <p className="text3_result">VIÊM ÂM ĐẠO DO NẤM,</p>
            <p className="text4_result">NHIỄM TRÙNG ĐƯỜNG TIỂU</p>
            <a
              href="https://www.canesten.com.vn/viem-nhiem-vung-kin "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CTA} alt="VIÊM ÂM ĐẠO DO VI KHUẨN, VIÊM NẤM ÂM ĐẠO" />
            </a>
          </div>
        </div>

        <div className="Dropdown_result_total">
          <div onClick={toggleDropdown} className="Info1">
            {isOpen ? (
              <div className="Dropdown_result3">
                <p style={{ background: "#172bc1" }}>
                  XEM LẠI CÂU TRẢ LỜI{" "}
                  <img
                    src={arrow}
                    alt="VIÊM ÂM ĐẠO DO VI KHUẨN, VIÊM NẤM ÂM ĐẠO"
                  />{" "}
                </p>
              </div>
            ) : (
              <div className="Dropdown_result4">
                <p style={{ background: "#172bc1" }}>
                  XEM LẠI CÂU TRẢ LỜI{" "}
                  <img
                    src={arrow}
                    alt="VIÊM ÂM ĐẠO DO VI KHUẨN, VIÊM NẤM ÂM ĐẠO"
                  />{" "}
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
                      <div className="Drop_As" style={{ paddingTop: 10 }}>
                        <div className="question_Drop">
                          <span className="Queston_Drop" style={{}}>
                            Câu hỏi {index + 1}:{" "}
                          </span>
                          <span className="Queston_Drop_Title2" style={{}}>
                            {item.questionText || "Không có dữ liệu"}
                          </span>
                        </div>
                        <div className="Answer_Drop2" style={{}}>
                          <span style={{ fontWeight: "normal" }}>
                            <strong>Bạn trả lời: </strong>
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

export default Result4Op;
