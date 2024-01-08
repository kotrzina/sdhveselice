import {Ratio} from "react-bootstrap";

type Props = {
    title?: string;
    src: string;
};

export const Video = (props: Props) => {

    const {title = "Video", src} = props;

    return (
        <>
            <h2>{title}</h2>
            <Ratio aspectRatio="16x9">
                <iframe src={src} allowFullScreen/>
            </Ratio>
        </>
    );
};
