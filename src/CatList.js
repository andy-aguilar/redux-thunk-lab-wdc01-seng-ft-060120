import React from 'react';

export default class CatList extends React.Component {

    renderCatPics = () => {
        return this.props.catPics.map (catPic => <img key={catPic.id} src={catPic.url} alt={catPic.id}/>)
    }

    render(){
        return(
            <div>
                {this.props.loading ? "loading..." : this.renderCatPics()}
            </div>
        )
    }
}