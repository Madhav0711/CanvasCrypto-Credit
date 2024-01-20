import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="container">
  <footer className="py-3 my-4 text-light">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-light">
      <li className="nav-item"><Link href="/" className="nav-link px-2 text-light">Home</Link></li>
      <li className="nav-item"><Link href="/GetLoan" className="nav-link px-2 text-light">Loan</Link></li>
      <li className="nav-item"><Link href="/#scroller" className="nav-link px-2 text-light">Lend</Link></li>
    </ul>
    <p className="text-center text-light">© 2024 CryptoCanvasCredit, Inc</p>
  </footer>
</div>
    </div>
  )
}

export default Footer