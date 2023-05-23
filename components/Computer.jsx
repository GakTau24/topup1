"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Trending() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(`${process.env.NEXT_PUBLIC_urlAPI}`);

    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'getPcGames' }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'pcgames') {
        setGames(data.data);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  if (games.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4 opacity-20" />
      <h1 className="mb-3 font-semibold text-xl">● PC Games</h1>
      <div className="grid grid-cols-10 max-md:grid-cols-3 gap-3 px-3 max-md:px-[5px] my-5">
        {games.map((item, index) => (
          <Cards data={item} key={item.slug} />
        ))}
      </div>
    </section>
  );
}

function Cards({ data }) {
  const { slug, title, img } = data;
  return (
    <>
      <div className="w-full rounded-lg shadow-xl shadow-gray-300 lg:max-w-sm">
        <Link href={`/pc-games/${slug}`}>
          <Image
            className="rounded-lg"
            src={img}
            width="100"
            height="100"
            layout="responsive"
            objectFit="contain"
            alt={title}
          />
        </Link>
        <div className="md:p-5 max-md:py-4">
          <Link href={`/trending/${slug}`}>
            <h4 className="text-xl text-center font-semibold tracking-tight text-slate-800">
              {title}
            </h4>
          </Link>
        </div>
      </div>
    </>
  );
}
