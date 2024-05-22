import { BsCheckCircleFill } from "react-icons/bs";

export const EmailCheck = (value) => {
  let emailCheck = {};
  const emailCond =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!value) {
    return (emailCheck = {
      input: "empty",
      err_display: "Email is required!",
    });
  } else if (emailCond.test(value) === false) {
    return (emailCheck = {
      input: "invalid",
      err_display: "Enter a valid email address!",
    });
  }
  return (emailCheck = {
    validition: true,
  });
};

export const FirstNameCheck = (value) => {
  let firstNameCheck = {};

  if (!value) {
    return (firstNameCheck = {
      input: "empty",
      err_display: "First Name is required!",
    });
  }
  // else if (/^[A-Za-z]+$/.test(value) === false) {
  //   return (firstNameCheck = {
  //     input: "invalid",
  //     err_display: "Enter the Characters!",
  //   });
  // }
  return (firstNameCheck = {
    validition: true,
  });
};

export const LastNameCheck = (value) => {
  let lastNameCheck = {};

  if (!value) {
    return (lastNameCheck = {
      input: "empty",
      err_display: "Last Name is required!",
    });
  }
  //  else if (/^[A-Za-z]+$/.test(value) === false) {
  //   return (lastNameCheck = {
  //     input: "invalid",
  //     err_display: "Enter the Characters!",
  //   });
  // }
  return (lastNameCheck = {
    validition: true,
  });
};

export const MobileNumberCheck = (value) => {
  let mobileNumberCheck = {};
  const mobileCond = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!value) {
    return (mobileNumberCheck = {
      input: "empty",
      err_display: "Mobile number is required!",
    });
  } else if (mobileCond.test(value) === false) {
    return (mobileNumberCheck = {
      input: "invalid",
      err_display: "Enter a valid mobile number!",
    });
  }
  return (mobileNumberCheck = {
    validition: true,
    success_display: "Successful!",
  });
};

export const onlyNumberCheck = (value) => {
  console.log("value", value);
  let numberCheck = {};
  const numberCond = /^[0-9\b]+$/;
  console.log(numberCond.test(value));
  if (numberCond.test(value) === false) {
    console.log(numberCond.test(value));
    return (numberCheck = {
      input: "invalid",
      err_display: "Enter a valid mobile number!",
    });
  }
  return (numberCheck = {
    validition: true,
    err_display: "",
  });
};

export const OtpCheck = (value) => {
  let otpCheck = {};
  if (!value) {
    return (otpCheck = {
      input: "empty",
      err_display: "Please Enter the OTP!",
    });
  } else if (value?.length < 6) {
    return (otpCheck = {
      input: "LessCharacters",
      err_display: "Please enter all the 6 digits!",
    });
  }
  return (otpCheck = {
    validition: true,
    status: "Successful!",
  });
};

export const CreatePasswordCheck = (value) => {
  let createPasswordCheck = {};
  const passwordCond = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!value) {
    return (createPasswordCheck = {
      input: "empty",
      err_display: "Create a Password!",
    });
  } else if (value?.length < 6) {
    return (createPasswordCheck = {
      input: "lesscharacters",
      err_display: "Should contain more than 6 characters!",
    });
  } else if (passwordCond.test(value) === false) {
    return (createPasswordCheck = {
      input: "invalid",
      err_display: "Should contain at least a number, and a special character!",
    });
  }
  return (createPasswordCheck = {
    validition: true,
  });
};

export const ConfirmPasswordCheck = (value1, value2) => {
  let confirmPasswordCheck = {};

  if (!value2) {
    return (confirmPasswordCheck = {
      input: "empty",
      err_display: "Confirm the Password!",
    });
  } else if (value1 !== value2) {
    return (confirmPasswordCheck = {
      input: "deosnotmatch",
      err_display: "Password did not match!",
    });
  }
  return (confirmPasswordCheck = {
    validition: true,
  });
};
