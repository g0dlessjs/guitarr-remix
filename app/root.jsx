import { Meta, Links } from "@remix-run/react";
import styles from "./styles/index.css";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "Guitar - Remix" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crrosOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Outfit:wght@400;700;900&display=swap",
    },
  ];
}

export default function App() {
  return (
    <Document>
      <h1>Hola Mundo desde Remix</h1>
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  );
}
