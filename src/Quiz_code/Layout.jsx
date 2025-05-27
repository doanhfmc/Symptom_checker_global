import { Suspense, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useBearStore } from "./store/app";
import "./Layout.css";
const Layout = () => {
  const { increasePopulation } = useBearStore();
  const location = useLocation(); // ✅ Dùng useLocation thay vì location trực tiếp
  const id = location.pathname.split("/").pop();

  useEffect(() => {
    if (id === "skin" || id === "intimate") {
      increasePopulation({ condition: id });
    }
  }, []); // ✅ Thêm dependency để tránh warning React

  const handleWindowSizeChange = useCallback(() => {
    if (window.parent.document.querySelector('iframe[src*="deco"]')) {
      const mainIframe = window.parent.document.querySelector(
        'iframe[src*="deco"]'
      );

      if (document.getElementsByClassName("layout_wrapper").length > 0) {
        const mainContainerHeight =
          document.getElementsByClassName("layout_wrapper")[0].offsetHeight;
        console.log("Height", mainContainerHeight);
        mainIframe.height = mainContainerHeight;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return (
    <div className="layout_wrapper">
      <p
        style={{
          color: "#c01b31",
          marginTop: "20px",
          marginLeft: "20px",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Symptom checker
      </p>
      {/* Main layout */}
      <main>
        <Suspense fallback={<p></p>}>
          <Outlet />
        </Suspense>
      </main>
      {/* Footer layout */}
      <footer className="footer_layout">
        <div className="line_layout"></div>
        <div className="footer_content">
          <p>
            This is a guide on which condition you may have and recommend which
            treatment is suitable with your condition. This tool is not intended
            to be a substitute for professional medical advice, diagnosis, or
            treatment.
          </p>

          <p className="highlight_text">
            <strong>
              We recommend you to seek for medical advice or further diagnosis
              from healthcare professionals.
            </strong>
          </p>
          <p>
            <strong>
              IF YOU ARE PREGNANT OR SUSPECT THAT YOU ARE PREGNANT, PLEASE
              CONSULT YOUR DOCTOR.
            </strong>
          </p>
          <p>
            In order to help you increase the precision in preliminary
            self-diagnosis, we are using real images which might be unpleasant.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
