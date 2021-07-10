import React from 'react';
import Button from "../components/Button";

const WineCard = function (props) {
    const series = props.item.wineMakerNote.toLowerCase();
    return (
        <li key={props.item.id} className={`c-WineCard ${series} o-flexObject--33`}>
            <img src={props.item.img} alt="props.item.name" className={'c-WineCard-image'} />
            <div className={'c-WineCard-body'}>
                <h3 className={'c-WineCard-title '}>{props.item.name}</h3>
                <p className={'c-WineCard-description'}>{props.item.description}</p>
                <div className={'c-WineCard-price'}>${props.item.price}</div>
                <div className={'c-WineCard-fineprint'}>{props.item.bottleSize.ml} ml / {props.item.abv}% abv</div>
                <div className={'c-WineCard-buy'}>
                    <div className={'c-WineCard-quantity'}>
                        <select>
                            <option value="Option 1">1</option>
                            <option value="Option 2">2</option>
                            <option value="Option 3">3</option>
                            <option value="Option 4">4</option>
                            <option value="Option 5">5</option>
                        </select>
                    </div>
                    <Button
                        label="Add to Cart"
                        link="/"
                        hoverText="Add to Cart"
                        variant="primary" />
                </div>
            </div>
        </li>
    )
}


export default WineCard

