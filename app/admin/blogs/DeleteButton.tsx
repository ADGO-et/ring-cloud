"use client";

import Spinner from "@/components/Spinner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  id: number;
}

const DeleteButton = ({ id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      const body = await response.json();

      if (!body.success) {
        setError(body.error);
        return;
      }

      router.refresh();
      setIsOpen(false); // Close the dialog only if deletion succeeds
    } catch (err) {
      setError("Something unexpected happened. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <AlertDialog
        open={isOpen}
        onOpenChange={(open) => !isDeleting && setIsOpen(open)}
      >
        <Button
          size={"sm"}
          variant="destructive"
          onClick={() => setIsOpen(true)}
        >
          Delete
        </Button>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              article.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => !isDeleting && setIsOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? <Spinner spin={true} /> : "Continue"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteButton;
