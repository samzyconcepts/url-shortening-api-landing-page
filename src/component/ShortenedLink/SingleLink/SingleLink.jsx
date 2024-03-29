import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./SingleLink.css";

const SingleLink = ({ link }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [copied]);

    return (
        <div className="singleLink">
            <div className="singleLink__link">
                <a
                    href={link.destination}
                    className="singleLink__original"
                    target="_blank"
                    rel="noreferrer noopener">
                    {link.destination}
                </a>
            </div>
            <div className="singleLink__container">
                <a
                    href={link.shortened_url}
                    className="singleLink__shortened"
                    target="_blank"
                    rel="noreferrer noopener">
                    {link.shortened_url}
                </a>

                <CopyToClipboard text={link.shortened_url} onCopy={() => setCopied(true)}>
                    <button
                        className={`singleLink__button btn btn-primary ${
                            copied ? "singleLink__buttonCopied" : ""
                        }`}>
                        {copied ? "Copied" : "Copy"}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default SingleLink;
