import type { NextApiRequest, NextApiResponse } from "next";

const fetchGrafbase = async (query: string) => {
  try {
    const result = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    return result.json();
  } catch (error) {
    throw error;
  }
};

type Data = {
  data?: string;
};

type Error = {
  status?: number;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  try {
    switch (req?.method?.toUpperCase()) {
      case "POST":
        return res
          .status(200)
          .json(await fetchGrafbase(JSON.stringify(req.body)));
      default:
        return res.status(405).json({ status: 405 });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: JSON.stringify(error),
    });
  }
}
