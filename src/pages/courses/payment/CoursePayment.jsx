import useFetchData from "../../../hooks/useFetchData.js";
import {endpoints} from "../../../store/endpoints.js";
import {NavLink, useParams} from "react-router-dom";
import Button from "../../../components/custom-tags/button/Button.jsx";
import {useEffect, useMemo, useState} from "react";
import {getSpecificKey} from "../../../store/storage.js";
import {usePaystackPayment} from "react-paystack";
import {Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useMutate from "../../../hooks/useMutate.js";

const CoursePayment = () => {
  const {courseId} = useParams();

  // use state to store reference and amount that will be passed into config
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");

  useMutate({postUrl: "", formMethod: "POST"})
  // Retrieve the email from storage
  const {data: email} = getSpecificKey("username", "**");

  // on rendering the page, fetch the transaction reference and course details
  const {data, loading} = useFetchData(`${endpoints.transaction.paystack.init}${courseId}`)

  // use effect to set update the reference value and amount
  useEffect(() => {
    if(!loading) {
      setReference(data?.paystackInitializedTransactionResponse?.reference)
      setAmount(data?.coursesDto?.priceDTO?.price);
    }
  }, [data?.coursesDto?.priceDTO?.price, data?.paystackInitializedTransactionResponse?.reference, loading]);


  const onSuccess = () => {
    console.log("successfully paid")

  }

  const onClosePaystack = () => {
    console.log("closed");
  };

  const paystackConfig = useMemo(() => ({
    email,
    amount,
    reference,
    publicKey: "pk_test_6b5cb597abb805de0f6fd0f541c75c47cc659ad3",
  }), [reference, email, amount.price]);

  // Configure Paystack payment initialization
  const initiatePaystack = usePaystackPayment(paystackConfig);

  const loadPaystackPaymentModal = async(e) => {
    e.preventDefault();
    console.log("oya lets initaite it and expect a modal to pop up")
    initiatePaystack(onSuccess, onClosePaystack)
  };

  return (
    <Container className={"px-5 pt-3"}>
      <Card style={{width: '35rem'}} className={"mx-auto col-sm-12-"}>
        <Card.Img variant="top" src={data?.coursesDto?.thumbnail_url} style={{height: '450px'}}/>
        <Card.Body>
          <Card.Title style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            fontWeight: "bolder"
          }}>{data?.coursesDto?.courseName}</Card.Title>
          <Card.Text style={{color: 'black', fontSize: '1.2rem', minHeight: 'min-content', fontWeight: 'bold'}}>
            {data?.coursesDto?.summary}
          </Card.Text>
          <div className={"align-items-center mx-auto d-flex justify-content-evenly"} style={{width: '50%'}}>
            <Button className={"py-3 px-4 bg-danger"} onClick={loadPaystackPaymentModal}>Buy Now</Button>
            <NavLink to={`/course`} className={"text-decoration-none"}>
              <Button className={"py-3 px-5 bg-danger"}>No</Button>
            </NavLink>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CoursePayment;
