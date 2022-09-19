export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  /**
   * Check for success response
   * @param {Integer} code 
   * @returns 
   */
  export const isResponseSuccess = (code) => {
    return code >= 200 && code <= 300;
  }
  
  
  