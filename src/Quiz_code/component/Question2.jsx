import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionsData } from "../Data.js";
import "./Question.css";
import { useBearStore } from "../store/app.js";
import Next from "../../img/Gyne/Tiep tuc xanh.png";
import DisabledNext from "../../img/Gyne/Tiep tuc xam.png";
import "./Question2.css";
import ReactGA from "react-ga4";
import TopDesk from "../../img/Gyne/Top+Bot/Top Desk 1280x270.png";
import TopMob from "../../img/Gyne/Top+Bot/top MO 960x400.png";
import BotDesk from "../../img/Gyne/Top+Bot/Bot Desk 1280x270.png";
import BotMob from "../../img/Gyne/Top+Bot/bot MO 960x248.png";
function Question2({ condition }) {
  const { increasePopulation, dataSelect } = useBearStore();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const question = questionsData[condition][currentQuestion - 1];
  // const [answers, setAnswers] = useState([]);
  const [answers_select, setAnswers_select] = useState([]);
  const [answersid, setAnswerid] = useState([]);
  const [type, setType] = useState("single");
  const navigate = useNavigate();
  console.log(dataSelect);
  useEffect(() => {
    setAnswers_select(
      dataSelect?.length + 1 > question?.id
        ? dataSelect[question?.id]?.selectedAnswers2 || []
        : []
    );
  }, [question?.id]);
  console.log(answers_select);
  useEffect(() => {
    if (answersid.includes(10) || answersid.includes(83)) {
      setAnswers_select([answers_select[answers_select.length - 1]]);
      setType("single");
      return;
    } else {
      setType("multi");
    }
    if (question?.id === 1 || question?.id === 8) {
      setType("multi");
    } else setType("single");
  }, [question?.id, answersid]);

  const handleAnswer = (answer) => {
    switch (type) {
      case "multi":
        if (answers_select.includes(answer.text)) {
          setAnswers_select(
            answers_select?.filter((item) => item !== answer.text)
          );
          setAnswerid(answersid.filter((item) => item !== answer._id));
        } else {
          setAnswers_select([...answers_select, answer.text]);
          setAnswerid([...answersid, answer._id]);
        }
        break;
      case "single":
        if (answers_select.includes(answer.text)) {
          setAnswers_select(
            answers_select?.filter((item) => item !== answer.text)
          );
          setAnswerid([]);
        } else {
          setAnswers_select([answer.text]);
          setAnswerid([answer._id]);
        }
        break;

      default:
        break;
    }

    // setAnswers([...answers, answer]);
  };

  const nextPage = () => {
    ReactGA.event({
      event: "next_button_click",
      category: "User Interaction",
      action: `ID  ${answersid} của câu hỏi ${question?.id} của Nhiễm khuẩn `,
      label: `câu trả lời ${answersid}`,
    });
    increasePopulation({
      //
      questionId: question.id,
      questionText: question.text,
      questionDetail: question.text_1,
      [`answer${currentQuestion}`]: [...new Set(answersid)],
      selectedAnswers2: [...new Set(answers_select)],
    });
    setCurrentQuestion(currentQuestion + 1);
    setAnswers_select([]);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  useEffect(() => {
    if (dataSelect.length >= 5) {
      if (!dataSelect[1]?.answer1?.includes(16)) {
        if (
          dataSelect[2]?.answer2?.includes(20) &&
          dataSelect[4]?.answer4?.includes(43)
        ) {
          navigate("/nhiem-nam-am-dao");
          return;
        }
        if (
          dataSelect[2]?.answer2?.includes(21) &&
          dataSelect[4]?.answer4?.includes(42)
        ) {
          navigate("/viem-am-dao");
          return;
        }
        navigate("/trieu-chung-khac");
        return;
      } else {
        if (
          dataSelect[2]?.answer2?.includes(20) &&
          dataSelect[4]?.answer4?.includes(43) &&
          dataSelect[8]?.answer8?.includes(83)
        ) {
          navigate("/trieu-chung-khac");
          return;
        }
        if (
          dataSelect[2]?.answer2?.includes(21) &&
          dataSelect[4]?.answer4?.includes(42) &&
          dataSelect[8]?.answer8?.includes(83)
        ) {
          navigate("/trieu-chung-khac");
          return;
        }
        if (
          dataSelect[2]?.answer2?.includes(20) &&
          dataSelect[4]?.answer4?.includes(43) &&
          dataSelect.length === 9
        ) {
          navigate("/trieu-chung-khac");
          return;
        }
        if (
          dataSelect[2]?.answer2?.includes(21) &&
          dataSelect[4]?.answer4?.includes(42) &&
          dataSelect.length === 9
        ) {
          navigate("/trieu-chung-khac");
          return;
        }
      }

      if (
        !dataSelect[7]?.answer7?.includes(70) &&
        dataSelect[2]?.answer2?.includes(20) &&
        dataSelect[4]?.answer4?.includes(43) &&
        dataSelect.length === 8
      ) {
        navigate("/trieu-chung-khac");
        return;
      }
      if (
        !dataSelect[7]?.answer7?.includes(70) &&
        dataSelect[2]?.answer2?.includes(21) &&
        dataSelect[4]?.answer4?.includes(42) &&
        dataSelect.length === 8
      ) {
        navigate("/trieu-chung-khac");
        return;
      }
      if (!dataSelect[7]?.answer7?.includes(70) && dataSelect.length === 8) {
        navigate("/trieu-chung-khac");
        return;
      }
    }
    if (dataSelect.length === 9) {
      navigate("/nhiem-trung-duong-tieu");
    }
    if (dataSelect.length === 9 && dataSelect[8]?.answer8?.includes(83)) {
      navigate("/trieu-chung-khac");
    }
  }, [dataSelect.length]);
  const [topImage, setTopImage] = useState(
    window.innerWidth <= 768 ? TopMob : TopDesk
  );

  useEffect(() => {
    const handleResize = () => {
      setTopImage(window.innerWidth <= 768 ? TopMob : TopDesk);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [botImage, setBottomImage] = useState(
    window.innerWidth <= 768 ? BotMob : BotDesk
  );

  useEffect(() => {
    const handleResize = () => {
      setBottomImage(window.innerWidth <= 768 ? BotMob : BotDesk);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const columnClass =
    question?.id === 8
      ? "three_column1"
      : question?.id === 5 || question?.id === 6 || question?.id === 7
      ? "two-column2"
      : question?.id === 2 || question?.id === 3
      ? "two_column3"
      : "two_column1";

  return (
    <div className="background_question2">
      <div className="question2_2">
        <div className="title_question2">
          <img src={topImage} alt="top background" />
          <div
            style={{
              position: "absolute",
            }}
          >
            <p className="number_question">
              {questionsData[condition][currentQuestion - 1]?.text_1}
            </p>
            <div className="center_q">
              {" "}
              <p className="option_question">
                {questionsData[condition][currentQuestion - 1]?.text}
              </p>
            </div>

            <p className="type_question">
              {questionsData[condition][currentQuestion - 1]?.type}
            </p>
          </div>
        </div>

        <div
          className={`option-container2  ${columnClass}`}
          style={question?.id !== 8 ? {} : {}}
        >
          {questionsData[condition][currentQuestion - 1]?.options.map(
            (option, index) =>
              questionsData[condition][currentQuestion - 1]?.id === 2 ||
              questionsData[condition][currentQuestion - 1]?.id === 3 ||
              questionsData[condition][currentQuestion - 1]?.id === 4 ||
              questionsData[condition][currentQuestion - 1]?.id === 8 ? (
                <div className="option2" onClick={() => handleAnswer(option)}>
                  <div>
                    <div
                      className={` ${
                        answers_select?.filter((item) => item === option?.text)
                          ?.length !== 0
                          ? "img_red"
                          : "img_blue"
                      }`}
                    ></div>
                    {/* {question.id !== 5 && question.id !== 2 && ( */}
                    <img
                      className="img_as2"
                      key={index}
                      src={option?.img}
                      alt={option?.text}
                    />
                  </div>
                  <div className="text2_as">{option?.text}</div>
                  <div className="ref2_as">{option?.ref}</div>
                </div>
              ) : questionsData[condition][currentQuestion - 1]?.id === 1 ? (
                <div className="option3" onClick={() => handleAnswer(option)}>
                  <div>
                    <div
                      className={` ${
                        answers_select?.filter((item) => item === option?.text)
                          ?.length !== 0
                          ? "img_red1"
                          : "img_blue1"
                      }`}
                    ></div>

                    <img
                      className="img_as21"
                      key={index}
                      src={option?.img}
                      alt={option?.text}
                    />
                  </div>
                  <div className="text2_as1">{option?.text}</div>
                  <div className="ref2_as1">{option?.ref}</div>
                </div>
              ) : (
                <div className="Q3">
                  <div
                    className="Container_04 "
                    onClick={() => handleAnswer(option)}
                  >
                    <div>
                      <div
                        className={` ${
                          answers_select?.filter(
                            (item) => item === option?.text
                          )?.length !== 0
                            ? "img_red"
                            : "img_blue"
                        }`}
                      ></div>
                      {/* {question.id !== 5 && question.id !== 2 && ( */}
                      <img
                        className="img_as2"
                        key={index}
                        src={option?.img}
                        alt={option?.text}
                      />
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="Next_2">
          <img src={botImage} alt="bot background" />
          <div className="footer_Q2" style={{ position: "absolute" }}>
            <div className="disclaimer_footer">
              <p>
                Am Fam Physician. 2018 Mar 1;97(5):321-329; Sobel JD. Lancet
                2007;369:1961-71; Farr A et al. Mycoses 2021;64:583-602; CDC
                2022. Vaginal candidiasis.
                <a
                  style={{
                    textDecoration: "none",
                    color: "var(--color-white)",
                  }}
                  href="https://www.cdc.gov/fungal/diseases/candidiasis/genital/index.html"
                  target="blank"
                >
                  https://www.cdc.gov/fungal/diseases/candidiasis/genital/index.html
                </a>
                ; Nasir R et al. Europasian J Med Sci 2023;5(1):1-10
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="Btn_Next2"
                onClick={nextPage}
                disabled={answers_select?.length === 0}
              >
                <img
                  src={answers_select?.length === 0 ? DisabledNext : Next}
                  alt="Next Button"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question2;
