import StackedAvatars from "./StackedAvatars";

const GopxUserStack: React.FC = () => {
  const avatars = [
    {
      src: "/assets/avatars/1.jpeg",
      alt: "Avatar 1",
    },
    {
      src: "/assets/avatars/2.jpeg",
      alt: "Avatar 2",
    },
    {
      src: "/assets/avatars/3.jpeg",
      alt: "Avatar 3",
    },
    {
      src: "/assets/avatars/4.jpeg",
      alt: "Avatar 4",
    },
    {
      src: "/assets/avatars/5.jpeg",
      alt: "Avatar 5",
    },
    {
      src: "/assets/avatars/6.jpeg",
      alt: "Avatar 6",
    },
  ];

  return (
    <div className="my-6 relative  flex-col">
      <StackedAvatars avatars={avatars} />
      <div className="absolute bottom-0 left-[240px] transform -translate-x-1/2 w-1/2 text-center">
        <span className="inline-block transform text-white/70 text-lg font-caveat font-bold">
          1k+ finger tapped!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1418 125"
            fill="#B8B8B8"
          >
            <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default GopxUserStack;
