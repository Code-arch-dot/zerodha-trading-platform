import React from 'react';

function Pricing() {
    return ( 
    <>
      <div className='container text-center mt-5' style={{backgroundColor:"#fffff8"}}>
        <div className='row'>
          <div className='col-6 text-start'>
            <h2 className='text-muted mb-3'>Unbeatable pricing</h2>
            <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India.
               Flat fees and no hidden charges.</p>

               <div className='mt-3' >
                <a href='#' style={{textDecoration:"none"}}>See Pricing<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
          </div>

          <div className='col-2'>
            <img src='media/images/pricing-eq.svg'/>
            <p className='text-muted'style={{fontSize:"70%"}}>Free account opening</p>
          </div>

          <div className='col-2'>
            <img src='media/images/pricing-eq (1).svg'/>
            <p className='text-muted  ' style={{fontSize:"70%"}}>Free equity delivery and direct mutual funds</p>
          </div>

          <div className='col-2'>
            <img src='media/images/other-trades.svg ' />
            <p className='text-muted ' style={{fontSize:"70%"}}>Intraday and F&O</p>
          </div>
        </div>

      </div>
    </>
     );
}

export default Pricing;