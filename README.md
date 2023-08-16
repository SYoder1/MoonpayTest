# Moonpay Example app with crashes
This is a basic react native init project with only the moonpay sdk and its dependencies. There are 3 branches to it. The repo uses patch-package to patch the node module of the moonpay sdk. This is a iOS only example, but it works the same on android.

  

Branch `main`: I created an example app and installed the moonpay sdk. After launching the app, observe the app crash.

Branch `1`: I applied a patch to resolve the app crash on startup. Now when pressing the “Launch Moon Pay” button, a warning is presented, and the in-app web browser is not shown.

Branch `2`: I applied a second patch to the node module, that comments out the expo import while trying to open the web browser. The Moonpay SDK at this point works correctly.

  
# How to run:

### Setup
```
npm install
cd ios
bundle install
pod install
```

### On  the  `main`  branch

```
npm run ios
```
__Observe crash__

  

### Checkout  branch  1
```
npm install
npm run ios
```
__Observe Warning__

  
### Checkout  branch  2
```
npm install
npm run ios
```
__Observe SDK working as expected__

note: you might need to stop the metro between `npm install`, and restart it while resetting the cache