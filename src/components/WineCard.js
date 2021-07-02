import React from 'react';
import Button from "../components/Button";

const WineCard = function (props) {
    const series = props.item.wineMakerNote.toLowerCase();
    return (
        <li key={props.item.id} className={`wine-card ${series}`}>
            <img src={props.item.img} alt="props.item.name" className={'wine-card__image'} />
            <div className={'wine-card__body'}>
                <h3 className={'wine-card__title dark'}>{props.item.name}</h3>
                <p className={'wine-card__description'}>{props.item.description}</p>
                <div className={'wine-card__fine-print'}>{props.item.bottleSize.ml} ml / {props.item.abv}% abv</div>
                <div className={'wine-card__buy'}>
                    <div className={'wine-card__quantity'}>
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

