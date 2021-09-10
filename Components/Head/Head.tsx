import React from "react";

const DOMAIN = "https://72nomesdedeus.com.br";

const FAV_ICON = "/images/webapp/favicon.ico";
const ICON_16 = "/images/webapp/favicon-16x16.png";
const ICON_32 = "/images/webapp/favicon-32x32.png";
const ICON_180 = "/images/webapp/apple-touch-icon.png";
const ICON_192 = "/images/webapp/android-chrome-192x192.png";

//------

const META_TITLE = "72 nomes de deus";
const META_DESCRIPTION = "72 nomes de deus - Uma ferramenta da Cabala";

//------

const APP_NAME = "72 nomes de deus - Ferramenta da Cabala";
const WEB_APP_TITLE = "72 nomes de deus";
const WEB_MANIFEST = "/images/webapp/site.webmanifest";

//------

const MS_APP_CONFIG = "/images/webapp/browserconfig.xml";
const MS_APP_TILE_COLOR = "#2B5797";
const MS_APP_THEME_COLOR = "#333";
const MS_APP_COLOR = "#FFF";

//-----

const TWITTER_CARD = "summary";
const TWITTER_URL = DOMAIN;
const TWITTER_TITLE = WEB_APP_TITLE;
const TWITTER_DESCRIPTION = META_DESCRIPTION;
const TWITTER_IMAGE = DOMAIN + ICON_192;
const TWITTER_CREATOR = "";

//-----

const OG_TYPE = "website";
const OG_SITE_NAME = META_TITLE;
const OG_TITLE = WEB_APP_TITLE;
const OG_DESCRIPTION = META_DESCRIPTION;
const OG_URL = DOMAIN;
const OG_IMAGE = ICON_192;

//-----

const MASK_ICON = "images/webapp/safari-pinned-tab.svg";
const MASK_ICON_COLOR = "#5bbad5";

const Head = () => {
  return (
    <>
      <link rel="icon" href={FAV_ICON} />
      <link rel="icon" type="image/png" sizes="32x32" href={ICON_32} />
      <link rel="icon" type="image/png" sizes="192x192" href={ICON_192} />
      <link rel="icon" type="image/png" sizes="16x16" href={ICON_16} />
      <link rel="manifest" href={WEB_MANIFEST} />
      <meta name="application-name" content={APP_NAME} />
      <meta name="description" content={META_DESCRIPTION} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content={MS_APP_THEME_COLOR} />
      <meta name="color" content={MS_APP_COLOR} />

      {/* APPLE */}
      <link rel="mask-icon" href={MASK_ICON} color={MASK_ICON_COLOR} />
      <link rel="apple-touch-icon" sizes="180x180" href={ICON_180} />
      <meta name="apple-mobile-web-app-title" content={WEB_APP_TITLE} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* MS PROPS */}
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="msapplication-config" content={MS_APP_CONFIG} />
      <meta name="msapplication-TileColor" content={MS_APP_TILE_COLOR} />

      {/* TWITTER PROPS */}
      <meta name="twitter:card" content={TWITTER_CARD} />
      <meta name="twitter:url" content={TWITTER_URL} />
      <meta name="twitter:title" content={TWITTER_TITLE} />
      <meta name="twitter:description" content={TWITTER_DESCRIPTION} />
      <meta name="twitter:image" content={TWITTER_IMAGE} />
      <meta name="twitter:creator" content={TWITTER_CREATOR} />

      {/* OPENGRAPH PROPS */}
      <meta property="og:type" content={OG_TYPE} />
      <meta property="og:title" content={OG_TITLE} />
      <meta property="og:description" content={OG_DESCRIPTION} />
      <meta property="og:site_name" content={OG_SITE_NAME} />
      <meta property="og:url" content={OG_URL} />
      <meta property="og:image" content={OG_IMAGE} />
    </>
  );
};

export default Head;
