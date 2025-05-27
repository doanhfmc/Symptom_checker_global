import React, { useState } from "react";
import { useBearStore } from "../../store/app.js";
import "./ResultOp.css";
import CTA from "../../../img/Eng - Export/GYNE/CTA 1.png";
import img from "../../../img/Gyne/thumb viem tiet nieu.png";
import arrow from "../../../img/Button_img/mui ten.png";

const Result3Op = () => {
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
              alt="Nhiễm trùng đường tiểu - một bệnh lý khá phổ biến"
            />
          </div>
          {/* Header layout */}
          <div className="text_result_container">
            {" "}
            <span className="text_result_123">
              Based on the symptoms you described, you may have{" "}
            </span>
            <p className="text3_result1">URINARY TRACT INFECTIONS</p>
            <a
              href="https://www.canesten.com.vn/moi-dieu-can-biet-ve-nhiem-trung-duong-tieu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CTA} alt="URINARY TRACT INFECTIONS" />
            </a>
          </div>
        </div>
        {/* Answers */}
        <div className="Dropdown_result_total">
          <div onClick={toggleDropdown} className="Info1">
            {isOpen ? (
              <div className="Dropdown_result3">
                <p style={{ background: "#172bc1" }}>
                  REVIEW YOUR ANSWERS{" "}
                  <img src={arrow} alt="NHIỄM TRÙNG NƯỚC TIỂU" />{" "}
                </p>
              </div>
            ) : (
              <div className="Dropdown_result4">
                <p style={{ background: "#172bc1" }}>
                  REVIEW YOUR ANSWERS{" "}
                  <img src={arrow} alt="NHIỄM TRÙNG NƯỚC TIỂU" />{" "}
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
                            <strong>Your Answers: </strong>
                            {item.selectedAnswers2.join(". ") ||
                              "Chưa chọn đáp án"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ textAlign: "center", padding: "20px" }}>
                    No data
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

export default Result3Op;
