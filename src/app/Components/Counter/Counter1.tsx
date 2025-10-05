import React from "react";

const Counter1 = () => {
  return (
    <section className="counter-section theme-bg fix">
      <div className="container">
        <div className="counter-wrapper">
          <div className="counter-items wow fadeInUp wow" data-wow-delay=".2s">
            <div className="counter-content">
              <h2>
                <span className="count">4</span>+
              </h2>
              <p>Godina na Tržištu</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp wow" data-wow-delay=".4s">
            <div className="counter-content">
              <h2>
                <span className="count">3</span>.6+
              </h2>
              <p>Yearly Customers</p>
            </div>
          </div>
          <div className="counter-items wow fadeInUp wow" data-wow-delay=".6s">
            <div className="counter-content">
              <h2>
                <span className="count">46</span>+
              </h2>
              <p>Dnevni Posetioci</p>
            </div>
          </div>
          <div
            className="counter-items style-2 wow fadeInUp wow"
            data-wow-delay=".8s"
          >
            <div className="counter-content">
              <h2>
                <span className="count">28</span>+
              </h2>
              <p>Nagrade i Priznanja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter1;
