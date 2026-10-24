const TOR = "SOCKS5 127.0.0.1:9050; SOCKS5 192.168.0.25:9050"; // SOCKS именно 5, если просто сокс то днс не резолвится
const I2PD = "SOCKS5 127.0.0.1:4447"; // та-же история
const ygg_pattern = new RegExp(
  '^0?[23][0-9A-Fa-f]{2}(:(:[0-9A-Fa-f]{1,4}){1,6}|::|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){1,5}|::|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){1,4}|::|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){1,3}|::|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){1,2}|::|:[0-9A-Fa-f]{1,4}(::[0-9A-Fa-f]{1,4}|::|:[0-9A-Fa-f]{1,4}(::|:[0-9A-Fa-f]{1,4})))))))|(:(:[0-9A-Fa-f]{1,4}){0,4}|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){0,3}|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){0,2}|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4})?|:[0-9A-Fa-f]{1,4}(:|:[0-9A-Fa-f]{1,4}))))):(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$'
);
const rus_pattern = new RegExp(
  '^(?:api\.ok\.ru|.*\.mail\.ru|.*\.ms\.vk\.(?:ru|com)|iv\.okcdn\.(?:ru|com)|sun.*\.userapi\.com|(?:eh|login|queuev4|api|oauth|st.*)\.vk\.(?:com|ru)|vk\.(?:com|ru)|vkontakte\.ru|(?:m|id|cloud|api-cloud|ord)\.vk\.com|userapi\.com|vkuser\.com|vk\.me|vk\.cc|vkvideo\.ru|tracker-api\.vk-analytics\.ru|akashi\.vk-portal\.net|rabhost\.local|mail\.ru|e\.mail\.ru|biz\.mail\.ru|help\.mail\.ru|o2\.mail\.ru|api\.mail\.ru|cloud\.mail\.ru|clf\.mail\.ru|my\.mail\.ru|otvet\.mail\.ru|agents\.md|touch\.mail\.ru|api\.games\.mail\.ru|max\.ru|web\.max\.ru|st\.max\.ru|platform-api\.max\.ru|botapi\.max\.ru|calls\.okcdn\.ru|st\.okcdn\.ru|dal\.mvk\.com|i\.oneme\.ru|ws-api\.oneme\.ru|api\.oneme\.ru|sdk-api\.apptracer\.ru|(?:^|\.)(?:yandex\.(?:ru|com|net|by|kz|ua|uz|az|tr|fr|de|pl|ro|bg|hu|lt|lv|ee|md|ge|kg|tm|tj|am|il|in|com\.tr)|ya\.ru|yandex\.(?:st|adexchange\.net|apis\.com|mobile\.ru|cloud\.ru|maps\.com|cloud\.net|yandex))(?:$|\.))$'
);
const rutld_pattern = new RegExp('.ru')
function FindProxyForURL(url, host) {
  if (isInNet(host, "192.168.0.0", "255.255.0.0")) return "DIRECT";
  if (isInNet(host, "10.144.0.0", "255.255.0.0")) return "DIRECT";
  if (rus_pattern.test(host)) return "DIRECT";
  if (rutld_pattern.test(host)) return "DIRECT";
  if (ygg_pattern.test(host)) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.i2p")) {
    return I2PD;
  } else if (shExpMatch(host, "*.onion")) {
    return TOR;
  } else {
    return TOR;
  };
}
