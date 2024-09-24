---
title: 'Projects'
---

In addition to my work on [KDE](https://invent.kde.org/merritt) and
miscellaneous [open source contributions](https://github.com/Merrit), these are
some of my personal projects:


## Nyrna

Suspend games and applications.

![Promo](https://nyrna.merritt.codes/assets/images/promo-e8afdfd466844e711c6d2117efa5c5c4.jpg)

Nyrna is a cross-platform desktop application written with Flutter that allows
one to suspend and resume applications.

The design has intentionally been kept simple and minimalist as this software is
expected to be used by anyone, including those who are not 'tech-savvy'.

Working with Flutter to create Nyrna has been excellent, as even while
considered an alpha level feature the desktop software creation experience has
been quite exceptional.

On Linux the project is quite straight forward, making use of regular system 
calls to get process information, suspend, and resume.

Windows on the other hand required a great deal more attention, as I have found
throughout the project that the win32 API does not provide a meaningful
interface with which to check the status of a process, nor to send a signal
like one familiar with Linux might expect.

I ended up writing several direct wrappers
using `dart:ffi` - the dart Foreign Function Interface that facilitates C
interop, in order to make calls to the win32 API directly from native Dart code,
as well as 
[creating a small library](https://pub.dev/packages/win32_suspend_process) 
specifically to handle the calls to `ntdll.dll` in order to use the 
undocumented `NtSuspendProcess()` and `NtResumeProcess()` functions.

While not easy or straightforward, the challenge presented here was quite
interesting and rewarding - and I enjoyed learning more about systems level
programming and APIs.

**Languages**

- Flutter / Dart
- Small amount of C++ via the C interop library `dart:fii`

**Platforms**

- Linux
- Windows

**Packaging**

- Linux:
  - AppImage
  - Portable
  - Snap

<p />

- Windows:
  - Installer exe
  - Portable
  - winget

<a class="button button--primary" href="https://nyrna.merritt.codes/" target="_blank">Website</a>

<p />

<a href="https://github.com/Merrit/nyrna" target="_blank">
![GitHub](https://img.shields.io/github/stars/merrit/nyrna?style=social&label=GitHub)
</a>


<br />


## Unit Bargain Hunter

A quick and simple way to verify which is the best value when comparing what to
shop for.

![Showcase](https://raw.githubusercontent.com/Merrit/unit_bargain_hunter/main/assets/images/promo/promo.png)

Unit Bargain Hunter is a multi-platform application that allows the
user to compare multiple items when shopping by item count, volume, or weight
along with the price of each item in order to easily find which is the best
value and by how much.

Unit Bargain Hunter is a relatively straight-forward app with a light / dark
theme toggle and using `bloc` for state management.

**Languages**

- Flutter & Dart

**Platforms**

- Windows
- Linux
- Web
- Android
  
iOS and macOS should work as well given a Mac to compile
on & a developer account to distribute them.

**Packaging**

- Linux:
  - AppImage
  - Portable

- Windows:
  - Installer exe
  - Portable
  - winget

- Android:
  - Google Play store
  - APK

<a class="button button--primary" href="/bargain/">Website</a>

<p />

<a href="https://github.com/Merrit/unit_bargain_hunter" target="_blank">
![GitHub](https://img.shields.io/github/stars/merrit/unit_bargain_hunter?style=social&label=GitHub)
</a>


<br />


## KRunner API

A user-friendly API for KDE’s KRunner application.

![Showcase](https://github.com/Merrit/krunner-dart/blob/8dee34a008fae6883d3e2822af92c4afa33b30da/assets/images/promo/promo.png?raw=true)

Improves on the standard KRunner API by offering a user-friendly language (Dart)
along with type safety, null safety, named parameters,  and extensives
documentation and examples.

**Languages**

- Dart

<a class="button button--primary" href="https://pub.dev/packages/krunner" target="_blank">Website</a>

<p />

<a href="https://github.com/Merrit/krunner-dart" target="_blank">
![GitHub](https://img.shields.io/github/stars/merrit/krunner-dart?style=social&label=GitHub)
</a>
