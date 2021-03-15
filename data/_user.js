const bcrypt = require('bcryptjs')

const users = [
	{
		// _id: '6048d708971c3c7a9643458a',
		profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/dactrtr/128.jpg',
		profilePhotoId: 'kvfhdvk',
		username: 'Jeffrey.Moore',
		email: 'Dan67@hotmail.com',
		password: bcrypt.hashSync('uT5woqqkNLFgs10', 10),
	},
	{
		// _id: '6048d708971c3c7a9643458b',
		profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg',
		profilePhotoId: 'kvfhdvk',
		username: 'Alexys.Hickle',
		email: 'Adrain_Hegmann10@yahoo.com',
		password: bcrypt.hashSync('m82NAFdziqpKgjn', 10),
	},
	{
		// _id: '6048d708971c3c7a9643458c',
		profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/phillapier/128.jpg',
		profilePhotoId: 'kvfhdvk',
		username: 'Loyce.Wisozk1',
		email: 'Rhoda29@yahoo.com',
		password: bcrypt.hashSync('JFX53Vlct1XjYdV', 10),
	},
	{
		// _id: '6048d708971c3c7a9643458d',
		profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/sunlandictwin/128.jpg',
		profilePhotoId: 'kvfhdvk',
		username: 'Maeve.Legros57',
		email: 'Elliot.Ankunding@gmail.com',
		password: bcrypt.hashSync('Ih1oKPZ7sIFQIlZ', 10),
	},
	{
		// _id: '6048d708971c3c7a9643458e',
		profilePhoto: 'https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg',
		profilePhotoId: 'kvfhdvk',
		username: 'Abbigail.Koelpin',
		email: 'Eulalia.Gusikowski31@yahoo.com',
		password: bcrypt.hashSync('T8yxrFaGp69vcM6', 10),
	},
]
module.exports = users
