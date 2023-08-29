sb-react-typescript-starter

This repository provides a starter template for building React+Vite applications with TypeScript and Storyblok integration. This README will guide you through the setup process, configuration, and usage of this project.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Scripts](#scripts)
- [Usage](#usage)
- [Components](#components)
- [Environment Variables](#environment-variables)
- [Example Component](#example-component)
- [Switching Preview](#switching-preview)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation


**1. Clone the repository** 
   ```bash
   git clone https://github.com/your-username/sb-react-typescript-starter.git
   ```
**2. Change into project directory** 
```bash
cd sb-react-typescript-starter
```

**3. Install dependencies**
```bash
npm install
```

## Configuration
Create a `.env` file in the root of the project based on the provided example `example.env` file. Fill in the required Storyblok tokens and space ID.

## Scripts
The following npm scripts are available for managing the project:

- `npm run dev` - Starts the development server using Vite.
- `npm run build` - Builds the project using TypeScript and Vite.
- `npm run lint` - Runs ESLint to check for code quality issues.
- `npm run generate-types` - Generates TypeScript component types from Storyblok.
- `npm run preview` - Starts the development server with preview mode.

## Usage
Start the development server:
```bash
npm run dev
```

Open your browser and navigate to http://localhost:5173 to see your application in action.

### Enable Storyblok live editing:
- Setup MACOS: https://www.storyblok.com/faq/setup-dev-server-https-proxy
- Setup Windows: https://www.storyblok.com/faq/setup-dev-server-https-windows

> Notes: There have been problems with using an old node/npm version when installing the local-ssl-proxy package mentioned in the guides above. Consider using node version >= 16.15.0 when following the guide.

## Components
This project utilizes Storyblok components to structure the application's UI. You can find component files in the src/components directory. Each component is associated with a specific Storyblok component type and is defined using TypeScript.

## Environment Variables
Ensure that the required environment variables are set in the .env file. These variables are used to configure Storyblok integration and API access.

## Example Component
An example component file is provided as a reference on how to structure components in this project. You can find it in the `src/components/Page.tsx` file. This component showcases how to utilize the `@storyblok/react` package to integrate Storyblok content into your components.

## Switching Preview
To switch between preview and published content from Storyblok, the app dynamically determines whether to use the preview or published token based on the environment variable VITE_STORYBLOK_VERSION. If set to `draft`, the app uses the preview token (VITE_STORYBLOK_TOKEN_PREVIEW) and fetches draft content. If set to `published`, the app uses the regular token (VITE_STORYBLOK_TOKEN) and fetches published content.

Code snippet of the what determines this logic.
```tsx
const SbIsPreview: string = import.meta.env["VITE_STORYBLOK_PREVIEW"] || "false";

const SbToken: string = SbIsPreview === "true" ? import.meta.env["VITE_STORYBLOK_TOKEN_PREVIEW"] : import.meta.env["VITE_STORYBLOK_TOKEN"];
```

## Contributing
Contributions are welcome! If you have any improvements or fixes, feel free to submit a pull request. For major changes, please open an issue first to discuss your ideas.

## License
This project is licensed under the MIT License.

## Final words
Feel free to modify this README to suit your project's specific details and additional information. If you have any questions or need further assistance, don't hesitate to ask. Happy coding!
