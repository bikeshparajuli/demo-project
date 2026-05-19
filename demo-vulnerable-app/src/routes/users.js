const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get all users
router.get('/', (req, res) => {
    res.json({ users: [] });
});

// Register
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hash = await bcrypt.hash(password, 10);
        res.json({ success: true, username, hash });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', (req, res) => {
    const token = jwt.sign(
        { user: req.body.username },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '1h' }
    );
    res.json({ token });
});

module.exports = router;
