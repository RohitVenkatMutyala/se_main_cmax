# CHROMEX

A voice-enabled Chrome extension that connects you with different tools and enables numerous searches via voice commands.

## 📝 Description

CHROMEX is a powerful Chrome extension that allows you to interact with various integrated tools using voice commands. It supports web searching, website navigation, UML generation, image-to-speech conversion, and even email composition through simple voice instructions.

## 🗂️ Repository Structure

```
.
├── images/                  # Image assets directory
│   ├── UML.jpeg             # UML diagram image
│   ├── icon.png             # Extension icon
│   ├── icon.svg             # Vector icon
│   ├── image_to_voice.jpeg  # Image to voice converter image
│   └── voice_code.jpeg      # Voice code image
├── scripts/                 # JavaScript files
│   ├── background.js        # Background script
│   ├── bkr.js               # Helper script
│   ├── ccl.js               # Component script
│   ├── jquery-3.6.1.min.js  # jQuery library
│   ├── keyboard.js          # Keyboard handler
│   ├── search.js            # Search functionality
│   └── speech.js            # Speech recognition script
├── README.md                # This file
├── main.html                # Main HTML file
├── manifest.json            # Extension manifest
└── styles.css               # CSS styles
```

## 🔗 Integrated Tools

This extension integrates with several tools. Please set up each tool before using CHROMEX:

1. **UML Generation Tool**: [https://github.com/RohitVenkatMutyala/se_uml](https://github.com/RohitVenkatMutyala/se_uml)
   - Follow the instructions in that repository's README file

2. **Image to Speech Converter**: [https://github.com/RohitVenkatMutyala/se_image_to_text_to_speech-convertor](https://github.com/RohitVenkatMutyala/se_image_to_text_to_speech-convertor)
   - Follow the instructions in that repository's README file

## 🚀 Installation

1. Download all files as a ZIP file
2. Extract the ZIP file to your desktop
3. Open Google Chrome
4. Click on the Extensions button (puzzle piece icon) in the top-right corner
5. Select "Manage Extensions" at the bottom of the dropdown menu
6. Enable "Developer mode" (toggle switch in the top-right corner)
7. Click "Load unpacked" button in the top-left corner
8. Navigate to and select the extracted folder on your desktop (make sure it contains the manifest.json file)
9. The extension should now be installed and visible in your extensions list
10. Set up a keyboard shortcut pattern in Chrome's extension settings

## 💻 Usage

### Activating the Extension
1. Press the keyboard shortcut you've set up (default suggestion: Ctrl+Q)
2. Press "W" to activate voice recognition
3. Grant microphone permission when prompted

### Voice Commands
- **Open websites**: Say "OPEN" followed by the domain name
  - Example: "OPEN youtube" will navigate to YouTube

- **Search**: Say "SEARCH" followed by your search query
  - Example: "SEARCH iit" will perform a web search

- **Tool Integration Commands**:
  - "OPEN MAX" - Launches the UML generation tool
  - "IMAGE TO SPEECH" - Activates the image-to-speech converter
  - "COMPOSE MAIL" - Opens the voice-controlled email composition tool
    - *Note: For email composition, please install the Google Dictation Chrome extension beforehand*

## 🔧 Requirements

- Google Chrome browser (latest version recommended)
- Microphone access for voice commands
- Google Dictation Chrome extension (for email composition feature)
