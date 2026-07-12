import { NextResponse } from "next/server";

const LEETCODE_USERNAME = "BulatGareev";

const QUERY = `
  query userProfile($username: String!) {
    matchedUser(username: $username) {
      submitStats {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
    recentAcSubmissionList(username: $username, limit: 5) {
      title
      titleSlug
      timestamp
    }
  }
`;

export const revalidate = 3600; 

export async function GET() {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "LeetCode unavailable" }, { status: 502 });
    }

    const json = await res.json();
    const user = json?.data?.matchedUser;

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const stats = user.submitStats.acSubmissionNum;
    const get = (d: string) =>
      stats.find((s: { difficulty: string; count: number }) => s.difficulty === d)?.count ?? 0;

    return NextResponse.json({
      total: get("All"),
      easy: get("Easy"),
      medium: get("Medium"),
      hard: get("Hard"),
      recent: json?.data?.recentAcSubmissionList ?? [],
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}