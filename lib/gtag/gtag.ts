const GA_TRACKING_ID = "G-YM2WV91LZ5";

type GAPageviewTypes = {
  url: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = ({ url }: GAPageviewTypes) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type GAEventDispatchTypes = {
  action: string;
  category: string;
  label: string;
  value: string | number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action, category, label, value }: GAEventDispatchTypes) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
export { GA_TRACKING_ID, pageview, event };
