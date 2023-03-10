import React from "react";
import banner from "../../media/banner.png";
import { Link } from "react-router-dom";
import s from "./index.module.css";

export default function Banner() {
  return (
    <div className={s.banner_section}>
      <div className={s.banner_sub_section}>
        <div>
          <p className={s.sale}>New</p>
          <p className={s.new_season}>season sale</p>

          <div className={s.button}>
            <a href="/#stock">
              <p className={s.button1}>Stock</p>
            </a>
            <Link to="/category">
              <p className={s.button2}>more detail</p>
            </Link>
          </div>
        </div>
        <img src={banner} alt="banner_img" />
      </div>
    </div>
  );
}
