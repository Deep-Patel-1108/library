import { bannerType, giftType, orderStatus } from './database/enum.constant';

export const validatorConst = {
  assignment: {
    classId: 'Please Enter valid classId',
    teacherId: 'Please Enter valid teacherId',
    docLink: 'Please Enter valid Value for DocLink',
    submitDate: 'Please Enter valid Date Value for SubmitDate',
    notExist: 'AssignmentId not Exist',
    validId: 'Please Enter a valid Assignment Id',
  },
  // Used Multiple Times
  limit: 'Please Enter Numeric Value for Limit',
  page: 'Please Enter Numeric Value for Page',
  name: 'Name Is Required',
  nameString: 'Please Enter String for name',
  nameverifyLength: 'You can Enter Max 20 Character for Name',
  userId: 'User Id is required',
  userIdNotExist: 'UserId not exist',
  userIdVerify: 'UserId must be UUID',
  date: 'Date Is Required',
  dateFormate: 'Please Enter Valid Date Formate',
  denomination: 'Denomination is Require',
  denominationNumeric: 'Please Add Numeric Value For Denomination',
  email: 'Email is required',
  emailVerify: 'Please enter valid Email',
  emailNotExist: 'User Email not exist',
  phone: 'Phone Number Is Required',
  validPhone: 'Please Enter Valid Phone Number',
  phoneNumeric: 'Please Add Numeric Value For Phone Number',
  password: 'Password is required',
  passwordString: 'Please Add String for Password',
  invalidData: 'Invalid User Data',
  image: 'image is Required',
  PriceValue: 'Price Can not be 0',
  invalidEmail: 'invalid Email Id',
  uploadImageFailed: 'Failed To Upload Image',
  removeImageFailed: 'Failed To Remove Image',

  //Address
  address: {
    name: 'Name Is Required',
    address: 'Address Is Required',
    pinCode: 'Pincode Is Required',
    pinCodeVerify: 'Please Add Numeric Value For Pincode',
    fullName: 'FullName Is Required',
    addressVerify: 'Address Is Required',
    addressOneString: 'Please Add String For Address One',
    addressTwoString: 'Please Add String For Address Two',
    city: 'City Is Required',
    cityVerify: 'Please Add String For City',
    state: 'State Is Required',
    stateVerify: 'Please enter state',
    zipCode: 'Zipcode Is Required',
    zipCodeVerify: 'Please Add Numeric Value For Zipcode',
    phone: 'Phone Number Is Required',
    validAddressId: 'Please provide valid Address id',
    addressNotExist: 'AddressId not Exist',
  },

  //   Add To Cart
  addToCart: {
    occassionDes: 'Occasion Description is required',
    occassionVerify: 'occassion description should be in 20 character limit',
    date: 'Date Is Required',
    denomination: 'Denomination is Require',
    denominationNumeric: 'Please Add Numeric Value For Denomination',
    frameId: 'Frame Id is Required',
    bgImageId: 'Please Provide Valid bgImage Id',
    messageDes: 'Message Description is Required',
    messageDesVerify: 'You can Add max 100 characters for Message Description',
    validAddToCartId: 'Please provide Valid Add To Cart Id',
    addToCartNotExist: 'Add To Cart Id Does Not Exist',
    denominationVerify:
      'please choose 1,2,5,10,20,50,100,200,500 as a denomination',
  },

  //   AUTH
  auth: {
    fName: 'First name is required',
    fNameString: 'Please Add String Value for First Name',
    lName: 'Last name is required',
    lNameString: 'Please Add String Value for Last Name',
    emailVerify: 'Please enter valid Email',
    password: 'Password is required',
    passwordVerify:
      'Password must Contain minimum 8 and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    emailExist: 'Email Already Exist',
    invalidUserPass: 'Email or Password is invalid',
  },

  //   BACKGROUND IMAGE
  bgImage: {
    nameVerify: 'You can Enter Max 20 Character for Name',
    validBgImageId: 'Please provide valid Background Image Id',
    bgImageNotExist: 'Background Image Id Not Exist',
  },

  //   CATEGORY
  catergory: {
    validCategoryId: 'Please provide valid category id',
    name: 'Category Name Is Required',
    nameVerify: 'Please Enter String for name',
    description: 'Description is Required',
    descriptionString: 'Please Enter String Value for Description',
    desLimit: 'You Can Enter Max 100 Character in Description',
    endWithNumeric: 'End with is Numeric ',
    categoryIdNotExist: 'Category Not Exist',
  },

  // CONTACTUS
  contactUs: {
    validCategoryId: 'Please Provide Valid Category Id',
    subject: 'Subject Is Required',
    subjectVerify: 'You can Enter Max 20 Character for Subject',
    subjectString: 'Please Enter String For Subject',
    messageValidation: 'Please enter String in Message',
    contactUsExist: 'Contact Us Not Exist',
  },

  // FRAME

  frame: {
    frameName: 'Frame name Is Required',
    validFrameId: 'Please provide valid frame id',
    notValidId: 'frame size id is not valid',
    frameNotExist: 'Frame Is Not Exist',
    color: 'Color Is Required',
  },

  // NOTE
  note: {
    validNoteId: 'Please provide valid note id',
    isSpecial: 'boolean value required for is Special',
    noteNumber: 'Note Number is required',
    preFix: 'Prefix is Required',
    yearOfPrint: 'Year of print is required',
    price: 'Price Is Required',
    priceNumeric: 'Please Add Numeric Value For Price',
    condition: 'Condition Is Required',
    notForSell: 'Please Check For not for Sell',
    noteExist: 'Note Does Not Exist',
  },
  //   ORDER PRODUCT
  orderProduct: {
    validUserId: 'Please Provide Valid User Id',
    validPaymentId: 'Please Provide Valid paymentId',
    paymentIdNotExist: 'payment Id Does Not Exist',
    status: `Type should be within ${orderStatus}`,
  },

  //   PERMISSION
  permission: {
    validKey: 'Please Enter Valid Key',
    validUser: 'Please Enter Valid User',
    validRole: 'Please Enter Valid Role',
    validPermissionId: 'please provide valid Permission id',
    permissionNotExist: 'Permission Does Not Exist',
  },

  //   PRICE DETAILS
  priceDetails: {
    categoryId: 'Category id is required',
    priceArray: 'Price Array Cannot be Empty',
    priceArrayValid: 'Prices array not valid',
    PriceNotExist: 'Price Details id not Exist',
  },

  //PRODUCTS
  product: {
    noteId: 'Please enter valid noteId',
    noteIdUUID: 'noteId must be UUID',
    frameUUID: 'frameId must be UUID',
    validProductId: 'Please provide valid Product id',
    productNotExist: 'Product Does Not Exist',
  },

  //   Special Notes
  specialNote: {
    reason: 'Please enter valid Reason',
    specialNoteId: 'Please provide valid Special Note id',
    spNoteIdExist: 'SpecialNote not exist',
  },

  //   user
  user: {
    dob: 'Date Of Birth is Required',
    oldPass: 'Please Enter Old Password',
    newPass: 'Please Enter New Password',
    userNotExist: 'User Does Not Exist',
  },

  specialContact: {
    validSpecialContactId: 'Please provide valid SpecialContact id',
    status: 'Please Enter Valid Status',
    comments: 'Please Enter Valid Comments',
    idNotExist: 'SpecialContact Id exist',
  },
  checkOut: {
    priceData: 'Checkout Sessions price cannot be zero in payment mode.',
  },

  gift: {
    validGiftId: 'please enter valid Gift Id',
    type: 'please Enter A type For Gift',
    backgroundImage: 'Please Select Background Image',
    occassion: 'Occassion Is Required',
    name: 'Please Enter a valid Name',
    shortMsg: 'Please Enter a valid short message',
    longMsg: 'Please Enter a valid long message',
    msgForNote: 'Please Enter a valid message for note',
    image: 'Please Select your a valid Image',
    date: 'Please Enter Valid Date',
    dataUrl: 'Please Enter DataUrl',
    typeEnum: `Type should be within ${giftType}`,
    quantity: 'please enter quantity of selected gift',
  },
  denominationPrice: {
    validDenominationPriceId: 'Please Provide Valid Denomination Price Id',
    denominationPriceNotExistId: 'denomination Price Id Does Not Exist',
  },

  //faq
  faq: {
    question: 'Question Is Required',
    answer: 'Answer Is Required ',
    validFaqId: 'Please provide valid Faq id',
    faqNotExist: 'FaqId not Exist',
  },
  banner: {
    Name: 'please Enter a Valid Name',
    description: 'Please Enter a valid Description',
    image: 'Image/Video Is Required',
    type: 'Please Enter a valid Banner Type',
    typeEnum: `Type should be within ${bannerType}`,
    validBannerId: 'Please provide valid Banner id',
    bannerNotExist: 'Banner Id Does not Exist',
  },

  config: {
    limitedEditionDate: 'please Enter a valid Limited Edition Date',
    contactNumber: 'please Enter a valid Contact Number',
    contactEmail: 'please Enter a valid Contact Email',
    contactAddress: 'please Enter a valid Contact Address',
    validConfigId: 'Please provide valid Config id',
    configNotExist: 'Config Id Does not Exist',
  },
};
