"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger
} from "@/app/components/ui/dropdown-menu";
import { logoutUser } from "@/lib/feature/user.slice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import { useState } from "react";
import { ConfirmationDialogComponent } from "../commons/confirmation.component";
import { deleteCookie } from "nextjs-cookie";

export const UserMenuComponent = () => {
  const dispatch = useAppDispatch();

  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const logoutClicked = () => {
    setConfirmationOpen(true);
  };

  const onConfirmation = () => {
    dispatch(logoutUser());
    deleteCookie("session-data");
    onOpenChange();
  }

  const onDecline = () => {
    onOpenChange();
  }

  const onOpenChange = () => {
    setConfirmationOpen(!open);
  };

  return (
    <div>
      <ConfirmationDialogComponent
        open={confirmationOpen}
        onOpenChange={onOpenChange}
        message="Are you sure you want to logout?"
        onConfirmation={onConfirmation}
        onDecline={onDecline}
      ></ConfirmationDialogComponent>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src="/user.svg"
            height={100}
            width={30}
            alt="user-icon"
            className="bg-orange-400 rounded-full p-1 mr-3"
          ></Image>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={logoutClicked}>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
