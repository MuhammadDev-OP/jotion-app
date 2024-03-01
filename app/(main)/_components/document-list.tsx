"use client";

import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">;
}

export const DocumentList = ({
  parentDocumentId,
  level = 0,
}: DocumentListProps) => {
  const params = useParams();
  const router = useRouter();
  const [expanded, setExpanded] = useState({});

  const onExpand = (documentId: string) => {
    setExpanded(prevExpanded => ({
        ...prevExpanded,
        [documentId] : !prevExpanded[documentId]
    }))
  }

  const documents = useQuery(api.documents.getSidebar, {parentDocument: parentDocumentId}) 

  const onRedirect = (documentId: string )

  return (<div>Document List</div>);
};
