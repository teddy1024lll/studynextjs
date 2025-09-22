"use client";
import { act, RefObject } from "react";
import { searchForm, searchBtn } from "../app/tailwindClassNames";
import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = ({ form }: { form?: HTMLFormElement | null }) => {
  const reset = () => {
    if (form) {
      form.reset();
    }
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className={searchBtn + "text-pink-400"}>
        <X className=" size-5"></X>
      </Link>
    </button>
  );
};

export default SearchFormReset;
