import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return <div>user deatils :{params.id}</div>;
};

export default Page;
