# 🚀 LeadStack Hub

**LeadStack Hub** is a curated lead-generation and data hub for
discovering, researching, extracting, enriching, and organizing B2B
prospecting resources.

It brings lead-generation tools, business data tools, and Chrome
extensions together in one modern web interface.

------------------------------------------------------------------------

## ✨ Features

-   🔎 Search tools and Chrome extensions
-   🎯 B2B lead-generation resources
-   📊 Business data extraction tools
-   🤖 AI-powered business and research tools
-   🌐 Chrome extensions for prospecting and extraction
-   📧 Email discovery and temporary email tools
-   📍 Google Maps lead collection
-   📁 CSV export workflows
-   🔗 Direct links to external tools
-   📤 Native browser/mobile sharing
-   ℹ️ Tool details modal
-   🌙 Dark / Light mode
-   🎨 Dynamic accent colors
-   🖱️ Interactive 3D card hover effects
-   📱 Responsive interface
-   🧭 Category filters with live result counts

------------------------------------------------------------------------

## 🧰 Lead & Data Tools

  \#   Tool            Category
  ---- --------------- --------------------------
  01   Landbase        AI GTM Intelligence
  02   LeadFluxA       B2B Lead Generation
  03   Go4Database     B2B Lead Database
  04   Emailnator      Temporary Email
  05   Consulti AI     AI Business Assistance
  06   Apollo.io       Sales Intelligence
  07   Outscraper      Business Data Extraction
  08   Temp Mail       Temporary Email
  09   Timedatatrack   Time & Data Tracking

### Tool capabilities

**Landbase** - AI-powered GTM intelligence - Account intelligence -
High-value prospect targeting - Personalization workflows

**LeadFluxA** - B2B lead generation - Contact discovery - Company
information - Prospecting workflows

**Go4Database** - B2B lead database - ICP targeting - AI-assisted lead
generation - Company intelligence

**Emailnator** - Temporary email inbox - Disposable email addresses -
Email workflow testing - Quick temporary access

**Consulti AI** - AI-powered assistance - Research support - Business
productivity - AI workflows

**Apollo.io** - B2B company database - Business email and phone data -
Prospect discovery - Sales engagement

**Outscraper** - Google Maps data extraction - Business lead
generation - Company information - Structured data export

**Temp Mail** - Temporary email address - Disposable inbox - Quick email
access - Workflow testing

**Timedatatrack** - Time tracking - Activity records - Data monitoring -
Web-based workflow

The active catalog contains 13 tools. Smart Exporter and Email Hunter,
formerly numbered 11 and 14, plus ConsultAI Email Extractor, numbered 16,
are no longer surfaced in the interface. All existing local files remain
preserved in `downloads/`.

------------------------------------------------------------------------

## 🧩 Chrome Extensions

LeadStack Hub includes Chrome extensions for extraction, prospecting,
email research, and browser-based workflows.

  -----------------------------------------------------------------------
  \#                      Extension               Purpose
  ----------------------- ----------------------- -----------------------
  10                      Google Map Scraper      Google Maps lead
                                                  collection and
                                                  structured export

  12                      LI Prospect Finder      LinkedIn prospect
                                                  discovery

  13                      Snov.io                 Email finding and
                                                  verification

  15                      Open Multiple URLs      Open multiple web pages
                                                  from a URL list

  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 📦 Included Downloadable Extensions

The repository currently contains these local Chrome extension ZIP
files:

``` text
downloads/
├── consultai-email-extractor.zip
├── go4database-smart-exporter.zip
└── omni-harvester-pro.zip
```

### 1. Google Map Scraper

**File:**

``` text
downloads/omni-harvester-pro.zip
```

Features:

-   Google Maps lead collection
-   CSV export
-   Webhook synchronization
-   Browser-based extraction

> Other listed extensions may open their external/Chrome Web Store pages
> instead of using a local ZIP download.

------------------------------------------------------------------------

## 📂 Project Structure

``` text
leadstack-hub/
│
├── index.html
├── script.js
├── styles.css
│
├── images/
│   ├── tool-01.jpg
│   ├── tool-02.jpg
│   ├── tool-03.jpg
│   ├── tool-04.png
│   ├── tool-05.jpg
│   ├── tool-06.jpg
│   ├── tool-07.png
│   ├── tool-08.png
│   ├── tool-09.jpg
│   ├── tool-10.svg
│   ├── tool-11.svg
│   └── ...
│
├── downloads/
│   ├── consultai-email-extractor.zip
│   ├── go4database-smart-exporter.zip
│   └── omni-harvester-pro.zip
│
└── README.md
```

------------------------------------------------------------------------

## 🛠️ Technologies

-   HTML5
-   CSS3
-   JavaScript
-   CSS Grid
-   CSS Variables
-   Browser Web APIs
-   Google Fonts
-   Responsive Web Design

The project is a frontend/static website and does not require a backend
server to display the main interface.

------------------------------------------------------------------------

## 🎨 UI Design

LeadStack Hub uses a modern SaaS-style interface with:

