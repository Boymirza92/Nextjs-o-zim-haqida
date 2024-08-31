"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=20"
        );
        setPosts(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      {isLoading
        ? "Loading..."
        : posts.map((a) => (
            <div key={a.name}>
                 {a.id } {".  "}
              <Link href={`/posts/${a.id}`}>{a.name} {".  "} </Link>
             {a.email}
            </div>
          ))}
    </>
  );
};

export default HomePage;
