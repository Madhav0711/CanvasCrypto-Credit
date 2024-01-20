import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="container fixed-top" style={{background:'blue'}} >
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom position-absolute w-100" style={{ zIndex: 1000,background:"rgb(8,63,220) !important" }}>
        <div className="col-md-3 mb-2 mb-md-0" style={{}}>
          <Link href="/" className="d-inline-flex link-body-emphasis text-decoration-none" previewlistener="true">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="logo-text text-white font-weight-bold" style={{ fontSize: '20px' }}>CCC</span>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link href="/" className="nav-link text-white px-2 link-secondary">Home</Link></li>
          <li><Link href="/GetLoan" className="nav-link text-white px-2">Loan</Link></li>
          <li><Link href="/#scroller" className="nav-link text-white px-2">Lend</Link></li>
          {/* <li><Link href="#" className="nav-link text-white px-2"></Link></li> */}
          <li><Link href="/#about" className="nav-link text-white px-2">About</Link></li>
        </ul>

        <div className="col-md-3 text-end">
          <Link href="/Profile" type="button" className="btn btn-outline-light rounded-pill me-2">Profile</Link>
          {/* <button type="button" className="btn btn-light">Sign-up</button> */}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
