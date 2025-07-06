"use strict";

/**
 *
 * @param {string} input
 * @param {string} template Template for a search query.
 * @returns {string} Fully qualified URL or redirects to no.html if blacklisted
 */
function search(input, template) {
  const blacklistedDomains = [
"pornhub.com", "xvideos.com", "redtube.com", "xnxx.com", "tube8.com", "youjizz.com", "brazzers.com", "bangbros.com", "porn.com", "adultfriendfinder.com", "youporn.com", "spankwire.com", "nuvid.com", "tnaflix.com", "thumbzilla.com", "xhamster.com", "hentaihaven.xxx", "eroprofile.com", "cam4.com", "chaturbate.com",
"sextvx.com", "fapdu.com", "xart.com", "slutload.com", "pornhd.com", "drtuber.com", "ecsstasy.com", "beeg.com", "eroticax.com", "fucktube.com", "porndig.com", "eporner.com", "porn555.com", "gaytube.com", "xtube.com", "pornoxo.com", "porntrex.com", "alohatube.com", "nuvid.com", "fux.com",
"realgirls.net", "cumlouder.com", "javhub.net", "javhdporn.net", "javtube.net", "javseen.com", "javplanet.com", "jav4you.com", "hclips.com", "3movs.com", "pornhdx.com", "pornhat.com", "vidlox.tv", "madthumbs.com", "pornrabbit.com", "tubepornclassic.com", "sex.com", "xvideos2.com",
"pornzog.com", "ah-me.com", "yourlust.com", "shemale.xxx", "trans500.com", "trannyone.com", "motherless.com", "hugeboobs.xxx", "hustler.com", "bangbrosnetwork.com", "kink.com", "fetlife.com", "mature.nl", "xxxbunker.com", "dporn.com", "eroprofile.com", "eporner.com", "xhamsterlive.com",
"sexyhub.com", "fux.com", "gaypornhub.com", "sexu.com", "webcamhub.com", "xxxymovies.com", "porn555.com", "tubegalore.com", "spankbang.com", "porn.com", "zbporn.com", "redwap.me", "freetubeapp.com", "camwhores.tv", "xxnx.com", "hunporn.com", "sluttywebcams.com", "yobt.com", "pornhub.com", "xvideos.com", "redtube.com", "xnxx.com", "tube8.com", "youjizz.com", "brazzers.com", "bangbros.com", "porn.com", "adultfriendfinder.com", "youporn.com", "spankwire.com", "nuvid.com", "tnaflix.com", "thumbzilla.com", "xhamster.com", "hentaihaven.xxx", "eroprofile.com", "cam4.com", "chaturbate.com",
"sextvx.com", "fapdu.com", "xart.com", "slutload.com", "pornhd.com", "drtuber.com", "ecsstasy.com", "beeg.com", "eroticax.com", "fucktube.com", "porndig.com", "eporner.com", "porn555.com", "gaytube.com", "xtube.com", "pornoxo.com", "porntrex.com", "alohatube.com", "nuvid.com", "fux.com",
"realgirls.net", "cumlouder.com", "javhub.net", "javhdporn.net", "javtube.net", "javseen.com", "javplanet.com", "jav4you.com", "hclips.com", "3movs.com", "pornhdx.com", "pornhat.com", "vidlox.tv", "madthumbs.com", "pornrabbit.com", "tubepornclassic.com", "sex.com", "xvideos2.com",
"pornzog.com", "ah-me.com", "yourlust.com", "shemale.xxx", "trans500.com", "trannyone.com", "motherless.com", "hugeboobs.xxx", "hustler.com", "bangbrosnetwork.com", "kink.com", "fetlife.com", "mature.nl", "xxxbunker.com", "dporn.com", "eroprofile.com", "eporner.com", "xhamsterlive.com",
"sexyhub.com", "fux.com", "gaypornhub.com", "sexu.com", "webcamhub.com", "xxxymovies.com", "porn555.com", "tubegalore.com", "spankbang.com", "porn.com", "zbporn.com", "redwap.me", "freetubeapp.com", "camwhores.tv", "xxnx.com", "hunporn.com", "sluttywebcams.com", "yobt.com",
"erome.com", "fapello.com", "fux.com", "adultvideos.com", "onlyfans.com", "camsoda.com", "myfreecams.com", "stripchat.com", "imlive.com", "livejasmin.com", "camster.com", "bonga.com", "bonga.tv", "chaturbate.com", "cam4.com", "imlive.com", "flirt4free.com", "xlovecam.com", "cams.com", "cams.com",
"tiny4k.com", "lust.com", "3movs.com", "empflix.com", "mofos.com", "teamskeet.com", "slutload.com", "xvideos3.com", "cumonherface.com", "tnaflix.com", "pornrabbit.com", "tubetubetube.com", "pornhd.com", "eporner.com", "porn555.com", "pornoxo.com", "hdporn.com", "theporndude.com",
"yobt.com", "fapdu.com", "pornvegas.com", "nuvid.com", "fux.com", "drtuber.com", "gaytube.com", "pornrabbit.com", "thumbzilla.com", "pornhubpremium.com", "xhamsterlive.com", "pornhd.com", "xvideos2.com", "youjizz.com", "redtube.com", "tube8.com", "xnxx.com", "xvideos.com",
"javhdporn.net", "javhub.net", "javseen.com", "javplanet.com", "jav4you.com", "pornhdx.com", "pornhat.com", "vidlox.tv", "madthumbs.com", "pornrabbit.com", "tubepornclassic.com", "sex.com", "xvideos2.com", "pornzog.com", "ah-me.com", "yourlust.com", "shemale.xxx", "trans500.com",
"trannyone.com", "motherless.com", "hugeboobs.xxx", "hustler.com", "bangbrosnetwork.com", "kink.com", "fetlife.com", "mature.nl", "xxxbunker.com", "dporn.com", "eroprofile.com", "eporner.com", "xhamsterlive.com", "sexyhub.com", "gaypornhub.com", "sexu.com", "webcamhub.com", "xxxymovies.com",
"porn555.com", "tubegalore.com", "spankbang.com", "zbporn.com", "redwap.me", "freetubeapp.com", "camwhores.tv", "xxnx.com", "hunporn.com", "sluttywebcams.com", "yobt.com", "erome.com", "fapello.com", "fux.com", "adultvideos.com", "onlyfans.com", "camsoda.com", "myfreecams.com",
"stripchat.com", "imlive.com", "livejasmin.com", "camster.com", "bonga.com", "bonga.tv", "flirt4free.com", "xlovecam.com", "cams.com", "tiny4k.com", "lust.com", "empflix.com", "mofos.com", "teamskeet.com", "cumonherface.com", "hdporn.com", "theporndude.com"
  ];

  const blacklistedWords = [
"adult", "porn", "xxx", "sex", "erotic", "escort", "nude", "naked", "fetish", "hentai", "gayporn", "lesbianporn", "hardcore", "bdsm", "camgirl", "milf", "incest", "teenporn", "anal", "pussy", "dick", "cock", "boobs", "tits", "blowjob", "cum", "orgy", "voyeur", "sexchat", "pornhub", "xvideos", "redtube", "xnxx", "tube8", "youjizz", "brazzers", "bangbros", "xxxvideos", "adultfriendfinder", "pornsite", "sexshop", "erotica", "nudity"
  ];

  const lowerInput = input.toLowerCase();

  // Check for blacklisted words
  for (const word of blacklistedWords) {
    if (lowerInput.includes(word)) {
      window.location.href = "no.html";
      return;
    }
  }

  // Try to parse as full URL
  try {
    const url = new URL(input);
    if (blacklistedDomains.includes(url.hostname)) {
      window.location.href = "no.html";
      return;
    }
    return url.toString();
  } catch (err) {
    // Not a valid URL, continue
  }

  // Try to parse as domain (add http://)
  try {
    const url = new URL(`http://${input}`); // Fixed: Added backticks for template literal
    if (blacklistedDomains.includes(url.hostname)) {
      window.location.href = "no.html";
      return;
    }
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
    // Not a valid domain, continue
  }

  // Default to search query
  return template.replace("%s", encodeURIComponent(input));
}

// Export the function so it can be imported
export { search };