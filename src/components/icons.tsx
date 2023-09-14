import React, { SVGProps } from "react";

// Heart-Icon
interface HeartIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
}

export const HeartIcon: React.FC<HeartIconProps> = ({
    size = 24,
    width,
    height,
    strokeWidth = 1.5,
    fill = "none",
    ...props
  }) => (
    <svg
      aria-hidden="true"
      fill={fill}
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );


// Moon-Icon
  export const MoonIcon: React.FC = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="lucide lucide-moon"
        viewBox="0 0 24 24"
      >
        <path d="M12 3a6 6 0 009 9 9 9 0 11-9-9z"></path>
      </svg>
    );
  }


// Sun-Icon
export const SunIcon: React.FC = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="lucide lucide-sun"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
      </svg>
    );
  }