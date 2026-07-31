import React from "react";

function KiteConnect() {
  return (
    <>
      <div className="container mt-5  p-2" style={{backgroundColor:" #ebf5ff",width:"100%"}}>
        <div className="row text-center p-3">
          <div className="col-2 text-center mt-4">
            <img src="media\images\kc-logo-landing.svg" />
          </div>
          <div className="col-7 ">
            <p className="text-muted text-start my-3">Need more? Build your own trading and investing experience with Kite Connect,
               simple HTTP APIs to place orders, stream market data,
                manage your account, and more.<a href="#">Explore <i class="fa-solid fa-arrow-right-long"></i></a></p>
          </div>
          <div className="col-3 ml-3 mt-3">
            <img src="media/images/kc-banner-image.svg" style={{width:"75%"}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default KiteConnect;
