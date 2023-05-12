// this redirect is only enabled for B2C signins and signups.
debugger;
if (document.referrer.indexOf("b2clogin.com") > -1) {
  // take return query here i.e. "https://myportal/profile?/mypage?id=32fe-325fgw-sr32" and add create url from it, i.e. "https://myportal/mypage?id=32fe-325fgw-sr32"
  const searchParams = new URLSearchParams(window.location.href.split("?")[1]);
  const paramVal = searchParams.get("ReturnUrl");
  if (paramVal) {
    window.location = window.location.origin + paramVal;  // magic happening here.
  } else {
    window.location = window.location.origin;
  }
}
