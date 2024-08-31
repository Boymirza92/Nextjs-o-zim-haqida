"use client";
import "../home.css";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();
  return (
    <div className="homepage-container">
      <h1>Blog Page</h1>
      <button onClick={() => router.push("blog/oneblog")}>
        Blogning bir turiga o'tish
      </button>
    </div>
  );
}
