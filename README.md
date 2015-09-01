# NextWAVE
A web application to manage and publish NextWave events 

This applications utilizes Meteor, a full stack web application framework for building web and mobile applications in Javascript.  

Website: https://www.meteor.com/

Documentation: http://docs.meteor.com/

## Quick Start

1) Install Meteor:
```bash
curl https://install.meteor.com | /bin/sh
```

2) Clone this repo:
```bash
git clone CLONE_URL
```

3) Run it:
```bash
cd NextWAVE
sudo meteor
```
The app should now be running on http://localhost:3000/

### Configuration

You'll need to do a bit of configuring to let the application know what accounts are Admin acccounts. This a quite the hack, but is only temporary. 

  i) Create a user account, something simple. "user" and "password will do just fine for the username and password respectively.
  
  ii) Create an admin account, once again "admin" and "password" should do fine for now. 
  
  iii) Now we need to let the application know which account is the admin:
  
  * Log into the application through the admin account you just created
  * Open your browser's debugger tools and navigate to the console.
  * In the console enter `Meteor.userId()`. The console should spit out a string similar to `g3933nmm85FTdpgon`
  * Copy that string and replace the current one in NextWave/client/lib/helpers.js
  * Now the app should be able to display different views based on whether a user or admin is logged in 

### File Structure

This application follows the files structure explained in the [Unofficial Meteor FAQ] (https://github.com/oortcloud/unofficial-meteor-faq) repository under the section [Where should I put my files?](https://github.com/oortcloud/unofficial-meteor-faq#user-content-where-should-i-put-my-files) 
