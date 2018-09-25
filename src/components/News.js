import React from "react";

import NewsItem from "./NewsItem";

class News extends React.Component {
    render() {
        let nameElement = <div>Mehmet</div>;
        const title = "react js";
        const description = "react description";
        return (
            <div>
                {nameElement}
                <NewsItem
                    title={title}
                    description={description}
                />
            </div>
        );
    }
}
export default News;