"use strict";

/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL or redirects to no.html if blacklisted
 */
function search(input, template) {
  const blacklistedDomains = [
    "example.com",
    "baddomain.com",
    "blockedsite.org"
  ];

  const blacklistedWords = [
    "hack",
    "cheat",
    "proxy"
  ];

  const lowerInput = input.toLowerCase();

  for (const word of blacklistedWords) {
    if (lowerInput.includes(word)) {
      window.location.href = "no.html";
      return;
    }
  }

  try {
    const url = new URL(input);
    if (blacklistedDomains.includes(url.hostname)) {
      window.location.href = "no.html";
      return;
    }
    return url.toString();
  } catch (err) {}

  try {
    const url = new URL(`http://${input}`);
    if (blacklistedDomains.includes(url.hostname)) {
      window.location.href = "https://cgamz.site/cgpup-links/no";
      return;
    }
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {}

  return template.replace("%s", encodeURIComponent(input));
}
