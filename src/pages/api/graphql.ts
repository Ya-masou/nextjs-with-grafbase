import type { NextApiHandler } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

const handler: NextApiHandler = async (req, res) => {
  try {
    const proxy = httpProxyMiddleware(req, res, {
      target: "http://127.0.0.1:4000/graphql",
      // changeOrigin: true,
      pathRewrite: [
        {
          patternStr: "^/api/graphql",
          replaceStr: "",
        },
      ],
    });

    return proxy;
  } catch (error) {
    // if (error instanceof AccessTokenError) {
    //   res.status(401).json({
    //     error: error.code,
    //     description: error.message,
    //   });
    //   return;
    // }
    throw error;
  }
};

export default handler;