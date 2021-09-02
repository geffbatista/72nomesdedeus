import Document, { Head, Html, Main, NextScript } from "next/document";

const googleAnalyticsKey = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsKey}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date()); 
                gtag('config', '${googleAnalyticsKey}');
              `,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
