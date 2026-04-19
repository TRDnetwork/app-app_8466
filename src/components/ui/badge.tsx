import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium font-space-grotesk transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[#8B4513] text-[#F5F5DC] hover:bg-[#6F4E37]',
        secondary:
          'border-transparent bg-[#E8DCC5] text-[#2F4F2F] hover:bg-[#C1B39E]',
        outline: 'text-[#8B4513] border-[#8B4513]',
        success:
          'border-transparent bg-[#4CAF50] text-[#F5F5DC] hover:bg-[#388E3C]',
        warning:
          'border-transparent bg-[#FF9800] text-[#F5F5DC] hover:bg-[#F57C00]',
        error:
          'border-transparent bg-[#D32F2F] text-[#F5F5DC] hover:bg-[#C62828]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };