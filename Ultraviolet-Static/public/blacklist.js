window.nsfwBlocker = (() => {
  const blockedDomains = [
    "pornhub.com", "xvideos.com", "redtube.com", "xhamster.com", "xnxx.com",
    "rule34.xxx", "hentaihaven", "f95zone.to", "onlyfans.com", "camgirl"
  ];

  const nsfwKeywords = [
    "porn", "nude", "sex", "hentai", "xxx", "18+", "rule34", "onlyfans", "cam"
  ];

  function isBlockedURL(url) {
    return blockedDomains.some(domain => url.includes(domain));
  }

  function containsNSFWKeywords(text) {
    const lower = text.toLowerCase();
    return nsfwKeywords.some(keyword => lower.includes(keyword));
  }

  function shouldBlock(text) {
    return isBlockedURL(text) || containsNSFWKeywords(text);
  }

  return {
    shouldBlock,
  };
})();
