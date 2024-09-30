import PropTypes from "prop-types";

import {useState} from "react";
import {usePaystackPayment} from "react-paystack";

import {endpoints} from "../../../store/endpoints";
import {getSpecificKey} from "../../../store/storage";

import useMutate from "../../../hooks/useMutate";
import usePaystack from "../../../hooks/payments/usePaystack";

import paystackConfig from "../../../config/paystackConfig";


import styles from "./purchase.module.css";
import {Spinner2} from "../../spinner/Spinner.jsx";
import Button from "../../custom-tags/button/Button.jsx";



const Purchase = (amount, courseId, onClose, courseName) => {
  console.log(amount, courseId, onClose, courseName);
  const {price} = amount;

  const {data: email} = getSpecificKey("username", "**");
  const [initializeTransRef, setInitializeTransRef] = useState("");

  const {onCall, isLoading} = usePaystack({email, price});

  const {onCall: verifyCall, isLoading: verifyIsLoading} = useMutate({
    postUrl: endpoints.transaction.paystack.verify,
    formMethod: "POST",
  });

  const initiatePaystack = usePaystackPayment(paystackConfig({reference: initializeTransRef, email, amount}));

  const onSuccess = (reference) => {
    verifyCall({request: {email, courseId: courseId, transactionReference: reference.reference}});
    onClose();
  };

  const onClose1 = () => {
    console.log("closed");
  };


  const initiatePayment = async(e) => {
    e.preventDefault();

    const {reference} = await onCall();

    if(reference !== null || reference === "") {
      setInitializeTransRef(reference);
      initiatePaystack({onSuccess, onClose1});
    }
  }

  return (<div className={styles.modal}>
    <div className={styles["modal-contents"]}>
      <h2>Continue Payment?</h2>
      <p>You are about to pay the sum of {price} for {courseName} course {email}</p>
      <div className={styles["modal-buttons"]}>
        {
          !isLoading || !verifyIsLoading ?
            <>
              <Button onClick={initiatePayment}>Yes</Button>
              <Button onClick={onClose}>No</Button>
            </>
            :
            <Spinner2/>
        }
      </div>
    </div>

  </div>)
}

export default Purchase;

Purchase.prototype = {
  amount: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  courseId: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,

}
