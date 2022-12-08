import React, { Component } from 'react'

export class SubItem extends Component {

    render() {
        let { name, image, summary, movieUrl, rating } = this.props;
        
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}...</h5>
                        <p className="card-text">{summary}...</p>
                        <a href={movieUrl} target="blank" className="btn btn-sm btn-primary">Know More</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default SubItem