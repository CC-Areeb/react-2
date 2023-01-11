import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let { title, description } = this.props;

        return (
            <>
                <div className="card" style={{ width: "26rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="text-center">
                            <a href="/" className="btn btn-primary">Go somewhere</a>    
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem