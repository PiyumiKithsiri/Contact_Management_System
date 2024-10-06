import express from 'express';
import { Register, Login, Auth } from '../controller/userController.js';
const router = express.Router();
import { body } from 'express-validator';
import { VerifyUser } from '../middleware/VerifyUser.js';
import { createContact, getContacts, getContact, updateContact, deleteContact} from '../controller/contactController.js';

//user routes
router.post('/register',[
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Email is required')
    .isEmail().withMessage('Email is not valid'),
    body('password').trim().notEmpty().withMessage('Password is required')  
    .isLength({min: 5, max: 30}).withMessage('Password must be at least 5 characters long')  
],Register)

router.post('/login',[
    body('email').trim().isEmail().withMessage('Email is required')
    .isEmail().withMessage('Email is not valid'),
    body('password').trim().notEmpty().withMessage('Password is required')  
    .isLength({min: 5, max: 30}).withMessage('Password must be at least 5 characters long')  
],Login)

router.get('/verify', VerifyUser,Auth)

//contact routes
router.post('/add-contact', VerifyUser, createContact)
router.get('/contacts', VerifyUser, getContacts)
router.get('/contact/:id', VerifyUser, getContact)
router.put('/update-contact/:id', VerifyUser, updateContact)
router.delete('/contact/:id', VerifyUser, deleteContact)

export { router as Router};