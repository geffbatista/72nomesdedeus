// const googleAnalyticsKey = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  componentDidMount() {
    const isBlackThemeActive = true;
    // const {themeClassname} = this.props

    this.setHtmlThemeClassnames(
      !isBlackThemeActive ? "LightTheme" : "DarkTheme"
    );
  }

  setHtmlThemeClassnames(className: string) {
    document.body.className = "";
    document.body.classList.add(className);
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
