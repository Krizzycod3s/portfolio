import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <meta
            name="keywords"
            content="Christopher  Umoren, programmer, web developer, websites, Full Stack Developer, React Native, NodeJs , developer, development, Devops Engineer, Mobile app Developer backend,full-stack, HTML, CSS, JavaScript, ReactJS, NextJS, website, portfolio, IT professiona, Website development"
          />
          <meta
            name="description"
            content="
            Full Stack Web Developer : I like to Craft Dynamic and Responsive Web Applications with great user experiences."
          />
          <meta name="robots" content="index, follow" />
          <meta name="rating" content="general" />
          <meta name="language" content="pt-BR" />
          <meta httpEquiv="content-language" content="pt-br" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          <link rel="canonical" href="https://krizzydev.vercel.app" />
          <meta name="theme-color" content="#00d9ff" />
          <meta name="author" content="Christopher Umoren" />
          <meta name="creator" content="Christopher Umoren" />
          <meta name="copyright" content="© 2023 Christopher Umoren" />

          <meta
            property="og:site_name"
            content="Portfolio - Christopher Umoren"
          />
          <meta
            property="og:title"
            content=" Christopher Umoren | Full Stack Developer"
          />
          <meta
            property="og:description"
            content="Full Stack Web Developer : I like to Craft Dynamic and Responsive Web Applications with great user experiences."
          />

          <meta property="og:image" content="/ogimage.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://krizzydev.vercel.app" />
          <meta name="twitter:image" content="/ogimage.png" />

          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
