const express = require('express');
const Razorpay = require('razorpay');
const app = express()
const cors = require('cors')

const port = 3000

app.use(cors({origin: '*'}));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.get('/', (req, res) => {
//   res.send('All is well')
// })

let instance = new Razorpay({
    key_id:'',  //Put your key_id from razor key website
    key_secret:'' //Put your key_secret from razor key website
})

app.post('/', (req,res,next)=>{
    let options = {
        amount:req.body.amount,
        currency:"INR",
        receipt:'Order001',
        payment_capture:0,
        notes:req.body
    }

    instance.orders.create(options, (err,order)=>{
        if(err){
        next(err);
        res.json({success:false, status:"Order Failed", value:order, key:instance.key_id})

        }
        if(order){
        res.json({success:true, status:"Order created Successfully", value:order, key:instance.key_id})
        }})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})