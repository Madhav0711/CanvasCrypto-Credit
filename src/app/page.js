import HorizontalScroller from '../../client/components/HorizontalScroller/HorizontalScroller'
import React from 'react';
import Link from 'next/link';
import Work from '../../client/components/work/Work'

export default function Home() {

  return (
    <>
    <div data-scroll data-scroll-speed="-5" className="position-relative">
      {/* Use the video file as the source */}
      <video src='https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2' autoPlay loop muted className="w-100" type="video/mp4"></video>
      <div className="content">
        <div className="col-lg-6">
            <h1 className="display-5 fw-bold text- lh-1 mb-3">Welcome to CryptoCanvasCredit</h1>
            <p className="lead landingtext">Unlock the Potential of Your NFTs</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link href="/GetLoan" type="button" className="btn btn-outline-light btn-lg px-4 me-md-2 rounded-pill">Get a loan</Link>
              <Link href="/#scroller" type="button" className="btn btn-outline-light btn-lg px-4 me-md-2 rounded-pill">I want to lend</Link>
            </div>
          </div>
        </div>
    </div>
    <div className='pt-5 page2' id="about" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="container " >
          <p className="container text-light text-center" style={{ textShadow: "0 0 3px black, 0 0 5px black", fontFamily: 'cursive', fontSize: '100px' }}>
  Why CryptoCanvasCredit?
</p>
<style>
  {`
    .hover-effect {
      transition: transform 0.3s ease-in-out; /* Adjust the duration and timing function as needed */
    }

    .hover-effect:hover {
      transform: translateY(-10px);
    }
  `}
</style>

<h2 className='text-dark shadow-xl border-4 rounded p-5 text-muted hover-effect'  style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", background: 'white', color: 'grey' }}>
At NFTfi, we're on a mission to empower NFT owners with unparalleled financial flexibility. Our platform is designed to be the most secure, fair, and transparent way for you to unlock opportunities from your valuable NFTs. Join us in redefining the possibilities of NFT ownership – where creativity meets financial innovation.</h2>

          </div>
        </div>
        <div id="scroller">
        <HorizontalScroller/>
        <Work/>
        </div>
        <script src='https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js'></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
    </>
  );
}
