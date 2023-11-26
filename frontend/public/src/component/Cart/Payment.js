// import React, { Fragment, useEffect, useRef, useState } from "react";
// import CheckoutSteps from "../Cart/CheckoutSteps";
// import { useSelector, useDispatch } from "react-redux";
// import MetaData from "../layout/MetaData";
// import { Typography } from "@material-ui/core";
// import { useAlert } from "react-alert";
// import { ethers } from "ethers";



// import axios from "axios";
// import "./payment.css";
// import CreditCardIcon from "@material-ui/icons/CreditCard";
// import EventIcon from "@material-ui/icons/Event";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import { createOrder, clearErrors } from "../../actions/orderAction";

// const Payment = ({ history }) => {
//   const { user, loading, isAuthenticated } = useSelector((state) => state.user);
//   const [provider, setProvider] = useState(null);
//   const [signer, setSigner] = useState(null);
//   const [account, setAccount] = useState("");
//   const [toAddress, setToAddress] = useState("");
//   const [amount, setAmount] = useState("");
//   const [transactionHash, setTransactionHash] = useState("");

//   useEffect(() => {
//     async function connectEthereum() {
//       if (window.ethereum) {
//         const ethereumProvider = new ethers.providers.Web3Provider(
//           window.ethereum,
//         );
//         const ethereumSigner = ethereumProvider.getSigner();
//         const accounts = await ethereumProvider.listAccounts();
//         setProvider(ethereumProvider);
//         setSigner(ethereumSigner);
//         setAccount(accounts[0]);
//           const { data } = await axios.post("/api/v1/check", {
//             acc: accounts[0],
//           });

//         console.log(data);
//         if (user.MetamaskAddress !== accounts[0]) {
//           console.log(user.MetamaskAddress);
//           alert.error("Please connect to the registered wallet address")
//           history.push("/order/confirm");
//         }
//         if (data.data<=0) {
//           alert.error("The connected wallet address does not have the ration card nft");
//           history.push("/order/confirm");
//         }
        
//       } else {
//         console.log(
//           "MetaMask not detected. Please install MetaMask or use an Ethereum browser.",
//         );
//       }
//     }

//     connectEthereum();
//   }, []);

//   const handleSendTransaction = async () => {
//     if (provider && signer && account && toAddress && amount) {
//       const weiAmount = ethers.utils.parseEther(amount);
//       const tx = {
//         to: toAddress,
//         value: weiAmount,
//       };

//       try {
//         const txResponse = await signer.sendTransaction(tx);
//         await txResponse.wait();
//         setTransactionHash(txResponse.hash);
//       } catch (error) {
//         console.error("Transaction Error:", error);
//       }
//     }
//   };
//   const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

//   const dispatch = useDispatch();
//   const alert = useAlert();
//   // const stripe = useStripe();
//   // const elements = useElements();
//   // const payBtn = useRef(null);

//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   // const { user } = useSelector((state) => state.user);
//   const { error } = useSelector((state) => state.newOrder);

//   const order = {
//     shippingInfo,
//     orderItems: cartItems,
//     itemsPrice: orderInfo.subtotal,
//     taxPrice: orderInfo.tax,
//     shippingPrice: orderInfo.shippingCharges,
//     totalPrice: orderInfo.totalPrice,
//   };



//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error, alert]);

//   return (
//     <Fragment>
//       <MetaData title="Payment" />
//       <CheckoutSteps activeStep={2} />
//       <div>
//         <h1>Ethereum Transaction Page</h1>
//         {account && <p>Connected Account: {account}</p>}
//         <input
//           type="text"
//           placeholder="To Address"
//           value={toAddress}
//           onChange={(e) => setToAddress(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Amount (ETH)"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <button onClick={handleSendTransaction}>Send Transaction</button>
//         {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
//       </div>
//     </Fragment>
//   );
// };

// export default Payment;
