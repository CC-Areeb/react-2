import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <NewsItem
                                title="This is the title"
                                description="This is a description"
                            />
                        </div>

                        <div className="col">
                            <NewsItem
                                title="This is the title"
                                description="This is a description"
                            />
                        </div>

                        <div className="col">
                            <NewsItem
                                title="This is the title"
                                description="This is a description"
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default News
