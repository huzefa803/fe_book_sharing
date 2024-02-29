import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/app/components/ui/dialog";

type ConfirmationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  message: string
  onConfirmation: () => void;
  onDecline: () => void;
};

export const ConfirmationDialogComponent: React.FC<ConfirmationDialogProps> = ({
  open,
  onOpenChange,
  message,
  onConfirmation,
  onDecline
}: ConfirmationDialogProps) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader className="">
            <DialogTitle className="mx-auto text-2xl">
              {message}
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <button className="button-primary" onClick={onDecline}>No</button>
            <button onClick={onConfirmation} className="px-3 bg-slate-200 rounded-lg hover:bg-slate-300 active:bg-slate-400">Yes</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

