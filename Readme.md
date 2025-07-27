# Hawkins User App

A React Native mobile application for Hawkins company users. This app provides a modern, cross-platform mobile experience with authentication, navigation, and user management features.

## 🚀 Features

- **Cross-platform**: Works on both iOS and Android
- **Authentication**: Login, signup, and OTP verification
- **Navigation**: Tab-based navigation with multiple screens
- **Internationalization**: Support for multiple languages (English, Arabic)
- **State Management**: Redux Toolkit for efficient state management
- **Modern UI**: Custom components with consistent design system
- **Secure Storage**: Secure data storage for sensitive information
- **TypeScript**: Full TypeScript support for better development experience

## 📱 Screens

- **Authentication**
  - Onboarding
  - Login
  - Signup
  - OTP Verification
- **Main App**
  - Home
  - Product Details
  - Profile
  - Settings

## 🛠 Tech Stack

- **React Native**: 0.79.1
- **React**: 19.0.0
- **TypeScript**: 5.0.4
- **Redux Toolkit**: 2.6.1
- **React Navigation**: 7.x
- **i18next**: Internationalization
- **React Native Reanimated**: Animations
- **React Native SVG**: Vector graphics support

## 📋 Prerequisites

Before running this app, make sure you have the following installed:

- **Node.js**: >= 18.0.0
- **npm** or **yarn**
- **React Native CLI**
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)
- **CocoaPods** (for iOS dependencies)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd hawkins-userapp
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3. iOS Setup (macOS only)

```bash
cd ios
pod install
cd ..
```

### 4. Start Metro Bundler

```bash
npm start
# Or
yarn start
```

### 5. Run the App

#### For iOS:
```bash
npm run ios
# Or
yarn ios
```

#### For Android:
```bash
npm run android
# Or
yarn android
```

## 📁 Project Structure

```
src/
├── assets/          # Images, fonts, and icons
├── components/      # Reusable UI components
├── config/          # Configuration files
├── context/         # React Context providers
├── hooks/           # Custom React hooks
├── lang/            # Internationalization files
├── models/          # TypeScript interfaces and types
├── navigation/      # Navigation configuration
├── redux/           # Redux store, actions, and reducers
├── screens/         # App screens
├── styles/          # Global styles and themes
├── typings/         # TypeScript declarations
└── utils/           # Utility functions
```

## 🔧 Available Scripts

- `npm start` - Start Metro bundler
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🌐 Internationalization

The app supports multiple languages:
- English (en)
- Arabic (ar)

Language files are located in `src/lang/` directory.

## 🎨 Theming

The app uses a centralized theme system with:
- Color schemes
- Typography
- Spacing and scaling
- Font families

Theme configuration is in `src/styles/` directory.

## 📱 Platform Support

- **iOS**: 12.0+
- **Android**: API level 21+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Hawkins company.

## 🆘 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npx react-native start --reset-cache`
2. **iOS build issues**: Clean build folder in Xcode and run `pod install` again
3. **Android build issues**: Clean project with `cd android && ./gradlew clean`

### Getting Help

If you encounter any issues, please:
1. Check the troubleshooting section above
2. Review React Native documentation
3. Contact the development team

---
