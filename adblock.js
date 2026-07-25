// Hides common ad elements dynamically as the game loads
const hideAds = () => {
  const adSelectors = [
    ".ad",
    ".ads",
    "#ad-container",
    'iframe[src*="googleads"]',
    'iframe[src*="doubleclick"]',
    '[id*="ad-"]',
  ];
  adSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  });
};

document.addEventListener("DOMContentLoaded", hideAds);
setInterval(hideAds, 2000);
