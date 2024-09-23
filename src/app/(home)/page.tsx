import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <>
      <Banner />
      <BookList />
    </>
  );
}
