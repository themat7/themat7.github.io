importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyA8FTo8X_lfBHABpeHGLplzceSTZW7NGkU",
    authDomain: "my-project-11b44.firebaseapp.com",
    databaseURL: "https://my-project-11b44.firebaseio.com",
    projectId: "my-project-11b44",
    storageBucket: "my-project-11b44.appspot.com",
    messagingSenderId: "153477229764"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});