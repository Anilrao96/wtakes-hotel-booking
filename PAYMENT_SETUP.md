# Payment Gateway Setup Guide

## Current Status
✅ Payment UI integrated with 4 options:
- Credit/Debit Cards (Stripe)
- PayPal
- Google Pay
- Apple Pay

## To Enable Real Payments:

### 1. Stripe (Credit/Debit Cards)
1. Sign up: https://stripe.com
2. Get API keys from Dashboard
3. Replace in `script.js`:
   ```javascript
   const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
   ```
4. Create payment backend (Node.js/Python)

### 2. PayPal
1. Sign up: https://developer.paypal.com
2. Get Client ID
3. Add PayPal SDK to index.html:
   ```html
   <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>
   ```

### 3. Razorpay (India - All Payment Methods)
1. Sign up: https://razorpay.com
2. Supports: UPI, Cards, Wallets, NetBanking
3. Easy integration - 10 minutes setup

### 4. Google Pay & Apple Pay
- Requires merchant account
- Works through Stripe/PayPal

## Recommended: Razorpay (for India)
- Supports all Indian payment methods
- Easy setup
- Low fees (2%)

## Quick Setup (Razorpay):
```javascript
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

Contact me if you need help with real payment integration!
