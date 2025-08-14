import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Your favicon and Google Fonts */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />
        {/* Inline script to set data-theme early and prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    var mql = window.matchMedia('(prefers-color-scheme: dark)');
                    document.documentElement.setAttribute('data-theme', mql.matches ? 'dark' : 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* CSS to hide body until theme is applied */}
        <style>{`
          html:not([data-theme]) body {
            visibility: hidden;
          }
          html[data-theme] body {
            visibility: visible;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
