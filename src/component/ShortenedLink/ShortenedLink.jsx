import Form from "../Form/Form";
import SingleLink from "./SingleLink/SingleLink";

import "./ShortenedLink.css";
import { useState, useEffect } from "react";
import axios from "axios";

const ShortenedLink = () => {
    const [links, setLinks] = useState([]);
    const [controller, setController] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);

        return () => {
            abortController.abort();
        };
    }, []);

    // function to fetch shorten link
    const shorten = async (url) => {
        try {
            const api =
                "https://s.squizee.in/short/formResponse?url=" +
                encodeURIComponent(url) +
                "&email=&format=json&suffix=";

            const response = await axios.get(api, { signal: controller.signal });

            const link = response.data;

            // Update links state if needed
            const result = {
                destination: url,
                shortened_url: link.shortened_url,
            };

            setLinks([result, ...links]);
            localStorage.setItem("links", JSON.stringify([result, ...links]));
        } catch (error) {
            console.error("Error shortening link:", error);
        }
    };

    const fetchLinks = () => {
        const links = JSON.parse(localStorage.getItem("links"));
        if (links) setLinks(links);
    };

    useEffect(() => {
        fetchLinks();
    }, []);

    return (
        <div className="shortenedLink">
            <Form shorten={shorten} />
            {links && links.map((link) => <SingleLink key={link.shortened_url} link={link} />)}
        </div>
    );
};

export default ShortenedLink;
