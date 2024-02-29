"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { LoginComponent } from "../login/login.component";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DialogPortal } from "@radix-ui/react-dialog";

export const LoginCardComponent = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("login card component");
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen} defaultOpen={true}>
      <DialogTrigger className="button-primary">Log In</DialogTrigger>
      <DialogPortal>
        <DialogContent>
          <DialogHeader className="">
            <DialogTitle className="mx-auto text-2xl">
              <Image
                src={"/text_logo.png"}
                alt="logo"
                width={130}
                height={0}
                className="max-w-24	h-auto"
              />
            </DialogTitle>
          </DialogHeader>
          <LoginComponent></LoginComponent>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
