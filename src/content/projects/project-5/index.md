---
title: "Skrach App"
summary: "Skrach is a collaborative mobile app for musicians to record and mix multi-track demos remotely."
date: "Oct 15 2022"
draft: false
tags:
  - React Native
  - Typescript
  - CSS
  - Redux Toolkit
  - Detox
  - Git
demoUrl: https://github.com/rodrigocastromartinez/skrachapp
---

This is an app that allows users to sign up, log in, and start recording music just like they would in a professional studio. It offers the convenience of using independent channels to record multiple tracks and then blend them seamlessly. Mixing the tracks involves adjusting their relative volumes. The app supports collaborative track recording, allowing multiple users (such as band members) to contribute to the same project. Each member can record their instrument and see the recordings of others reflected in the project. The aim is to streamline the recording process for what is commonly known as 'demos'—the initial approach to bringing a musical project to life, rather than focusing on studio-quality recordings.

<div style="display: flex; gap: 32px; justify-content: center">
    <div style="display: flex; overflow-x: auto; width: 524px; gap: 32px;">
        <img src="/images/skrach-landing.jpg" alt="Skrach 1" width="150"/>
        <img src="/images/skrach-my-profile.jpg" alt="Skrach 2" width="150"/>
        <img src="/images/skrach-project.jpg" alt="Skrach 3" width="150"/>
        <img src="/images/skrach-recording.jpg" alt="Skrach 4" width="150"/>
        <img src="/images/skrach-mixing.jpg" alt="Skrach 5" width="150"/>
    </div>
</div>

Skrach is a mobile recording app designed to simplify the demo creation process for musicians and bands. It allows users to record multi-track projects directly from their phones, with each track on an independent channel that can be mixed by adjusting relative volumes. The app supports collaborative recording, enabling multiple band members to contribute their parts to the same project remotely. Users can create projects, invite collaborators by email, record or overwrite tracks, delete unwanted takes, and play back the full mix—all with autosave functionality to ensure no work is lost.

Built with a backend data model consisting of Users, Projects, and Tracks, the app provides a streamlined workflow for managing musical projects. Users can manage multiple projects, customize project names and privacy settings, and add or remove collaborators as needed. Current features focus on core recording and mixing capabilities, while planned updates include advanced audio controls like panning, equalization, and the ability to export projects as MP3 or WAV files. The goal is to provide an accessible, studio-like recording experience optimized for creating initial musical demos rather than polished final productions.
