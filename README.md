# github-nice-review
A Chrome extension for making the Github PR review view less noisy

It hides diff rows that contain only a code comment. Toggle it with the toolbar button or `Alt+Shift+C`.

## Install

1. Open `chrome://extensions` and turn on Developer mode.
2. Click **Load unpacked** and choose this folder.
3. Pin the extension's icon if you want a toolbar button.
4. Open `chrome://extensions/shortcuts` to check or change the shortcut. Chrome skips the suggested one if another extension already uses it.

GitHub tabs that were already open need one reload before the toggle works there.

## How it works

- `hide.css` holds the rule, and the toggle sets a class on `<html>`, so rows GitHub loads later are hidden too.
- The on/off state is saved in GitHub's `localStorage`, so it survives page reloads.
- The extension needs no permissions.
