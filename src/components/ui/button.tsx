import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-fraunces font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8B4513] active:translate-y-px disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-[#8B4513] text-[#F5F5DC] hover:bg-[#6F4E37] hover:shadow-md',
        secondary: 'bg-[#6F4E37] text-[#F5F5DC] hover:bg-[#8B4513] hover:shadow-md',
        outline:
          'border border-[#8B4513] bg-transparent text-[#8B4513] hover:bg-[#8B4513] hover:text-[#F5F5DC] hover:shadow-md',
        ghost:
          'bg-transparent text-[#8B4513] hover:bg-[#E8DCC5] hover:text-[#2F4F2F] hover:shadow-none',
        danger:
          'bg-[#D32F2F] text-[#F5F5DC] hover:bg-[#B71C1C] hover:shadow-md',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-12 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };