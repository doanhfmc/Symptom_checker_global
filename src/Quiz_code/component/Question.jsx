/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionsData } from "../Data.js";
import "./Question.css";
import { useBearStore } from "../store/app.js";
import ReactGA from "react-ga4";
import Next from "../../img/btn red.png";
import DisabledNext from "../../img/btn.png";
import Yes_sel from "../../img/03 _ Co.png";
import No_sel from "../../img/03 _ Khong.png";
import arrow from "../../img/Button_img/mui ten.png";

function Question({ condition }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [answers, setAnswers] = useState([]);
  const [answers_select, setAnswers_select] = useState([]);
  const [showRef, setShowRef] = useState([]);
  const question = questionsData[condition][currentQuestion - 1];
  const [answersid, setAnswerid] = useState([]);
  const [type, setType] = useState("multi");
  const { increasePopulation, dataSelect } = useBearStore();
  const navigate = useNavigate();
  console.log(dataSelect);
  useEffect(() => {
    setAnswers_select(
      dataSelect?.length + 1 > question?.id
        ? dataSelect[question?.id]?.selectedAnswers || []
        : []
    );
  }, [question?.id]);
  const handleAnswer = (answer) => {
    switch (type) {
      case "multi":
        if (answers_select.includes(answer._id)) {
          setAnswers_select(
            answers_select.filter((item) => item !== answer._id)
          );
          setAnswerid(answer._id);
        } else {
          setAnswers_select([...answers_select, answer._id]);
          setAnswerid(answer._id);
        }
        break;
      case "single":
        if (answers_select.includes(answer._id)) {
          setAnswers_select(
            answers_select.filter((item) => item !== answer._id)
          );
          setAnswerid(null);
        } else {
          setAnswers_select([answer._id]);
          setAnswerid(answer._id);
        }
        break;

      default:
        break;
    }

    // setAnswers([...answers, answer]);
  };

  useEffect(() => {
    if (answersid === 10) {
      setAnswers_select([answers_select[answers_select.length - 1]]);
      setType("single");
      return;
    } else {
      setType("multi");
    }
    if (question?.id === 2 || question?.id === 3) {
      setType("single");
    }
  }, [question?.id, answersid]);

  const nextPage = () => {
    ReactGA.event({
      event: "next_button_click",
      category: "User Interaction",
      action: `ID  ${answersid} của câu hỏi ${question?.id} của nấm da  `,
      label: `câu trả lời ${answersid}`,
    });

    increasePopulation({
      //
      questionId: question.id,
      questionText: question.text,
      questionDetail: question.text_1,
      selectedAnswers: [...new Set(answers_select)],
    });
    setCurrentQuestion(currentQuestion + 1);
    setAnswers_select([]);
    setAnswerid(null);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
    switch (answersid) {
      case 20:
        break;
      case 21:
        break;
      case null:
        break;
      case 30:
        navigate("/nam-da-do-dong-vat");
        break;
      case 31:
        navigate("/hac-lao");
        break;
      case 22:
        navigate("/nam-ke-chan");
        break;
      case 23:
        navigate("/nam-ben");
        break;
      case 24:
        navigate("/lang-ben");
        break;
      case 25:
        navigate("/viem-da-nep-ke");
        break;
      default:
        break;
    }
  };
  const columnClass =
    question?.options.length === 6
      ? "three-columns"
      : question?.options.length === 4
      ? "two-columns"
      : "one-columns";
  return (
    <div>
      <div
        className="question_2"
        onClick={(e) => {
          e.stopPropagation();
          setShowRef([]);
        }}
      >
        <div className="question_title">
          <p className="question">
            {questionsData[condition][currentQuestion - 1]?.text_1}
          </p>
          <p className="question-option">
            {questionsData[condition][currentQuestion - 1]?.text}
          </p>
          <p className="question-type">
            {questionsData[condition][currentQuestion - 1]?.type}
          </p>
        </div>
        <div className={`option-container ${columnClass} `}>
          {questionsData[condition][currentQuestion - 1]?.options.map(
            (option, index) =>
              questionsData[condition][currentQuestion - 1]?.id !== 3 ? (
                <button
                  className={`${
                    questionsData[condition][currentQuestion - 1]?.id !== 1
                      ? "container1"
                      : "container2"
                  } `}
                  key={index}
                  onClick={() => handleAnswer(option)} // Thêm logic sự kiện click
                >
                  <img
                    className={`${
                      questionsData[condition][currentQuestion - 1]?.id !== 1
                        ? "circle-img1"
                        : "circle-img"
                    } `}
                    src={option?.img}
                    alt={option?.text}
                  />
                  <div
                    className={` ${
                      questionsData[condition][currentQuestion - 1]?.id === 1
                        ? answers_select?.includes(option?._id)
                          ? "activeBG1"
                          : "content-box1"
                        : answers_select?.includes(option?._id)
                        ? "activeBG"
                        : "content-box"
                    }`}
                  >
                    <div
                      className={`${
                        questionsData[condition][currentQuestion - 1]?.id === 2
                          ? "Text_as"
                          : "Text1"
                      } `}
                      style={{}}
                    >
                      {option?.text}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "start",

                        marginTop: 25,
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      {option?.desc && (
                        <p
                          style={{}}
                          onClick={(e) => {
                            e.stopPropagation();

                            setShowRef([
                              ...showRef,
                              {
                                id: option._id,
                                show: !showRef.filter(
                                  (item) => item.id === option._id
                                )[0]?.show,
                              },
                            ]);
                          }}
                          className={`${
                            answers_select?.includes(option?._id)
                              ? "Ref_sel"
                              : "Ref"
                          }`}
                        >
                          {showRef.filter((item) => item.id === option._id)[0]
                            ?.show && (
                            <span
                              className={`${
                                answers_select?.includes(option?._id)
                                  ? "Line_sel"
                                  : "Line"
                              }`}
                              style={{}}
                            ></span>
                          )}
                          Reference source
                          {!showRef.filter((item) => item.id === option._id)[0]
                            ?.show ? (
                            <img src={arrow} alt="arrow" />
                          ) : (
                            <img
                              src={arrow}
                              alt="arrow"
                              style={{
                                transform: "unset",
                              }}
                            />
                          )}
                        </p>
                      )}
                      {showRef.filter((item) => item.id === option._id)[0]
                        ?.show && (
                        <p
                          className="show_desc"
                          style={{
                            fontSize: 12,
                            position: "relative",
                            top: 8,
                            right: 0,
                            marginBottom: 10,
                          }}
                        >
                          {option?.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ) : (
                <div className="Q3">
                  <div className="Container_Q3">
                    <img
                      key={index}
                      onClick={() => handleAnswer(option)}
                      src={
                        answersid === option._id && option._id === 30
                          ? Yes_sel
                          : answersid === option._id
                          ? No_sel
                          : option?.img
                      }
                      alt={option?.text}
                    />
                  </div>
                </div>
              )
          )}
          <div></div>
          {question?.options.length === 4 ||
          question?.options.length === 2 ? null : (
            <div></div>
          )}
        </div>
        <div className="Next_1">
          <button
            className="Btn_Next"
            onClick={nextPage}
            disabled={answers_select.length === 0}
          >
            <img
              src={answers_select.length === 0 ? DisabledNext : Next}
              alt="Next Button"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
