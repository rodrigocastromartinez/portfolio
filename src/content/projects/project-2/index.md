---
title: "Iris NP Mobile App"
summary: "Iris New Product is a smartphone application developed for Galician Fire Fighters, designed to report incidents."
date: "Feb 2 2024"
draft: false
tags:
- Expo
- React Native
- Typescript
- React Native Paper
- Material Design
- Git
---

Iris New Product is a mobile application built using Expo (SDK 52), a React Native-based framework, specifically designed for Galician firefighter teams. In this project, I have been responsible for making key decisions such as selecting the development framework and defining the styling approach, including the adoption of react-native-paper to implement Material Design components. My role also encompasses bug fixing, leading the development of new features, and driving design enhancements, all while upholding high standards of clean, well-structured, and efficient code. Additionally, I oversee the ongoing maintenance of the Azure code repository, ensuring effective and seamless collaboration within the development team.

<div style="display: flex; gap: 32px; justify-content: center">
    <div style="display: flex; overflow-x: auto; width: 524px; gap: 32px;">
        <img src="/images/np-login.png" alt="NP 1" width="150"/>
        <img src="/images/np-form1.png" alt="NP 2" width="150"/>
        <img src="/images/np-form2.png" alt="NP 3" width="150"/>
        <img src="/images/np-form3.png" alt="NP 4" width="150"/>
        <img src="/images/np-form5.png" alt="NP 5" width="150"/>
    </div>
</div>

This project is a robust mobile application developed using React Native with Expo, designed to deliver a seamless and performant user experience across both iOS and Android platforms. The architecture leverages TypeScript for type safety and maintainability, ensuring scalable and reliable code. The application structure follows a modular approach, with clear separation of concerns across features, components, contexts, and utilities, facilitating both rapid development and ease of future enhancements.

Key technologies integrated into the project include Expo for streamlined development and deployment, React Navigation for intuitive and flexible routing (including stack, tab, and drawer navigators), and Context API for efficient state management across authentication, dialogs, forms, and session handling. The project also incorporates custom hooks to encapsulate reusable logic, and a comprehensive set of reusable UI components—such as buttons, dialogs, snackbars, and input fields—ensuring consistency and a polished user interface throughout the app.

The application supports internationalization (i18n) with a well-organized translations system, enabling dynamic language switching and localization for multiple languages. The design system is underpinned by a centralized theme and token-based styling, allowing for easy customization and adherence to brand guidelines. Custom fonts and SVG assets are integrated to enhance the visual appeal and user engagement, while error boundaries and fallback mechanisms ensure robust error handling and graceful degradation.

On the backend integration side, the app features a dedicated API client for secure and efficient communication with RESTful endpoints, handling authentication, form submissions, and user management. The codebase is structured to facilitate automated testing and continuous integration, with ESLint and TypeScript configurations enforcing code quality and consistency. Overall, this project exemplifies best practices in modern mobile development, with a focus on scalability, maintainability, and user-centric design.