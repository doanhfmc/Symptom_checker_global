import "./index.css";

import Homepage from "./Quiz_code/component/Home_page.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Quiz_code/Layout.jsx";
import Optionquestion from "./Quiz_code/component/Option_question.jsx";
import Question from "./Quiz_code/component/Question.jsx";
import Result from "./Quiz_code/component/Result_Option1/Result1.jsx";
import React from "react";
import Result2 from "./Quiz_code/component/Result_Option1/Result2.jsx";
import Result3 from "./Quiz_code/component/Result_Option1/Result3.jsx";
import Result4 from "./Quiz_code/component/Result_Option1/Result4.jsx";
import Result5 from "./Quiz_code/component/Result_Option1/Result5.jsx";
import Result6 from "./Quiz_code/component/Result_Option1/Result6.jsx";
import Question2 from "./Quiz_code/component/Question2.jsx";
import ReactGA from "react-ga4";
import Result1Op from "./Quiz_code/component/Result_Option2/Result1Op.jsx";
import Result2Op from "./Quiz_code/component/Result_Option2/Result2Op.jsx";
import Result3Op from "./Quiz_code/component/Result_Option2/Result3Op.jsx";
import Result4Op from "./Quiz_code/component/Result_Option2/Result4Op.jsx";
import GAListener from "./Quiz_code/component/GAListener";
import ScrollToTop from "./Quiz_code/component/scroll.js";

ReactGA.initialize("G-4JCDQNL412");
const App = () => {
  return (
    <HashRouter>
      <GAListener />
      <ScrollToTop />
      <Routes>
        {/* Trang chính là /cong-cu-kiem-tra-trieu-chung */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Option" element={<Optionquestion />} />
          <Route path="skin" element={<Question condition="skin" />} />
          <Route path="gyne" element={<Question2 condition="intimate" />} />
          <Route path="nam-da-do-dong-vat" element={<Result />} />
          <Route path="hac-lao" element={<Result2 />} />
          <Route path="nam-ke-chan" element={<Result3 />} />
          <Route path="nam-ben" element={<Result4 />} />
          <Route path="lang-ben" element={<Result5 />} />
          <Route path="viem-da-nep-ke" element={<Result6 />} />
          <Route path="nhiem-nam-am-dao" element={<Result1Op />} />
          <Route path="viem-am-dao" element={<Result2Op />} />
          <Route path="nhiem-trung-duong-tieu" element={<Result3Op />} />
          <Route path="trieu-chung-khac" element={<Result4Op />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
