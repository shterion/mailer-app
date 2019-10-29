import axios from 'axios';

export const sendMail = (email) => {
	axios
		.post('/api/v1/emails', email)
		.then((res) => {
			// console.log('RESPONSE: ', res.data);
			return res;
		})
		.catch((err) => {
			console.log('ERROR: ', err);
			return err;
		});
};
