// Import the video file using the appropriate method for your build tool
import video from './assets/bg1.mp4';
import videos from './assets/bg1.mp4'
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
        <div   className='pt-5 page2 '>
          <div className="container">
          <h2 className='pt-5 container text-white'>Why LendNFT?</h2>
          <h3 className=''>
          We at LendNFT redefine NFT ownership, offering a unique pathway to financial flexibility. Unlock liquidity, maintain ownership, and enjoy flexible financing – that's why LendNFT is your key to maximizing the potential of your NFTs.          </h3>
          </div>
        </div>
        {/* <script src='https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js'></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    </>
  );
}
