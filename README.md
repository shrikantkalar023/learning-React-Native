1. **Safe Area View**: used to make sure that the content is not hidden by the notch or the home indicator. View, Safe Area View are like divs in HTML.

2. **Text**: to display text. Set **numberOfLines:1** to truncate long text.

3. **Image**: require fn to load local images & uri, width, height to load imgs from the web. **ImageBackground** can be used to set a background image.

4. **Touchable**: to make components clickable. _TouchableNativeFeedback_ is only for Android.

5. **Alert.prompt** only works on ios.

6. **StyleSheet**: validates the style properties. (didn't work when i tried this). _Recommended to define styles_ bsc of _optimizations_.

7. When applying _multiple styles_, the _last style will override_ the previous ones.

8. Width, Height numbers in styles are in _DIPs (Density Independent Pixels)_. By expressing the size in DIPs, the size will be almost the same on different devices.

9. **useWindowDimensions**: to get the width and height of the screen. Values get auto updated when the **screen rotates**. Use **useDeviceOrientation** from react-native-community/hooks for orientation value (portrait or landscape). Need to set orientation to default in the app.json file to support orientation changes.

10. We need to set **height: 100% on parent view** to make the child view take the correct height %.

11. **Platform**: to check the platform. _Platform.OS_ returns ios, android, macos, windows, web.

12. **StatusBar.currentHeight**: to get the height of the status bar on android.

13. **SafeAreaView** only works on ios. Add padding = StatusBar.currentHeight on android.

14. **flex**: to divide the space in the container. _flex: 1_ takes the entire space. Inside a container, if we have 2 children, and we set _flex: 1_ on both, they will take equal space. If we set _flex: 2_ on one and _flex: 1_ on the other, the first one will take 2/3 and the second one will take 1/3 of the space.

15. **flexDirection**: default is column.

16. **justifyContent**: aligns the children along the main axis. Default is flex-start.

17. **alignItems**: aligns the children along the cross axis. Default is stretch.

18. **alignSelf**: to align a children of flex containers differently than the other children.

19. **flexWrap**: to wrap the children if they don't fit in the container.

20. When using **flexWrap**, **alignItems** determines the alignment of items within each line. To align the whole content, use **alignContent**, which works only if we have wrapping.

21. **flexbasis** : set size of item along primary axis. maps to width or height.

22. **flexGrow**: to allow the item to grow if there is extra space, same as flex: 1.

23. **flexShrink**: to allow the item to shrink if there is not enough space, same as flex: -1.

24. **flex** is shorthand for flexGrow & flexShrink.

25. use **top, right, bottom, left** to position an element relative to its current position without affecting the layout around it.

26. All components have **default position: relative**.

27. **position: absolute** : to position an element relative to its parent and the layout around it will get affected.

28. **borderColor, borderWidth, borderRadius** are used to style borders. can be applied to any side. **borderRadius: at least 50%** height width to make a circle.

29. **Shadows** : set _shadowOffset_, _shadowOpacity_ for ios. set _elevation_ in android. _shadowColor_ works in both. _shadowRadius_ is optional, works only in ios.

30. No **style inheritance** in react native. Encapsulate styles to reuse them.

31. **Platform.select**: to apply different styles based on the platform or make platform-specific modules e.g. _AppText.ios.tsx_, _AppText.android.tsx_.

32. use **@expo/vector-icons** to easily set up icons.

33. use **rnfes** for boilerplate react native arrow function with styles. **rnstyle** for styles.

34. If there is some content inside a view, it takes **full width by default**, **but not full height**.

35. **FlatLists** to display list of data. They take **data** & **renderItem** required props. It is better to set **keyExtractor** prop also.

36. We can also apply **padding top** using **expo-constants** instead of Platform.OS & StatusBar.currentHeight.

37. In React Native, **margin collapsing** doesn't happen like in CSS.

38. The component in the Stack.Screen receives a **navigation prop** which has a **navigate()** method to navigate to another screen.

39. **navigation.push()** adds a new screen to the stack.

40. Each **tab navigator** should have its own stack navigation state i.e. its own stack navigator.
