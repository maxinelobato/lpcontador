import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
// import { FB_PIXEL_ID } from '../../lib/FacebookPixel';
// import { GTM_ID } from '../../lib/GoogleTagManager';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          {/* FACEBOOK PIXEL - START*/}
          {/* <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript> */}
          {/* FACEBOOK PIXEL - END*/}
          {/* 👇 Here's the script */}
          {/* GOOGLE TAG MANAGER - START*/}
          {/* <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript> */}
          {/* GOOGLE TAG MANAGER - END*/}
          {/* GOOGLE ANALYTICS - START */}
          {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        /> */}
          {/* GOOGLE ANALYTICS - END */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
