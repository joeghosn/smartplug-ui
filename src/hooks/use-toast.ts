import { toast as sonnerToast } from "sonner";

type ToastVariant = "default" | "success" | "destructive" | "warning" | "info";

interface ToastOptions {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const useToast = () => {
  const toast = ({
    title,
    description,
    variant = "default",
    duration = 4000,
    action,
  }: ToastOptions) => {
    const message = description ? `${title}: ${description}` : title || "";

    const toastOptions: Parameters<typeof sonnerToast>[1] = {
      duration,
      action: action
        ? {
            label: action.label,
            onClick: action.onClick,
          }
        : undefined,
    };

    switch (variant) {
      case "success":
        return sonnerToast.success(message, toastOptions);
      case "destructive":
        return sonnerToast.error(message, toastOptions);
      case "warning":
        return sonnerToast.warning(message, toastOptions);
      case "info":
        return sonnerToast.info(message, toastOptions);
      default:
        return sonnerToast(message, toastOptions);
    }
  };

  return {
    toast,
    dismiss: sonnerToast.dismiss,
    success: (message: string, options?: Omit<ToastOptions, "variant">) =>
      toast({ title: message, variant: "success", ...options }),
    error: (message: string, options?: Omit<ToastOptions, "variant">) =>
      toast({ title: message, variant: "destructive", ...options }),
    warning: (message: string, options?: Omit<ToastOptions, "variant">) =>
      toast({ title: message, variant: "warning", ...options }),
    info: (message: string, options?: Omit<ToastOptions, "variant">) =>
      toast({ title: message, variant: "info", ...options }),
  };
};

export type { ToastOptions, ToastVariant };
