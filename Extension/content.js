chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fillForm') {
      const formData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohnDoe@gmail.com',
        phoneNo: '9876543210',
        password: 'John@Doe',
        address: 'nagar colony',
        mobileNumber: '9876543210',
        state: 'Telangana',
        pincode: '000000',
        landmark: 'Hospital',
        city: 'Hyderabad'
      };
  
      const formFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
      
      formFields.forEach(field => {
        switch (field.name.toLowerCase()) {
          case 'firstname':
            field.value = formData.firstName;
            break;
          case 'lastname':
            field.value = formData.lastName;
            break;
          case 'email':
            field.value = formData.email;
            break;
          case 'phoneno':
            field.value = formData.phoneNo;
            break;
          case 'password':
            field.value = formData.password;
            break;
          case 'address':
            field.value = formData.address;
            break;
          case 'mobilenumber':
            field.value = formData.mobileNumber;
            break;
          case 'state':
            field.value = formData.state;
            break;
          case 'pincode':
            field.value = formData.pincode;
            break;
          case 'landmark':
            field.value = formData.landmark;
            break;
          case 'city':
            field.value = formData.city;
            break;
          // Add more cases for additional fields as needed
        }
      });
    }
  });
  