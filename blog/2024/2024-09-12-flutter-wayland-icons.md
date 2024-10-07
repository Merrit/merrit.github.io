---
title: Flutter icons on Wayland
tags: [flutter, linux]
---

Flutter apps on Wayland have had an issue for some time where they don't show
their icons in the window decorations, task switchers, and Overview-type
effects. This is because the app's window isn't correctly associated with the 
app's `.desktop` file.

<!-- truncate -->

I contributed a 
[fix that has been merged](https://github.com/flutter/flutter/pull/154522) to
resolve this for newly created projects in the future.

It can be applied to existing projects like so:

Add `g_set_prgname` to the function at the end of the `linux/my_application.cc`
file:

```cpp
MyApplication* my_application_new() {
  // diff-add
  g_set_prgname(APPLICATION_ID);

  return MY_APPLICATION(g_object_new(my_application_get_type(),
                                     "application-id", APPLICATION_ID,
                                     "flags", G_APPLICATION_NON_UNIQUE,
                                     nullptr));
}
```

Also ensure that in the `linux/CMakeLists.txt` file, the line
`set(APPLICATION_ID "<your_app_id>")` is set to your desired application ID
(often the reverse domain name of your app, e.g. `com.example.myapp`).

Now if the app's `.desktop` and icon files are named the same as the 
application ID, the app's window should be correctly associated and the icons 
should show up correctly. (e.g. `com.example.myapp.desktop` and 
`com.example.myapp.svg`)

:::tip

If the same sort of issue is happening for Qt apps, you can use the 
`QGuiApplication::setDesktopFileName` function to similarly associate the 
app's window with its `.desktop` file.

:::
