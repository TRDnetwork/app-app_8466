import { useState, useCallback } from 'react';

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const listeners: Array<(toasts: Toast[]) => void> = [];

let memoryState: Toast[] = [];

function dispatch(action: { type: string; toast?: Toast }) {
  switch (action.type) {
    case 'ADD_TOAST':
      if (memoryState.length >= TOAST_LIMIT) {
        memoryState = [];
      }
      memoryState = [action.toast, ...memoryState];
      break;
    case 'UPDATE_TOAST':
      memoryState = memoryState.map((t) =>
        t.id === action.toast?.id ? { ...t, ...action.toast } : t
      );
      break;
    case 'DISMISS_TOAST': {
      const { toast } = action;

      if (toast) {
        memoryState = memoryState.map((t) =>
          t.id === toast.id
            ? {
                ...t,
                open: false,
              }
            : t
        );
      } else {
        memoryState = memoryState.map((t) => ({
          ...t,
          open: false,
        }));
      }

      break;
    }
    case 'REMOVE_TOAST':
      if (action.toast) {
        memoryState = memoryState.filter((t) => t.id !== action.toast?.id);
      } else {
        memoryState = [];
      }
      break;
  }

  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type ToastProps = Omit<Toast, 'id'>;

export function useToast() {
  const [_, forceUpdate] = useState({});

  const update = useCallback(() => {
    forceUpdate({});
  }, []);

  React.useEffect(() => {
    listeners.push(update);
    return () => {
      const index = listeners.indexOf(update);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [update]);

  return {
    toasts: memoryState,
    toast: (props: ToastProps) => {
      const id = genId();

      const update = (props: React.PropsWithChildren<ToastProps>) =>
        dispatch({
          type: 'UPDATE_TOAST',
          toast: { ...props, id },
        });
      const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toast: { id } });

      dispatch({
        type: 'ADD_TOAST',
        toast: {
          ...props,
          id,
          open: true,
          on