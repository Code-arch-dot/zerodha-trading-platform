import React from "react";

function Stats() {
  return (
    <div className="container mt-5 p-5">
      <div className="row align-items-center">
        {/* Left Side Text */}
        <div className="col-4">
          <h1 className="mb-4 fs-2 text-muted">Trust with confidence</h1>

          <div className="mb-4">
            <h4 className="fs-5 text-muted">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~₹6 lakh crores
              of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fs-5 text-muted">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a href="#">Our philosophies</a>.
            </p>
          </div>

          <div className="mb-4 text-muted">
            <h4 className="fs-5 text-muted">The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fs-5 text-muted">Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-8 text-center">
          <img
            src="/media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid w-75"
            
          />
          <div className="text-center">
            <a  href='#' className="mx-4" style={{textDecoration:'none'}}>Explore our products<i class="fa-solid fa-arrow-right-long"></i></a>
            <a href='#' style={{textDecoration:'none'}}>Try Kite demo<i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
