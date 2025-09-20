import { icons, IconName } from '@/components/icons';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 5, ...props }: IconProps) {
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }
  return (
    <IconComponent
      width={size}
      height={size}
      className={`size-${size}`}
      {...props}
    />
  );
}
