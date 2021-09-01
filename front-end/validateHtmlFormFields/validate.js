const Validate = function () {
  function validateEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      return false;
    }
    return true;
  }
  function validateAddress(address) {
    var filter = /^([a-z0-9\s\'\#\.\/\,]*)$/i;
    if (!filter.test(address)) {
      return false;
    }
    return true;
  }
  function validateAlphaNumericQuotesOthers(data) {
    const filter = /^([a-z0-9\s\.\'\"\,\&\!\@]*)$/i;
    if (!filter.test(data)) {
      return false;
    }
    return true;
  }
  function validateNumeric(data) {
    const filter = /^([0-9\+\-\s])*$/i;
    if (!filter.test(data)) {
      return false;
    }
    return true;
  }
  function validateAlphaNumeric(data) {
    const filter = /^([a-z0-9\s]*)$/i;
    if (!filter.test(data)) {
      return false;
    }
    return true;
  }
  function validateEmptyString(data) {
    for (var key in data) {
      if (data.hasOwnProperty(key) && data[key] === "") {
        return false;
      }
    }
    return true;
  }
  return {
    allMandatoryFieldError: 'All fields are mandatory',
    emailFieldError: 'Please enter valid Email',
    nameFieldError: 'Please enter valid Name',
    addressFieldError: 'Please enter valid Address',
    numericFieldError: 'Please enter valid Numeric',
    aplhaNumericFieldError: 'Please enter valid Alpha-Numeric',
    otherFieldError: 'Please enter valid Other',
    Success: "All field are ok",
    validateEmail: validateEmail,
    validateAddress: validateAddress,
    validateAlphaNumericQuotesOthers: validateAlphaNumericQuotesOthers,
    validateEmptyString: validateEmptyString,
    validateAlphaNumeric: validateAlphaNumeric,
    validateNumeric: validateNumeric
  }
}();