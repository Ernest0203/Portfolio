import firebase from './firebase.js'

export default class DatabaseController {
	connect() {
		this.database = firebase.database()
		this.rootRef = this.database.ref();
		this.data = null;
	};

	getDataFromServer(callback) {
		//this.rootRef = this.database.ref();
		this.rootRef.once('value', (data) => {
			this.data = data.val();
			callback(this.data)
		});
	};

	addItem(section, item) {
		this.rootRef.child('skills').child(section).push(item)
	};

	removeItem(section, item) {
		this.rootRef.child('skills').child(section).child(item).remove()
	};

	editItem(section, item, newItem) {
		if (!section && !item) {
			this.rootRef.child('about').set(newItem);
		}
		else {
			this.rootRef.child('skills').child(section).child(item).set(newItem);
		}
	};
}