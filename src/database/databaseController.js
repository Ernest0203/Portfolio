import firebase from './firebase.js'

export default class DatabaseController {
	connect() {
		this.database = firebase.database();
		this.storage = firebase.storage().ref();
		this.rootRef = this.database.ref();
		this.data = null;
		this.str = [];
	};

	getDataFromServer(callback) {
		this.rootRef.once('value', (data) => {
			this.data = data.val();
			callback(this.data)
		});
	};

	getDataFromStorage() {
		let imgURL = [];
		for (let i=1; i<=6; i++) {
			this.storage.child('webpages(old)').child(`p${i}.jpg`)
			.getDownloadURL()
			.then(url => {
				imgURL.push(url);
			})
		}
		setTimeout(() => {
			imgURL.sort((a, b) => {
				return a > b
			})
			this.rootRef.child('projects').child('old').once('value', (data) => {
				Object.keys(data.val()).forEach((project, index) => {
					const newProject = { ...data.val()[project],	image: imgURL[index] };
					console.log(newProject)
					this.rootRef.child('projects').child('old').child(project).update(newProject);
				})
			});
			//let a = this.rootRef.child('projects').child('old').child('p1').push(imgURL[1]);
			//console.log(a)
			imgURL.forEach(url => {
				//this.rootRef.child('projects').child('old').child('img').set(url);
			})
		}, 2000)
	}

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