import { ImageResponse } from "next/og";
import { BASE_URL } from "@/config";

export const runtime = "edge";

export const alt = "winstore";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/svg";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="bg-gray-700 w-full h-full flex flex-col justify-center items-center">
        <div tw="w-[70%] flex justify-center items-center rounded-3xl overflow-hidden">
          <img src={`${BASE_URL}/logo.svg`} alt="logo" />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
