const TOR = "SOCKS5 127.0.0.1:9050; SOCKS5 192.168.0.25:9050"; // SOCKS именно 5, если просто сокс то днс не резолвится
function FindProxyForURL(url, host) {
  return TOR;
}
