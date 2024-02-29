"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { LoginComponent } from "../login/login.component";
import Image from "next/image";
import { DialogPortal } from "@radix-ui/react-dialog";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleDialog } from "@/lib/feature/login.slice";

export const LoginCardComponent = () => {
  const dialogOpen = useAppSelector((state) => state.login.dialogOpen);
  const dispatch = useAppDispatch();

  const toggleLoginDialog = () => {
    dispatch(toggleDialog());
  };

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={toggleLoginDialog}
      defaultOpen={true}
    >
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
