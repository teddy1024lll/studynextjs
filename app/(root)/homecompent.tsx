import { error } from "console";
import next from "next";
import React from "react";

// eslint-disable-next-line @next/next/no-async-client-component
const Homecompent = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
    // next: { revalidate: 1 },
  });
  if (!response.ok) {
    throw new Error("请求失败");
  }
  const response2 = await fetch("http://localhost:3000/api/book", {
    // next: { revalidate: 1 },
  });
  if (!response2.ok) {
    throw new Error("请求失败");
  }
  const books = await response2.json();
  const albums = await response.json();
  // const RemoveBook = (id: string) => {
  //   console.log(id);
  //   for (let i = 0; i < books.length; i++) {
  //     if (books[i].id == id) {
  //       books.splice(i, 1);
  //     }
  //   }
  // };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols">
      {books.map((item: { id: string; name: string }) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            {/* <button onClick={RemoveBook.bind(this, item.id)}>remove</button> */}
          </div>
        );
      })}
      {albums.map((album: { id: number; title: string }) => {
        return (
          <div
            key={album.id}
            className="bg-white shadow-md rounded-lg p-4 transition t..."
          >
            <h3 className="text-lg font-bold mb-2">{album.title}</h3>
            <p className="text-gray-600">Album ID: {album.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Homecompent;
