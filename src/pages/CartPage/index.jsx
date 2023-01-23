import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import s from "./index.module.css";
import { clearCart } from "../../store/reducers/cart";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function CartPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const phoneRegister = register("phone", {
    required: "*Enter your phone number ",
  });

  const submit = (data) => console.log(data);

  return (
    <div className={s.card_page}>
      <p className={s.card}> Card </p>

      <div className={s.card_start}>
        <p>
          <Link to="/">Homepage</Link> /Card
        </p>
        <p>
          <Link to="/category">Return to the shop </Link>
        </p>
      </div>

      <div className={s.card_section}>
        {cart.length === 0 ? (
          <div className={s.empty}>
            The cart is empty <br /> <br /> Total: 0.00 $
          </div>
        ) : (
          <div className={s.cart_container}>
            {cart.map((el) => (
              <CartCard key={el.id} {...el} />
            ))}

            <div className={s.total_container}>
              <p className={s.order}> Order details </p>

              <div className={s.button_block}>
                <p className={s.total}>Total:</p>

                <p className={s.sum}>
                  {cart
                    .reduce((prev, { price, count }) => prev + price * count, 0)
                    .toFixed(2)}
                  $
                </p>
              </div>

              <form onSubmit={handleSubmit(submit)} className={s.form}>
                <input
                  type="text"
                  name="phone"
                  placeholder=" your phone number "
                  {...phoneRegister}
                  className={s.order_form}
                />
                <br />
                <div className={s.errors}>
                  {errors.phone && <p>{errors.phone?.message}</p>}
                </div>
                <button onclick="form.reset()" className={s.order_button}>
                  Order
                </button>
              </form>
            </div>

            <div>
              <button onClick={() => dispatch(clearCart())} className={s.clear}>
                Clear the cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
