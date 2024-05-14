1. **Safe Area View**: used to make sure that the content is not hidden by the notch or the home indicator. View, Safe Area View are like divs in HTML.

2. **Image**: require fn to load local images & uri, width, height to load imgs from the web.

3. **Touchable**: to make components clickable. _TouchableNativeFeedback_ is only for Android.

4. **Alert.prompt** only works on ios.

5. **StyleSheet**: validates the style properties. (didn't work when i tried this). _Recommended to define styles_ bsc of _optimizations_.

6. When applying multiple styles, the last style will override the previous ones.

7. Width, Height numbers in styles are in _DIPs (Density Independent Pixels)_. By expressing the size in DIPs, the size will be almost the same on different devices.

8. **Dimensions API**: to get the width and height of the screen. Valuse don't get updated when the **screen rotates**.
