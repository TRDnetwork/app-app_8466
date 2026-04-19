import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';
import { useToast } from '@/hooks/use-toast';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-0 z-[100] flex flex-col-reverse p-4 pointer-events-none">
      {toasts.map(({ id, title, description, variant, duration }) => (
        <Toast
          key={id}
          variant={variant}
          title={title}
          description={description}
          onClose={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = 'ToastViewport';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-[#C1B39E] p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'bg-white text-[#2F4F2F]',
        success: 'bg-[#4CAF50] text-[#F5F5DC]',
        error: 'bg-[#D32F2F] text-[#F5F5DC]',
        warning: 'bg-[#FF9800] text-[#F5F5DC]',
        info: 'bg-[#8B4513] text-[#F5F5DC]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Toast = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof toastVariants> & {
      title?: string;
      description?: string;
      onClose?: () => void;
    }
>(({ className, variant, title, description, onClose, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-state="open"
      className={cn(toastVariants({ variant }), className)}
      {...props}
    >
      <div className="grid gap-1">
        {title && <div className="font-fraunces font-semibold">{title}</div>}
        {description && (
          <div className="text-sm font-space-grotesk text-[#6F4E37]">
            {description}
          </div>
        )}
      </div>
      <button
        onClick={onClose}
        className="absolute right-2 top-2 rounded-md p-1 text-[#6F4E37] opacity-0 transition-opacity hover:text-[#2F4F2F] focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
});
Toast.displayName = 'Toast';

export { Toast, ToastProvider, ToastViewport };