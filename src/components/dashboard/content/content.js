import React from "react";
import Navigation from "../navbar/navigation";
import FooterPage from "../footer/footer";

const Content = () => {
  return (
    <>
    <Navigation />
      <div className="hero min-h-screen bg-base-200" data-theme="dracula">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Want to Generate Qusetions</h1>
            <p className="py-6">
              Use our Service in order to Generate MCQs Qusetions Easily !!!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default Content;
