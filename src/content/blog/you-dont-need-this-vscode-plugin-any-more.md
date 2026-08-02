---
title: "You Don't Need This VS Code Plugin Anymore"
excerpt: 'VS Code can automatically rename paired HTML, XML, and JSX tags without an external extension.'
publishDate: '2024-01-18T15:53:45'
updatedDate: '2024-06-18T19:51:20'
tags: ['VS Code']
heroImage: '/images/blog/visual-studio-code.png'
legacyUrl: 'https://devcanvas.org/you-dont-need-this-vscode-plugin-any-more/'
---

Hello again, friends!

A popular VS Code extension is [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag). I used it frequently in the past, but VS Code now supports linked tag editing in HTML, XML, and JSX without an external extension.

Open your user `settings.json` file and add:

```json
"editor.linkedEditing": true
```
