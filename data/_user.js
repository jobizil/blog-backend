const bcrypt = require('bcryptjs');

const users = [
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/dactrtr/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Jeffrey.Moore',
    email: 'Dan67@hotmail.com',
    password: bcrypt.hashSync('uT5woqqkNLFgs10', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Alexys.Hickle',
    email: 'Adrain_Hegmann10@yahoo.com',
    password: bcrypt.hashSync('m82NAFdziqpKgjn', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/phillapier/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Loyce.Wisozk1',
    email: 'Rhoda29@yahoo.com',
    password: bcrypt.hashSync('JFX53Vlct1XjYdV', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/sunlandictwin/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Maeve.Legros57',
    email: 'Elliot.Ankunding@gmail.com',
    password: bcrypt.hashSync('Ih1oKPZ7sIFQIlZ', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Abbigail.Koelpin',
    email: 'Eulalia.Gusikowski31@yahoo.com',
    password: bcrypt.hashSync('T8yxrFaGp69vcM6', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/robbschiller/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Jacquelyn_Nader36',
    email: 'Lavon.Jenkins17@gmail.com',
    password: bcrypt.hashSync('TbJcpdWHcLt5myb', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/johnsmithagency/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Ellie_Hammes66',
    email: 'Casper74@hotmail.com',
    password: bcrypt.hashSync('rPflK13VsUPBIqT', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/muridrahhal/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Ignatius39',
    email: 'Jonathan19@yahoo.com',
    password: bcrypt.hashSync('F9zxWv8ruj4j94O', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/tur8le/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Lincoln20',
    email: 'Wilfredo_Reynolds78@hotmail.com',
    password: bcrypt.hashSync('P_8FTDHeA2jPjU1', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Emerson.Ondricka',
    email: 'Benny28@yahoo.com',
    password: bcrypt.hashSync('_o3fBX0nIWg5wBJ', 10),
  },
  {
    profilePhoto:
      'https://s3.amazonaws.com/uifaces/faces/twitter/tbakdesigns/128.jpg',
    profilePhotoId: 'kvfhdvk',
    username: 'Hudson.Gorczany',
    email: 'Lenna.McDermott20@hotmail.com',
    password: bcrypt.hashSync('uC97SpXGn3vbfpc', 10),
  },
];
module.exports = users;
