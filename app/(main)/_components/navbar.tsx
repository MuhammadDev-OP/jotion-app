"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { document } from "postcss";
import { api } from "@/convex/_generated/api";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return <p>loading...</p>;
  }

  if (document == null) {
    return null;
  }

  return (
    <div>
      <h1>Navbar!</h1>
    </div>
  );
};

export default Navbar;
