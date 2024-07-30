import { Card, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Form } from "../components/Form";

export default function Guestbook() {
  return (
    <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold pt-5">Guestbook</h1>
      <p className="text-base text-muted-foreground mt-5">
        This is a guestbook page. You can use it to write me a short message!
      </p>
      <Card className="mt-10">
        <CardHeader className="flex flex-col w-full gap-4">
          <Label>Messages</Label>
          <GuestbookForm />
        </CardHeader>
      </Card>
    </section>
  );
}

async function GuestbookForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (user) {
    return <Form />;
  }

  return (
    <div className="flex justify-between gap-4 flex-colmd:flex-row">
      <Input type="text" placeholder="message here" />
      <RegisterLink>
        <Button>Sign up </Button>
      </RegisterLink>
    </div>
  );
}
