---
title: "Plasma Setup Security Improvements"
tags: [kde, plasma, plasma-setup, security]
---

Plasma's first-run experience (FRE) / out-of-box experience (OOBE) has seen significant
improvements in security recently.

<!-- truncate -->

Although first off I think I maybe hadn't mentioned yet how the project was renamed.

Previously known as "KDE Initial System Setup" (KISS), the project has been rebranded to
"Plasma Setup" and now sits nicely alongside other system projects like "Plasma Desktop", 
"Plasma Mobile", "Plasma Keyboard", etc.


## Enhancing Security in Plasma Setup

We received a notice of potential security issues from the folks at openSUSE, 
which have [now been addressed](https://invent.kde.org/plasma/plasma-setup/-/merge_requests/48). 

This sort of thing is a great example of why it can be so difficult to provide 
ETAs and timelines for software development: unexpected issues often arise that
need to be addressed before other planned work can proceed, and these issues can take
time to investigate and fix properly; in this case, the security issues required
careful review and testing to ensure that they were resolved without introducing new problems, 
and delayed our initial release by weeks.

I had very little experience with this sort of security-minded defensive programming
before this, so it was a great learning experience for me personally as well. It required 
a whole lot of reading and research to understand the best practices and principles involved, 
and I definitely have a better feeling for how to think about defensive programming in the future.

It amazes me the kinds of things people will try to do to break software, and many of them 
(like path traversal attacks) are things I would never have thought of on my own!

I'd like to thank the openSUSE security team for responsibly disclosing these issues,
and for their patience while we worked through them. Their help has made Plasma Setup
more secure for all users, and I appreciate their dedication to improving the security
of open source software.

A massive thank you specifically to Matthias Gerstner for the multiple rounds of detailed 
and thoughtful reviews and suggestions on the MR to address these issues. Your help was *invaluable*, 
and it was a pleasure working with you! 🙇‍♀️ 💙 🦎


## Looking Ahead

Plasma Setup is nearly ready for initial testing and adoption. There are a couple more items 
to wrap up, but (barring further unforeseen delays!) we are very close to being able to release 
it for early adopters to try out! 🎉
