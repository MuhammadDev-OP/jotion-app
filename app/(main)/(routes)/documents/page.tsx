"use client";
import Image from "next/image";

const DocumentsPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-4">
      <div className="mx-auto">
        <Image
          src="/empty.png"
          height={300}
          width={300}
          alt={"empty"}
          className="dark:hidden"
        />
      </div>
      <div className="mx-auto">
        <Image
          src="/empty-dark.png"
          height={300}
          width={300}
          alt={"empty"}
          className="dark:black"
        />
      </div>
    </div>
  );
};

export default DocumentsPage;
