export interface AppIconProps {
    tag?: React.ReactElement | string;
    color?: string;
    size?: string;
    branded?: boolean;
    className?: string;
    src?: string;
    alt?: string;
    children?: any;
}

declare const AppIcon: React.FunctionComponent<AppIconProps>;

export default AppIcon;