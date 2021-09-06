const GA_TRACKING_ID = "G-YM2WV91LZ5";

type GAPageviewTypes = {
  url: string;
};

const initGAConfigs = (url: string) => {
  window?.gtag("config", GA_TRACKING_ID, {
    page_title: document?.title,
    page_location: window?.location?.href,
    page_path: url,
    send_page_view: true,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = ({ url }: GAPageviewTypes) => {
  initGAConfigs(url);

  window?.gtag("event", "page_view", {
    page_title: document?.title,
    page_location: window?.location?.href,
    page_path: url,
  });
};

type GAEventDispatchTypes = {
  category?: string;
  action?: string;
  label?: string;
  value?: string | number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action, category, label, value }: GAEventDispatchTypes) => {
  window?.gtag("event", "screen_view", {
    event_category: category,
    event_action: action,
    event_label: label,
    value: value,
  });
};
export { GA_TRACKING_ID, pageview, event };
