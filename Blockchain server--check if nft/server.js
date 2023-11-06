const express = require('express');
const cors = require('cors')
const {Web3} = require('web3');
const ABI =require('./ABI.json')
const socketIO = require('socket.io')
const app = express();
app.use(cors())
app.use(express.json());

const web3 = new Web3(
  "https://quick-capable-smoke.ethereum-sepolia.discover.quiknode.pro/68e89b78c0857d8cffa7c25fb33c32798d621b5b/",
);
const contractAddress = "0x49409CB2CFF7A4c825b6febbec5e391a679a2989";
const contract = new web3.eth.Contract(ABI,contractAddress);
 //console.log(contract)

const fetchNFTs = async(account)=>{
  try {
       
    const nftBalance = await contract.methods.balanceOf(account).call();
       return {userNFTs:Number(nftBalance)}
    }catch(error){
       console.log('Error fetching NFTs',error);
    }
}

app.post('/members',async(req,res)=>{
    try{
       const account = req.body.from;
       console.log(account)
       const numNFTs = await fetchNFTs(account)

         res.status(200).json({status:200,numNFTs})
      
    }catch(error){
        res.status(500).json({status:500,message:"Internal Server Error"});
    }
})

app.post('/webhook',async(req,res)=>{
    try{
      const account = req.body[0].from;
      const numNFTs = await fetchNFTs(account);
      io.emit('nftsUpdated', { userNFTs: numNFTs.userNFTs })
      console.log(account);
      res.status(200).json({status:200,message:"Webhook Triggered"})
    }catch(error){
      console.error(error)
    }
})





// Create a new app.post endpoint for minting an NFT



const PORT=5000;
const server = app.listen(PORT,()=>{
    console.log(`Sever running at ${PORT}`)
})
const io = socketIO(server);
io.on('connection',()=>{
  console.log("Connected")
})
