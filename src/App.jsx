import "./index.css";
import Homepage from "./Quiz_code/component/Home_page.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Quiz_code/Layout.jsx";
import Optionquestion from "./Quiz_code/component/Option_question.jsx";
import Question from "./Quiz_code/component/Question.jsx";
import Result from "./Quiz_code/component/Result_Option1/Result1.jsx";
import Result2 from "./Quiz_code/component/Result_Option1/Result2.jsx";
import Result3 from "./Quiz_code/component/Result_Option1/Result3.jsx";
import Result4 from "./Quiz_code/component/Result_Option1/Result4.jsx";
import Result5 from "./Quiz_code/component/Result_Option1/Result5.jsx";
import Result6 from "./Quiz_code/component/Result_Option1/Result6.jsx";
import Question2 from "./Quiz_code/component/Question2.jsx";
// import ReactGA from "react-ga4";
import Result1Op from "./Quiz_code/component/Result_Option2/Result1Op.jsx";
import Result2Op from "./Quiz_code/component/Result_Option2/Result2Op.jsx";
import Result3Op from "./Quiz_code/component/Result_Option2/Result3Op.jsx";
import Result4Op from "./Quiz_code/component/Result_Option2/Result4Op.jsx";
import GAListener from "./Quiz_code/component/GAListener";
import ScrollToTop from "./Quiz_code/component/scroll.js";

const App = () => {
  return (
    <HashRouter>
      <GAListener />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Option" element={<Optionquestion />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Home_page.jsx (line 35)*/}
          <Route path="skin" element={<Question condition="skin" />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Option_question.jsx (line 55)*/}
          <Route path="gyne" element={<Question2 condition="intimate" />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Option_question.jsx (line 67)*/}
          <Route path="nam-da-do-dong-vat" element={<Result />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Question.jsx (line 109)*/}
          <Route path="hac-lao" element={<Result2 />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Question.jsx (line 112) */}
          <Route path="nam-ke-chan" element={<Result3 />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Question.jsx (line 115) */}
          <Route path="nam-ben" element={<Result4 />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Question.jsx (line 118) */}
          <Route path="lang-ben" element={<Result5 />} />{" "}
          {/*// IMPORTANT: If this URL is changed, update the logic in Question.jsx (line 121) */}
          <Route path="viem-da-nep-ke" element={<Result6 />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Question.jsx (line 124) */}
          <Route path="nhiem-nam-am-dao" element={<Result1Op />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Question2.jsx (line 109) */}
          <Route path="viem-am-dao" element={<Result2Op />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Question2.jsx (line 116) */}
          <Route path="nhiem-trung-duong-tieu" element={<Result3Op />} />{" "}
          {/*// IMPORTANT: If this URL is changed, update the logic in Question2.jsx (line 180) */}
          <Route path="trieu-chung-khac" element={<Result4Op />} />{" "}
          {/* // IMPORTANT: If this URL is changed, update the logic in Question2.jsx (line 119 127 135 143 151 162 171 175 183) */}
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
