const paystackConfig = ({reference, email, amount}) => ({
  reference: reference,
  email: email,
  amount: +amount * 100,
  publicKey: "pk_test_6b5cb597abb805de0f6fd0f541c75c47cc659ad3"
});

export default paystackConfig;