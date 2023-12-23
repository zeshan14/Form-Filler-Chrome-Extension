# AutoFill Extension

The AutoFill Extension is a Chrome extension designed to streamline the process of filling out web forms with predefined user information.

## Features

- Autofill first name, last name, email, phone number, password, address, mobile number, state, pincode, landmark, and city fields on web forms.
- Provides default values for easy testing and demonstration.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/AutoFill-Extension.git
    ```

2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" at the top right.
4. Click "Load unpacked" and select the folder containing your extension files.

## Usage

1. Visit any website with form fields.
2. Click the extension icon next to the address bar.
3. In the popup, click "Fill Form."

The extension will attempt to fill in the specified fields with predefined values.

## Customization

You can customize the default values by modifying the `background.js` file. Adjust the values inside the `chrome.storage.sync.set` method.

```javascript
chrome.storage.sync.set({
  firstName: 'YourFirstName',
  lastName: 'YourLastName',
  email: 'you@example.com',
  phoneNo: 'YourPhoneNumber',
  password: 'YourPassword',
  address: 'YourAddress',
  mobileNumber: 'YourMobileNumber',
  state: 'YourState',
  pincode: 'YourPincode',
  landmark: 'YourLandmark',
  city: 'YourCity'
});
