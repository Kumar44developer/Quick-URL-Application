<div align="center">

# Quick URLs

### Save and revisit your favorite links in one place

A lightweight bookmark manager that lets you store named links, open them in a click, and remove them when you're done. Everything is saved in the browser, so your list stays put between visits. Built with vanilla HTML, CSS, and JavaScript, with no dependencies and no build step.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Storage](https://img.shields.io/badge/Storage-localStorage-orange)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Data Storage](#data-storage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

Quick URLs is a front-end only application that runs entirely in the browser. Users add bookmarks by entering a site name and URL. Each saved bookmark appears as a clickable link with a remove button, and the full list is persisted in the browser's local storage so it survives page reloads.

## Features

- Add named bookmarks with a clickable link that opens in a new tab
- Persistent storage in the browser using local storage
- URL validation to reject malformed addresses
- Duplicate detection to avoid saving the same bookmark twice
- One-click removal of any bookmark
- Zero dependencies beyond an icon font

## Tech Stack

| Technology | Role |
| --- | --- |
| HTML5 | Structure and input form |
| CSS3 | Styling and layout |
| JavaScript | Bookmark logic and rendering |
| Web Storage API | Persistent local storage |
| Font Awesome | Remove button icon |

## How It Works

When the form is submitted, the app validates that both fields are filled and that the URL is well formed, then checks the saved list for duplicates. Valid, unique bookmarks are stored in local storage and rendered as list items with a link and a remove control. On page load the saved bookmarks are read back and displayed. Removing a bookmark filters it out of storage and re-renders the list.

## Project Structure

```
project35/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

No installation or server is required.

Clone the repository:

```bash
git clone https://github.com/Kumar44developer/Quick-URL-Application.git
```

Open `index.html` in any modern browser. For live reloading during development, the VS Code Live Server extension works well.

## Usage

1. Enter a site name and a full URL, including the protocol such as https.
2. Click Add URL to save the bookmark.
3. Click a saved name to open it in a new tab, or use the remove button to delete it.

## Data Storage

Bookmarks are stored under a single key in the browser's local storage as a JSON array. The data stays on your device and is never sent anywhere. Clearing browser storage removes all saved bookmarks.

## Roadmap

- Edit existing bookmarks
- Search and filter the list
- Categories, tags, and folders
- Import and export bookmarks
- Automatic favicon and title fetching

## Contributing

Contributions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request with a clear description.

## License

This project is released under the MIT License.

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
