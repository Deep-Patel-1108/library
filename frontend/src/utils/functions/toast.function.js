import { toast } from "react-toastify";

export const successMessage = (message, props) =>
  toast.success(message, props ?? {});

export const errorMessage = (message, props) =>
  successMessage(message, { type: "error", ...props });
