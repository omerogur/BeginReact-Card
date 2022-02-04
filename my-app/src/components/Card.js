import React from "react";
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        return (

            <div className="card w-100">
                <img src={this.props.cardİmage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <p className="card-text"><small className="text-muted">{this.props.cardTimed}</small></p>
                </div>
            </div>

        );
    }
}
//veri gelmezse default yazılacak değerler.
Card.defaultProps = {
    cardTitle : "Default Card title", 
}
//Tip kontrolü import PropTypes from 'prop-types'; yaptıktan sonra girilen değerlere tip ataması yapıyoruz
// örneğin cardText'in tipinin String olmasını bekliyoruz
//isRequired diyerek kesin olarak text bilgisinin gelmesini istiyoruz.Boş gelemez
Card.propTypes = {
    cardText: PropTypes.string.isRequired
}
export default Card;


