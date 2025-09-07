"use client";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  src: string;
  speed?: number;
  poster?: string;
  delayAfterEnd?: number;
  startDelay?: number;
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
};

function Video({
  src,
  speed = 1,
  poster,
  delayAfterEnd = 0,
  startDelay = 0,
  width,
  height,
  children,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startTimer = setTimeout(async () => {
      try {
        video.playbackRate = speed;
        await video.play();
      } catch (error) {
        console.log("Video play failed:", error);
      }
    }, startDelay);

    const handleVideoEnd = () => {
      setTimeout(async () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.playbackRate = speed;
          try {
            await videoRef.current.play();
          } catch (error) {
            console.log("Video play failed:", error);
          }
        }
      }, delayAfterEnd);
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      clearTimeout(startTimer);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [startDelay, delayAfterEnd, speed]);

  return (
    <>
      <video
        ref={videoRef}
        className="object-cover"
        preload="auto"
        playsInline
        poster={poster}
        muted
        disablePictureInPicture
        style={{
          width: width || "auto",
          height: height || "auto",
        }}
      >
        <source src={`${src}.webm`} type="video/webm" />
      </video>
      {children}
    </>
  );
}

export default Video;
