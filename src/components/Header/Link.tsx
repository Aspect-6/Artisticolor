import { LinkProps } from "artisticolor/header"

export default function Link({url, pageName}: LinkProps) {
    return (
        <a className="nava" href={url}>{pageName}</a>
    );
};