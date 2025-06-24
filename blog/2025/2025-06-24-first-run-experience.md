---
title: First Run Experience Progress
tags: [kde]
---

import firstRunExperienceVideo from './2025-06-24-first-run-experience.webm';

Plasma's upcoming first-run experience is coming along nicely.

<!-- truncate -->

After a bunch of research and discussions we settled on continuing / fixing up
the [KISS project](https://invent.kde.org/system/kiss) (KDE Initial System
Setup) for the new First Run Experience (FRE) / Out-Of-Box Experience (OOBE). It
was in a sort of half finished state.

Since then has been a bunch of work on it such as:

- Getting it to compile and run
- Whole _bunch_ of fixes, cleanup, and polish to the UI, UX, and code/developer
  experience
- Implemented the ability to actually create the new user (you could enter a
  name and password, but it was all basically placeholder GUI previously)
- Added language selection front/back ends
- Added basic build / run instructions to the README
- Added ECM logging
- Cleaned up the debug output which made changes more difficult
- Added basic CI (thanks Nico!)
- Added keyboard layout selection front/back ends

That last one was more difficult than expected.. turns out keyboard layouts can
be quite complex!

First came some refactoring of the keyboard layouts KCM from `plasma-desktop` so
we could reuse some of the existing, complex functionality. Then adapting a
UI/UX appropriate for the FRE. Investigating things like keyboard models,
detecting defaults, mapping language to keyboard layout, etc..

Then taking the results of the user choice and figuring out how to apply that
both to the system as a default (`systemd-localed` dbus call) as well as to the
running Plasma session (setting the value manually in the `kxkbrc` keyboard
settings file).

As is often the case with software development, that succinct summary belies
the massive amount of work it took to get there! 😅 💪

With that work completed, we have _most_ of what is needed for a minimum viable
product!

Next up:

- Granting authentication without a user prompt
  - Plan: special user with `sysusers.d` and a polkit rule
- Running automatically on first boot & in live sessions
  - Plan: `systemd` unit seems promising, but more research is needed
- Improve documentation
  - Especially related to building & running without `kde-builder`
- Think about the name
  - I am not thrilled with the `KISS` acronym personally 🤷‍♀️

There is also obviously a lot of improvements and polish that can be made, but
for now here is a preview of the FRE:

<video controls width="90%">
  <source src={firstRunExperienceVideo}/>
</video>
