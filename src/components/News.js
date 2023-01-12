import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    customGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "3rem",
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        }
    }

    async componentDidMount()
    {
        let url = 'https://newsapi.org/v2/everything?q=apple&from=2023-01-11&to=2023-01-11&sortBy=popularity&apiKey=e29fdd2fa8144c15af2e1dca8435e6f5';
        let data = await fetch(url);
        let parse = await data.json();
        this.setState({articles: parse.articles});
    }

    render() {
        return (
            <>
                <div className="container mt-4">
                    <div style={this.customGrid}>
                        {this.state.articles.map((element) => {
                            return <div key={element.url}>
                                <NewsItem
                                    title={element.title.slice(0, 30)}
                                    description={element.description.slice(0, 90)}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default News
