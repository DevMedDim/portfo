"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function Form() {
  return (
    <form className="flex flex-col gap-4 justify-between md:flex-row">
      <Input
        type="text"
        placeholder="Your Message..."
        name="message"
        maxLength={80}
        minLength={1}
        required
      />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="animate-spin h-4 w-4 mr-2" />
        </Button>
      ) : (
        <Button>Sign for free</Button>
      )}
    </>
  );
}
