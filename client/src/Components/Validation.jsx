export default function Validation(values) { // Export Validation function
    let errors = {}; // Initialize errors object

    // Regex patterns for email and password validation
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).[a-zA-Z0-9]{8,}$/;

    if(values?.name){ // Check if name is provided
        if(values.name === ''){ // Check if name is empty
            errors.name = 'Name Should not be empty.'; // Error for empty name
        }else if(values.name.length < 3 || values.name.length > 30){ // Check name length
            errors.name = 'Name must be between 3 to 30 characters.'; // Error for invalid length
        }else{
            errors.name = ''; // No error for name
        }
    }
    
    if(values.email === ''){ // Check if email is empty
        errors.email = 'Email is required'; // Error for empty email
    // }else if(!email_pattern.test(values.email)){ // Uncomment to validate email format
    //     errors.email = 'Invalid email format!'; // Error for invalid email format
    }else{
        errors.email = ''; // No error for email
    }
    
    if(values.password === ''){ // Check if password is empty
        errors.password = 'Password Should not be empty.'; // Error for empty password
    // }else if(!password_pattern.test(values.password)){ // Uncomment to validate password format
    //     errors.password = 'Password must be at least 8 characters long, include 1 uppercase, 1 lowercase letter, and 1 number.'; // Error for invalid password
    }else{
        errors.password = ''; // No error for password
    } 

    return errors; // Return errors object
}
