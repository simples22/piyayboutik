"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import BioCosmeticLogo from "./BioCosmeticLogo";

export default function Footer() {
  return (
    <main>
    <footer className="pbFooter">
      <div className="pbContainer">
        <div className="pbFooterGrid">
          <div className="pbFooterCol pbFooterBrand">
            
                <p>
                  AVE® Cosmetics Companies (AVECC) is an independent platform operated by a Mary Kay Independent
                  Beauty Consultant. Discover curated beauty, skincare and makeup essentials
                  designed for everyday confidence. All purchases are completed exclusively through the
                  official Mary Kay platform.
                </p>
            <div className="pbFooterSocial">
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" aria-label="Tiktok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>

          <div className="pbFooterCol">
            <h4>Explore Company</h4>
            <Link href="/shop">Shop</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/skincare-guide">Skincare Guide</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div className="pbFooterCol">
            <h4>Support Center</h4>
            <Link href="/terms-of-use">Terms Of Use</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/shipping-policy">Shopping Policy</Link>
            <Link href="/return-policy">Direct return Policy</Link>
            <Link href="/refund-policy">Direct Refund Policy</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          </div>

          <div className="pbFooterCol pbFooterNewsletter">
            <h4>Need Help?</h4>

            <p>
              Have questions about beauty routines or product redirection? Call
              us for guidance before visiting the official Mary Kay plat-form.
            </p>

            <div className="pbFooterPhoneBox">
              <span>Customer Support</span>
              <a href="tel:+1(941)392 1221">+1 (888) AVE™-CUSTOMER</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pbFooterBottom">
        <div className="pbContainer pbFooterBottomInner">
          <p>© 2026 AVE™ Cosmetics Companies Group. All rights reserved.</p>
          <p>
              avecosmetico.com powered by AVE® Cosmetics Companies is a platform operated by an independent affiliate 
              and is not owned, operated, or endorsed by Mary Kay Inc. 
              All purchases, payments, order fulfillment, product availability, returns, 
              and official product information are handled exclusively through 
              the official Mary Kay platform.
          </p>
        </div>
        < BioCosmeticLogo href="/" className="footerLogo" />
      </div>
      
    </footer>
    </main>
  );
}