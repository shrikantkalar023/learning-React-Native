1. **Safe Area View**: used to make sure that the content is not hidden by the notch or the home indicator. View, Safe Area View are like divs in HTML.

2. **Image**: require fn to load local images & uri, width, height to load imgs from the web.

3. **Touchable**: to make components clickable. _TouchableNativeFeedback_ is only for Android.

4. **Alert.prompt** only works on ios.

5. **StyleSheet**: validates the style properties. (didn't work when i tried this). _Recommended to define styles_ bsc of _optimizations_.

6. When applying multiple styles, the last style will override the previous ones.

7. Width, Height numbers in styles are in _DIPs (Density Independent Pixels)_. By expressing the size in DIPs, the size will be almost the same on different devices.

8. **useWindowDimensions**: to get the width and height of the screen. Values get auto updated when the **screen rotates**. Use **useDeviceOrientation** from react-native-community/hooks for orientation value (portrait or landscape). Need to set orientation to default in the app.json file to support orientation changes.

9. We need to set **height: 100% on parent view** to make the child view take the correct height %.

10. **Platform**: to check the platform. _Platform.OS_ returns ios, android, macos, windows, web.

11. **StatusBar.currentHeight**: to get the height of the status bar.

12. **SafeAreaView** only works on ios. Add padding = StatusBar.currentHeight on android.

13. **flex**: to divide the space in the container. _flex: 1_ takes the entire space. Inside a container, if we have 2 children, and we set _flex: 1_ on both, they will take equal space. If we set _flex: 2_ on one and _flex: 1_ on the other, the first one will take 2/3 and the second one will take 1/3 of the space.
