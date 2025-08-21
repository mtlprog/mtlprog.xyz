Bun.serve({
  routes: {
    "/": new Response("OK"),
    "/.well-known/stellar.toml": new Response(
      await Bun.file("./public/.well-known/stellar.toml").bytes(),
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      },
    ),
  },
  port: process.env.PORT || "3000",
});
