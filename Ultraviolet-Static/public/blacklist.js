window.nsfwBlocker = (() => {
  const blockedDomains = [
    "pornhub.com","xvideos.com","xnxx.com","onlyfans.com","rule34.xxx",
    "redtube.com","brazzers.com","xhamster.com","hqporner.com","leakgirls.com",
    "f95zone.to","sex.com","efukt.com","spankbang.com","camwhores.tv","tnaflix.com",
    "e621.net","nhentai.net","hentaihaven.xxx","hclips.com","javhub.net",
    "asstr.org","literotica.com","r34.xxx","fapello.com","nudevista.com",
    "theync.com","motherless.com","xart.com","metart.com","bangbros.com",
    "porn.com","tubepornclassic.com","youjizz.com","porn555.com","beeg.com",
    "xvideos2.com","hotmovs.com","nuvid.com","porndig.com","youporn.com",
    "xxxymovies.com","sunporno.com","drtuber.com","eporner.com","tube8.com",
    "4tube.com","fux.com","xxx.com","tubepleer.com","pornhd.com",
    "javlibrary.com","javdb.com","javfree.me","javmost.com","javseen.com",
    "javmodel.com","javhdporn.net","javhd.net","pornhd.net","japaneseporn.xxx",
    "hentaiverse.org","hentai-foundry.com","hentai2read.com","hentaiheroes.com",
    "hitomi.la","pururin.io","asmhentai.com","hanime.tv","hentaigasm.com",
    "animehentai.xxx","fakku.net","erofus.com","pornerbros.com","adultvideosapi.com"
  ];

  const nsfwKeywords = [
    "fuck","shit","bitch","asshole","dick","pussy","cunt","nigger","nigga",
    "faggot","cock","damn","bastard","slut","whore","douche","douchebag",
    "fucker","motherfucker","prick","twat","bollocks","bugger","bloody",
    "arsehole","arse","crap","piss","wanker","git","knob","minge","tosser",
    "bellend","shag","slag","knobhead","tit","tits","dickhead","minger",
    "arsewipe","bum","chink","gook","spic","coon","jap","kike","wop",
    "beaner","wetback","dyke","tranny","retard","mong","spaz","cripple",
    "fag","skank","cum","jizz","homo","paki","raghead","spook","towelhead",
    "zipperhead","gyp","gyppo","heeb","kuffar","kafir","schizo",
    "schizophrenic","mental","nuts","loony","psycho","lunatic","retarded",
    "imbecile","idiot","moron","dumbass"
  ];

  function isBlockedURL(url) {
    const lowerUrl = url.toLowerCase();
    return blockedDomains.some(domain => lowerUrl.includes(domain));
  }

  function containsNSFWKeywords(text) {
    const lowerText = text.toLowerCase();
    return nsfwKeywords.some(keyword => lowerText.includes(keyword));
  }

  function shouldBlock(text) {
    return isBlockedURL(text) || containsNSFWKeywords(text);
  }

  return {
    shouldBlock,
  };
})();
