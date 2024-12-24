import {
  DialogContent,
  DialogHeader,
  Dialog,
  DialogTitle,
} from "@/components/ui/dialog";
import { Branch } from "@/services/branches/types";

interface ViewBranchDialogProps {
  branch: Branch;
  open: boolean;
  onClose: () => void;
}

export default function ViewBranchDialog({
  branch,
  open,
  onClose,
}: ViewBranchDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{branch.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium">Address</h4>
            <p className="text-sm">{branch.address}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Country</h4>
            <p className="text-sm">{branch.country}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Contact Information</h4>
            <p className="text-sm">Email: {branch.email}</p>
            <p className="text-sm">Phone: {branch.phone}</p>
          </div>
          {branch.parent_branch_id && (
            <div className="space-y-2">
              <h4 className="font-medium">Parent Branch ID</h4>
              <p className="text-sm">{branch.parent_branch_id}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
