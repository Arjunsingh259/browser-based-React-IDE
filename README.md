# CipherStudio - Browser-Based React IDE

A browser-based React IDE that allows users to create, edit, and preview React projects directly in the browser. Built with Next.js, Sandpack, and Tailwind CSS.

## Features

### Core Features
- **File Management**: Create, rename, and delete project files
- **Code Editor**: Rich code editor powered by Monaco Editor (via Sandpack)
- **Live Preview**: Real-time preview of React projects as you code
- **Save & Load Projects**: Persist projects using localStorage with unique project IDs
- **Theme Switcher**: Toggle between dark and light themes

### Optional Features
- Responsive UI for desktop and tablet
- Autosave functionality (can be toggled)
- Clean and intuitive interface

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Code Execution**: Sandpack (@codesandbox/sandpack-react)
- **Styling**: Tailwind CSS
- **Persistence**: localStorage (client-side)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Arjunsingh259/browser-based-React-IDE.git
cd browser-based-React-IDE
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Create a New Project**: Click "New Project" to start a fresh React project.
2. **Edit Files**: Use the file explorer to select files and edit them in the code editor.
3. **Live Preview**: See your changes reflected instantly in the preview pane.
4. **Save Project**: Click "Save" to persist your project to localStorage.
5. **Load Project**: Click "Load" and enter a project ID to reload a saved project.
6. **File Operations**:
   - Create: Click "Create File" and enter a filename.
   - Rename: Click "Rename File", select a file, and enter a new name.
   - Delete: Click "Delete File" and select a file to remove.
7. **Theme Toggle**: Click the theme button to switch between dark and light modes.

## Project Structure

```
cipherstudio/
├── src/
│   └── app/
│       ├── layout.tsx    # Root layout with metadata
│       ├── page.tsx      # Main IDE component
│       └── globals.css   # Global styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Architecture

- **SandpackProvider**: Manages the Sandpack environment and file state
- **Sandpack Component**: Renders the code editor, file explorer, and preview
- **localStorage**: Handles project persistence with project IDs
- **React Hooks**: Manage component state (files, project name, theme)

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Access your live IDE at the provided Vercel URL

### Other Options
- **Render/Railway**: Deploy the Next.js app to these platforms
- **Netlify**: Use for static deployment (though dynamic features may be limited)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Assessment Criteria

- **Core Functionality (40%)**: File management, code editing, live preview, save/load
- **Code Structure & Readability (20%)**: Clean, well-organized TypeScript/React code
- **UI/UX Clarity (20%)**: Intuitive interface and responsive design
- **Creativity & Additional Features (10%)**: Theme switcher, additional file operations
- **Documentation & Demo (10%)**: README, code comments, working demo

## Future Enhancements

- Backend integration with Node.js/Express and MongoDB for cloud persistence
- User authentication and project sharing
- Collaboration features
- Support for additional frameworks (Vue, Angular)
- Plugin system for extensions
