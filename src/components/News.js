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
            loading: true,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e29fdd2fa8144c15af2e1dca8435e6f5&pageSize=12';
        let data = await fetch(url);
        let parse = await data.json();
        this.setState({ articles: parse.articles, totalResults:parse.totalResults });
    }

    handlePreviousPage = async () => {
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e29fdd2fa8144c15af2e1dca8435e6f5&page=${this.state.page - 1}&pageSize=12`;
        let data = await fetch(url);
        let parse = await data.json();
        this.setState({ articles: parse.articles });
        this.setState({
            page: this.state.page - 1,
        });
    }

    handleNextPage = async () => {

        if ( !(this.state.page + 1 > Math.ceil(this.state.totalResults/12)) ) {
            let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e29fdd2fa8144c15af2e1dca8435e6f5&page=${this.state.page + 1}&pageSize=12`;
            let data = await fetch(url);
            let parse = await data.json();
            this.setState({ articles: parse.articles });
            this.setState({
                page: this.state.page + 1,
            });
        }
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
                <div className="d-flex justify-content-evenly my-4">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousPage}><i className="bi bi-arrow-left"></i> Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextPage}>Next <i className="bi bi-arrow-right"></i></button>
                </div>
            </>
        )
    }
}

export default News
