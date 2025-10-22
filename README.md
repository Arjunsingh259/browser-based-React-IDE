# CipherStudio - Browser-Based React IDE

A browser-based React IDE built with Next.js and Sandpack, allowing users to create, edit, and preview React projects directly in the browser.

## Features

### Core Features
- **File Management**: Create, edit, and organize project files
- **Code Editor**: Rich code editing with Monaco Editor (via Sandpack)
- **Live Preview**: Real-time preview of React components
- **Save & Load Projects**: Persist projects using localStorage with project IDs
- **Clean UI**: Intuitive interface for development

### Optional Features
- Theme switcher (dark/light)
- Responsive design for desktop and tablet

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Code Execution**: Sandpack (@codesandbox/sandpack-react)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Frontend)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
cipherstudio/
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
├── public/
├── package.json
└── README.md
```

## Usage

1. **Create a New Project**: Click "New Project" to start fresh
2. **Edit Code**: Use the built-in editor to modify files
3. **Preview**: See changes live in the preview pane
4. **Save**: Save your project with a unique ID
5. **Load**: Load existing projects by ID

## Architecture

The application uses Sandpack for code execution and editing, providing a sandboxed environment for React development. Project state is managed locally using browser localStorage.

## Deployment

Deploy the frontend to Vercel for easy access.

## Contributing

Feel free to contribute by opening issues or pull requests.

## License

MIT License
