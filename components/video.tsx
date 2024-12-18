import React from "react";

type VideoProps = React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
>;

export function Video(props: VideoProps) {
    return <video controls {...props} />;
}
