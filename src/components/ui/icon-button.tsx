import { Button } from './button';
import { Icon } from './icon';
import { IconName } from '../icons';
import { FC } from 'react';
import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ComponentProps<'button'> {
  iconName: IconName;
  size?: 'icon' | 'sm' | 'lg';
  variant?: 'ghost' | 'default';
  className?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  size = 'icon',
  variant = 'ghost',
  className,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn('icon-wrapper', 'h-7 w-7', className)}
      {...props}
    >
      <Icon name={iconName} />
    </Button>
  );
};
