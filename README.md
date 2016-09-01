# react-native-boilerplate-bridge

Boilerplate of React Native module for android

## Installation

### Installation on Android

Edit `android/settings.gradle` to declare the project directory:
```
include ':RNBridge', ':app'
project(':RNBridge').projectDir = new File(rootProject.projectDir, '../path/to/react-native-boilerplate-bridge/android')
```

Edit `android/app/build.gradle` to declare the project dependency:
```
dependencies {
  ...
  compile project(':react-native-boilerplate-bridge')
}
```

Edit `android/app/src/main/java/.../MainActivity.java` to register the native module:

```java
...
import com.boilerplate.RNBridge.RNBridgePackage; // <-- New
...

public class MainActivity extends ReactActivity {
  ...
  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new RNBridgePackage() // <-- New
    );
  }
```

For older `MainActivity.java` templates, edit as follows:

```java
...
import com.boilerplate.RNBridge.RNBridgePackage; // <-- New
...

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ...
    @Override
  protected void onCreate(Bundle savedInstanceState){
    ...
    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      ...
      .addPackage(new MainReactPackage())
      .addPackage(new RNBridgePackage()) // <-- New
      ...
  }
```

## Basic usage

```js
// Import the react-native-boilerplate-bridge module
var RNBridge = require('../lib/react-native-boilerplate-bridge');

// init
var bridge = new RNBridge();

// Callback

bridge.callbackExample(function(result) {
  console.log('--- RNBridge ---', result);
});
```
