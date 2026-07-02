import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Raspberry Design";
export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          borderRadius: "18px",
          background:
            "linear-gradient(135deg, #050505 0%, #111114 58%, #2a0d17 100%)",
          color: "#F6EFE7",
          fontSize: "24px",
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "8px",
            top: "8px",
            width: "13px",
            height: "13px",
            borderRadius: "999px",
            background: "#B8325B",
            boxShadow: "0 0 0 2px #C9A45C",
          }}
        />
        <span>RD</span>
      </div>
    ),
    {
      ...size,
    },
  );
}