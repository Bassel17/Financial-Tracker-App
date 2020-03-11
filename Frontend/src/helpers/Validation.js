class Validation {
  constructor(userdata){
    this.userEmail = userdata.userEmail;
    this.userPassword =  userdata.userPassword;
  }
  checkEmail(){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userEmail);
  }
  checkPassword(){
    return this.userPassword.length >8;
  }
}
export default Validation;