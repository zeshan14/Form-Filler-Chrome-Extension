chrome.runtime.onInstalled.addListener(function() {
    // Perform any initialization tasks here
    console.log("AutoFill Extension installed.");
  
    // You can also set default values in the storage if needed
    chrome.storage.sync.set({
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
    });
  });
  
  chrome.runtime.onStartup.addListener(function() {
    console.log("AutoFill Extension started.");
  });
  