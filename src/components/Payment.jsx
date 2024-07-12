import { IoCloseCircleOutline } from "react-icons/io5";

import ItemContainer from "./Container";
import ItemWindow from "./Window";
import ApplyButton from "./Button";
import "../../styles/Payment.css";

function Payment({ onClick }) {
  return (
    <ItemContainer>
      <ItemWindow type="40" className="payment-window">
        <IoCloseCircleOutline onClick={onClick} className="close-icon" />
        <h2 className="title">Check out</h2>
        <div className="account-info">
          <span>Account: </span>{" "}
          <span className="account-name">--- account name</span>
        </div>
        <div className="payment-section">
          <h2 className="section-title">Payment</h2>
          <div className="payment-method">
            <h3>Credit Card</h3>
            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="input-field"
              />
              <input type="text" placeholder="MM/YY" className="input-field" />
              <input type="text" placeholder="CVV" className="input-field" />
            </div>
            <ApplyButton className="apply-button">Continue</ApplyButton>
          </div>
        </div>
      </ItemWindow>
    </ItemContainer>
  );
}

export default Payment;
