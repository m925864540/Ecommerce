const router = require("express").Router();
module.exports = router;
const stripe = require("stripe")("sk_test_51KN5XjHDd678D5d95TL8MQhZ7VhhMdNYU3Ka31SwWWKDIH2T1BEbBhKbpx3ClLTYBqA3Y1BrCgOB2dW9urEahSLo00bViBk8xH");
// const stripe = "sk_test_51KN5XjHDd678D5d95TL8MQhZ7VhhMdNYU3Ka31SwWWKDIH2T1BEbBhKbpx3ClLTYBqA3Y1BrCgOB2dW9urEahSLo00bViBk8xH";
router.post("/payment", (req, res) => {
    //Charges are identified by a unique, random ID.
    stripe.charges.create(
      {
        //When a payment is made in client side., stripe return a token, which consist of
        //all data we need, we only take tokenId, and the amount this case.
        source: req.body.tokenId, 
        amount: req.body.amount,
        currency: "usd"
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          //Fail
          return res.status(500).json(stripeErr);
        }
        //Success
        return res.status(200).json(stripeRes);
      }
    );
    
  });
