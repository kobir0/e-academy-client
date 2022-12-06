import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center border rounded-t-lg p-4 bg-blue-500 text-base-content">
        <div className="items-center grid-flow-col">
          <div className="h-12 w-12">
            <img
              src="https://play-lh.googleusercontent.com/wgnK61o8_kNBCpcNV5qbGTT7WA8qwo8ZrAjIQhQAp5RSze9kU4acY6DDKQ-0Q5agX4c"
              alt=""
            ></img>
          </div>
          <p>Copyright © 2022 - All right reserved</p> <br></br>
          <p className="text-center">
            {" "}
            Developed By <br></br>
            <span className="text-teal-300">
              <a
                href="https://www.linkedin.com/in/ko-bir-928b09252/"
                target="blank"
              >
                {" "}
                @Kobir
              </a>
            </span>
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://twitter.com/KobiR97874500/" target="blank">
            <img
              width="24"
              className=""
              height="24"
              src="https://img.icons8.com/ios-filled/344/twitter.png"
              alt=""
            ></img>
          </a>

          <a href="https://www.facebook.com/dracula.x.sir" target="blank">
            <img
              width="24"
              className=""
              height="24"
              src="https://img.icons8.com/ios-filled/344/facebook-new.png"
              alt=""
            ></img>
          </a>

          <a href="https://www.instagram.com/_k_o_b_i_r_/" target="blank">
            <img
              width="24"
              className=""
              height="24"
              src="https://img.icons8.com/glyph-neue/2x/instagram-new.png"
              alt=""
            ></img>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
