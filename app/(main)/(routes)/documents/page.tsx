"use client";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = async () => {
    try {
      const document = await create({ title: "Untitled" });

      toast.success("New note created!"); // Assuming successful document creation

      // Handle success case using the document data, if applicable
    } catch (error) {
      toast.error("Failed to create a new note."); // Log the error for debugging
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        src="/empty.png"
        height={300}
        width={300}
        alt={"empty"}
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height={300}
        width={300}
        alt={"empty"}
        className="hidden dark:black"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
