1. **Safe Area View**: used to make sure that the content is not hidden by the notch or the home indicator. View, Safe Area View are like divs in HTML.

2. **Image**: require fn to load local images & uri, width, height to load imgs from the web. **ImageBackground** can be used to set a background image.

3. **Touchable**: to make components clickable. _TouchableNativeFeedback_ is only for Android.

4. **Alert.prompt** only works on ios.

5. **StyleSheet**: validates the style properties. (didn't work when i tried this). _Recommended to define styles_ bsc of _optimizations_.

6. When applying _multiple styles_, the _last style will override_ the previous ones.

7. Width, Height numbers in styles are in _DIPs (Density Independent Pixels)_. By expressing the size in DIPs, the size will be almost the same on different devices.

8. **useWindowDimensions**: to get the width and height of the screen. Values get auto updated when the **screen rotates**. Use **useDeviceOrientation** from react-native-community/hooks for orientation value (portrait or landscape). Need to set orientation to default in the app.json file to support orientation changes.

9. We need to set **height: 100% on parent view** to make the child view take the correct height %.

10. **Platform**: to check the platform. _Platform.OS_ returns ios, android, macos, windows, web.

11. **StatusBar.currentHeight**: to get the height of the status bar on android.

12. **SafeAreaView** only works on ios. Add padding = StatusBar.currentHeight on android.

13. **flex**: to divide the space in the container. _flex: 1_ takes the entire space. Inside a container, if we have 2 children, and we set _flex: 1_ on both, they will take equal space. If we set _flex: 2_ on one and _flex: 1_ on the other, the first one will take 2/3 and the second one will take 1/3 of the space.

14. **flexDirection**: default is column.

15. **justifyContent**: aligns the children along the main axis. Default is flex-start.

16. **alignItems**: aligns the children along the cross axis. Default is stretch.

17. **alignSelf**: to align a children of flex containers differently than the other children.

18. **flexWrap**: to wrap the children if they don't fit in the container.

19. When using **flexWrap**, **alignItems** determines the alignment of items within each line. To align the whole content, use **alignContent**, which works only if we have wrapping.

20. **flexbasis** : set size of item along primary axis. maps to width or height.

21. **flexGrow**: to allow the item to grow if there is extra space, same as flex: 1.

22. **flexShrink**: to allow the item to shrink if there is not enough space, same as flex: -1.

23. **flex** is shorthand for flexGrow & flexShrink.

24. use **top, right, bottom, left** to position an element relative to its current position without affecting the layout around it.

25. All components have **default position: relative**.

26. **position: absolute** : to position an element relative to its parent and the layout around it will get affected.
