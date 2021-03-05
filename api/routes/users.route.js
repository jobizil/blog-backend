const { Router } = require('express');

// ANCHOR Export to index,.js api file

const {
  registerUser,
  loginUser,
  updateProfile,
} = require('../../controllers/users');

const router = Router();

router.route('/register').post(registerUser);
router.route('/auth/login').post(loginUser);
router.route('/auth/user/:id').put(updateProfile);

module.exports = router;
