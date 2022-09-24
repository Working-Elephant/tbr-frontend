  /**
   * Check for success response
   * @param {Integer} code 
   * @returns 
   */
   const isResponseSuccess = (code) => {
    return code >= 200 && code <= 300;
  }

  export default isResponseSuccess;