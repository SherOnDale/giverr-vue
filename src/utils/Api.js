import firebase from 'firebase';

const API = {
	auth: {
		signIn: (email, password) => {
			// alert(`Sign in with email as ${email} and password as ${password}!`);
			console.log("signing in");
		},

		createUser: async (email, password) => {
			try {
				const registrationResult = await firebase.auth().createUserWithEmailAndPassword(email, password);
				console.log("creating user", registrationResult);
			} catch (e) {
				console.log(`There was an error: ${e}`);
			}
		}
	}
}

export default API;
