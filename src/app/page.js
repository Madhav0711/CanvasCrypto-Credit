import HorizontalScroller from '../../client/components/HorizontalScroller/HorizontalScroller'

export default function Home() {
  return (
    <>
    <div data-scroll data-scroll-speed="-5" className="position-relative">
      {/* Use the video file as the source */}
      <video src='https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2' autoPlay loop muted className="w-100" type="video/mp4"></video>
      <div className="content">
        <div className="col-lg-6">
            <h1 className="display-5 fw-bold text- lh-1 mb-3">Welcome to LendNFT</h1>
            <p className="lead landingtext">Unlock the Potential of Your NFTs</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-outline-light btn-lg px-4 me-md-2 rounded-pill">Get a loan</button>
              <button type="button" className="btn btn-outline-light btn-lg px-4 me-md-2 rounded-pill">I want to lend</button>
            </div>
          </div>
        </div>
    </div>
        <div   className='pt-5 page2 ' style={{background:"rgb(8,63,220) !important"}}>
          <div className="container">
          <h2 className='pt-5 container text-white'>Why LendNFT?</h2>
          <h3 className='animated-heading"'>
          We at LendNFT redefine NFT ownership, offering a unique pathway to financial flexibility. Unlock liquidity, maintain ownership, and enjoy flexible financing – that's why LendNFT is your key to maximizing the potential of your NFTs.          </h3>
          </div>
        </div>
        <HorizontalScroller/>

        <div className="pt-5" style={{background:"rgb(8,63,220) !important"}}>
        <div className="container" style={{background:"rgb(8,63,220) !important"}}>
          <div className='px-5 row justify-content-center'>
            <h2 className='text-white rounded-pill col-3' ><u>Buyers</u></h2>
          </div>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 text-light" >
        <div className="col-10 col-sm-8 col-lg-3">
          <img
            src="bootstrap-themes.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-8">
        <div>
      {/* Section 1 */}
      <div>
        <h3>[1] List your NFT & start getting loan offers</h3>
        <p>
          First, you need to list your NFT and set the desired terms of the loan. After you list
          your NFT, other users will give you loan offers.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3>[2] Receive loan offers & accept the best one</h3>
        <p>
          When you accept a loan offer, your NFT goes into a secure escrow smart contract, and you
          receive the wETH, DAI, or USDC from the lender directly to your wallet!
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h3>[3] Repay the loan & get your NFT back</h3>
        <p>
          If you repay your loan in time, you will automatically receive your NFT back in your
          wallet!
        </p>
      </div>
    </div>
          
        </div>
      </div>
    </div>
        </div>
        <div className="pt-5" style={{background:"rgb(8,63,220) !important"}}>
        <div className="container" style={{background:"rgb(8,63,220) !important"}}>
          <div className='px-5 row justify-content-center'style={{background:"rgb(8,63,220) !important"}}>
            <h2 className='text-white rounded-pill col-3' ><u>Seller</u></h2>
          </div>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 text-light" >
        <div className="col-10 col-sm-8 col-lg-3">
          <img
            src="bootstrap-themes.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-8">
        <div>
      {/* Section 1 */}
      <div>
        <h3>[1] List your NFT & start getting loan offers</h3>
        <p>
          First, you need to list your NFT and set the desired terms of the loan. After you list
          your NFT, other users will give you loan offers.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h3>[2] Receive loan offers & accept the best one</h3>
        <p>
          When you accept a loan offer, your NFT goes into a secure escrow smart contract, and you
          receive the wETH, DAI, or USDC from the lender directly to your wallet!
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h3>[3] Repay the loan & get your NFT back</h3>
        <p>
          If you repay your loan in time, you will automatically receive your NFT back in your
          wallet!
        </p>
      </div>
    </div>
          
        </div>
      </div>
    </div>
        </div>
        {/* <script src='https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js'></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    </>
  );
}
