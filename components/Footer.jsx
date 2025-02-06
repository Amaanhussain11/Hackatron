import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="footer-section" style={{ color: "#fff" }}>
        <div className="imgHolder">
           {/* <img
            src="./images/logo-main.webp"
            alt="Hack the space Hackathon planet"
          />  */}
            <Link href="/">
              <img src="/images/logo/hackatron.png" alt="Hackatron" />
            </Link>
            <Link href="https://www.hnccbits.com/">
              <img src="/images/logo/hncc.png" alt="Hackatron" />
            </Link>.

          
        </div>
        <div className="docs">
          <h3 className="footer-title">Explore</h3>

          <ul>
            <li>
              <Link
                href="https://www.hnccbits.com/"
                target="https://www.hnccbits.com/"
              >
                HnCC BITS
              </Link>
            </li>
            <li>
              <Link href="/Team" target="/Team">
                Team
              </Link>
            </li>

          </ul>
        </div>

        <div className="socials">
          <div className="handles">
            <h3 className="footer-title">Social Handles</h3>

            <div className="social-links">
              <Link href="https://www.instagram.com/hnccbits/" target="_blank">
                <svg
                  name="logo-instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                  <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/hnccbits/posts/?feedView=all"
                target="_blank"
              >
                <svg
                  name="logo-linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                </svg>
              </Link>
              <Link href="https://x.com/hnccbits" target="_blank">
                <svg
                  name="logo-twitter"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon icon"
                  viewBox="0 0 512 512"
                >
                  <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/hnccbits/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon icon"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495V14.706h-3.13v-3.622h3.13v-2.671c0-3.1 1.893-4.786 4.658-4.786 1.325 0 2.462.098 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.312h3.588l-.467 3.622h-3.121V24h6.116C23.406 24 24 23.406 24 22.675V1.326C24 .593 23.406 0 22.675 0z" />
                </svg>
              </Link>
              {/* <Link
                href="https://www.youtube.com/@hackathonandcodingclubbits"
                target="_blank"
              >
                <svg
                  name="logo-youtube"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon icon"
                  viewBox="0 0 512 512"
                  fill="#FF0000"
                >
                  <path d="M23.2 7.5a2.5 2.5 0 00-1.8-1.8C20.1 5.4 12 5.4 12 5.4s-8.1 0-9.4.3c-1 .2-1.8.9-2.2 1.8a17.7 17.7 0 00-.3 2.9 17.7 17.7 0 00.3 2.9c.4 1 1.2 1.6 2.2 1.8 1.3.3 9.4.3 9.4.3s8.1 0 9.4-.3c1-.2 1.8-.9 2.2-1.8a17.7 17.7 0 00.3-2.9 17.7 17.7 0 00-.3-2.9zm-12.2 7.9V8.6l6.8 3.4-6.8 3.4z" />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>

        <div className="contactUs">
          <h3 className="footer-title">Contact Us</h3>

          <div className="contactList">
            <Link href="hnccbits@gmail.com" target="_blank">
              hnccbits@gmail.com
            </Link>
          </div>
        </div>
      </footer>
      <div className="footer-ke-neeche">
        <p>Made with ❤️ by the Team HnCC</p>
      </div>
    </>
  );
};

export default Footer;
