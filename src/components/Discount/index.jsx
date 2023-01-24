import React from "react";
import dwarf from "../../media/dwarf.png";
import { useForm } from "react-hook-form";
import s from "./index.module.css";

export default function Discount() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const phoneRegister = register("phone", {
    required: "*Enter your phone number ",
  });

  const submit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section className={s.discount_section} id="discount">
      <div className={s.discount_sub_section}>
        <div>
          <img src={dwarf} alt="dwarf" className={s.discount_img} />
        </div>

        <div className={s.discount}>
          <h1> Discount 5 % </h1>
          <p className={s.order}> off your first order </p>
          <br />
          <br />
          <form onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              name="phone"
              placeholder="+49"
              {...phoneRegister}
              className={s.discount_form}
            />
            <br />
            <br />
            <div className={s.errors}>
              {errors.phone && <p>{errors.phone?.message}</p>}
            </div>
            <button className={s.discount_button}> Get a discount </button>
          </form>
        </div>
      </div>
    </section>
  );
}
