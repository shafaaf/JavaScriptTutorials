import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51JeLjcGpDr9BMMKAbvMlEMuKTsmckk4C3x39lRRHg0v2OxnZyk7eBcKrJMGBLPS9hVXQWV5zX41ROTPS0HYOUnzL00bneHnTAk";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm/>
		</Elements>
	);
};

export default StripeContainer;
