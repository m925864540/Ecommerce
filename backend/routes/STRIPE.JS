const router = require("express").Router;
module.exports = router;
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment"), (req, res) => {
    //Charges are identified by a unique, random ID.
    stripe.charges.create(
      {
        source: req.body.tokenId, //When a payment is made, stripe return a token ID.
        amount: req.body.amount,
        currency: "usd",
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
  };
