import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f2ea",
        }}
      >
        <svg
          viewBox="0 0 40 40"
          width="130"
          height="130"
          fill="none"
        >
          <path
            d="M6 24.5C6 26.6 7.7 28.3 9.8 28.3H28c3.6 0 6.5-2.9 6.5-6.5V14"
            stroke="#536b45"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="34.4" r="2.4" fill="#b69557" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
