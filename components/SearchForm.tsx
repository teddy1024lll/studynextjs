"use client";

import { act, useRef } from "react";
import Form from "next/form";
import { searchForm, searchInput, searchBtn } from "../app/tailwindClassNames";
import SearchFormReset from "./SearchFormReset";
import { SearchIcon } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <Form ref={formRef} action="/" scroll={false} className={searchForm}>
      <input
        name="query"
        defaultValue=""
        className={searchInput}
        placeholder="123"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset form={formRef.current} />}
        <button type="submit" className={searchBtn}>
          <SearchIcon className=" size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
