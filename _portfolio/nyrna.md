---
title: "Nyrna"
header:
  teaser: https://raw.githubusercontent.com/Merrit/nyrna/master/images/nyrna_demo.gif
---

Suspend games and applications.

![Nyrna](https://raw.githubusercontent.com/Merrit/nyrna/master/images/nyrna_demo.gif)

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


#### Platforms

- Linux
- Windows


#### Languages

Flutter / Dart


<br>


[Website](https://nyrna.merritt.codes/){: .btn .btn--info}
[GitHub](https://github.com/Merrit/nyrna){: .btn .btn--info}