-   Glass-style cards
-   Animated gradients
-   Dynamic accent colors
-   Dark and light themes
-   Responsive layouts
-   Interactive card effects
-   Animated borders
-   Tool search
-   Tool detail modals
-   Native sharing support

------------------------------------------------------------------------

## 🔎 Tool Search

The website provides a search box for finding tools and extensions.

Example searches:

``` text
lead
email
Google Maps
LinkedIn
AI
scraper
Chrome
```

------------------------------------------------------------------------

## 🌈 Dynamic Accent Colors

The application contains multiple accent-color palettes.

A different palette can be selected automatically when the page is
opened during the current browser session.

The color system uses CSS variables such as:

``` text
--accent
--accent2
--accent3
```

------------------------------------------------------------------------

## 🌙 Dark / Light Mode

LeadStack Hub supports both dark and light themes.

The selected theme is stored in browser `localStorage`, allowing the
preference to remain available when the website is revisited.

------------------------------------------------------------------------

## 📤 Sharing

Tool cards include a share button.

When the browser supports the Web Share API, the website uses the
device's native share sheet.

When native sharing is unavailable, the website attempts to copy the
share content and URL to the clipboard.

------------------------------------------------------------------------

## ℹ️ Tool Details

Each tool can provide a **Details** view containing:

-   Tool description
-   Main capabilities
-   Supported workflows
-   Relevant features

The details are displayed in a modal without requiring another page.

------------------------------------------------------------------------

## ⚡ Quick Start

The website is designed to work as a static frontend.

### Option 1 --- Open directly

Open:

``` text
index.html
```

in a modern web browser.

### Option 2 --- Run with a local server

You can use a local static web server such as VS Code Live Server.

------------------------------------------------------------------------

## 📥 Chrome Extension Installation

For the downloadable Chrome extensions:

### Step 1 --- Download

Download the required ZIP file from the website.

### Step 2 --- Extract

Extract the ZIP file into a folder.

### Step 3 --- Open Chrome Extensions

Open:

``` text
chrome://extensions
```

### Step 4 --- Enable Developer Mode

Turn on:

``` text
Developer mode
```

### Step 5 --- Load the Extension

Click:

``` text
Load unpacked
```

Select the extracted extension folder.

------------------------------------------------------------------------

## 🌐 GitHub Pages

Because LeadStack Hub is a static HTML/CSS/JavaScript website, it can be
hosted using GitHub Pages.

### Setup

1.  Create a GitHub repository.
2.  Upload the project files.
3.  Push the project to the `main` branch.
4.  Open the repository's **Settings**.
5.  Select **Pages**.
6.  Choose **Deploy from a branch**.
7.  Select:
    -   Branch: `main`
    -   Folder: `/ (root)`
8.  Save the settings.

GitHub Pages will provide the public website address.

------------------------------------------------------------------------

## 🔐 Privacy & Third-Party Services

LeadStack Hub is primarily a frontend interface.

The website contains links to third-party services and Chrome Web Store
resources. Those external services may have their own:

-   Terms of service
-   Privacy policies
-   Usage restrictions
-   Data policies

Users should review and follow the requirements of each external
service.

------------------------------------------------------------------------

## ⚠️ Disclaimer

LeadStack Hub is a tool directory and frontend interface for accessing
lead-generation, data, research, and browser-extension resources.

Third-party tools listed on the website are external services. LeadStack
Hub does not guarantee their availability, pricing, functionality,
accuracy, or policies.

Users are responsible for complying with applicable laws and the terms
of service of any third-party platform they use.

------------------------------------------------------------------------

## 🚀 Future Improvements

Possible future improvements include:

-   ⭐ Tool ratings and reviews
-   🔖 Favorites
-   🏷️ Advanced category filtering
-   🔍 Advanced search
-   📊 Usage analytics
-   👤 User accounts
-   ☁️ Cloud-based tool management
-   🔄 Tool availability monitoring
-   🧩 Additional Chrome extensions
-   🗂️ Custom categories

------------------------------------------------------------------------

## 👨‍💻 Development

The main project files are:

``` text
index.html
script.js
styles.css
```

### `index.html`

Contains:

-   Website structure
-   Navigation
-   Hero section
-   Tool cards
-   Chrome extension cards
-   Search interface
-   Installation section
-   Details modal
-   Footer

### `script.js`

Contains:

-   Dynamic accent colors
-   Dark/light theme switching
-   Toast messages
-   3D card interaction
-   Native sharing
-   Tool details modal
-   Page entry animation

### `styles.css`

Contains:

-   Global styling
-   Theme variables
-   Responsive layout
-   Tool cards
-   Animations
-   Buttons
-   Modal styling
-   Installation section
-   Footer styling

------------------------------------------------------------------------

## 📄 License

No open-source license has been specified for this project.

Unless a license is added, the source code remains under the copyright
of its owner.

------------------------------------------------------------------------

## ⭐ LeadStack Hub

**Discover. Research. Extract. Prospect.**

A centralized interface for B2B lead-generation and data tools.
