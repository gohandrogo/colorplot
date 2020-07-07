import React from 'react'
import {number, shape} from "prop-types"

const PropertyCard = (
    {property:{
        name, 
        rent, 
        houseRentModifier, 
        hotelPricingModifier, 
        MortgatgeValue, 
        housePrice, 
        hotelCost,
    }}) => (
    <div className="form-group">
      <div className="swatch">
            <section className="card-header">
                <p>Title Deed</p>
                <p>{name}</p>

            </section>
            <section className="card-content">
                <p>Rent $ {rent}</p>
                <p>with 1 House $ {houseRentModifier[0]}</p>
                <p>with 2 House $ {houseRentModifier[1]}</p>
                <p>with 3 House $ {houseRentModifier[2]}</p>
                <p>with 4 House $ {houseRentModifier[3]}</p>
                <p>With {hotelPricingModifier[0]} $ 250 Mortgatge Value of ${MortgatgeValue}</p>
                <p>Houses cost ${housePrice} each</p>
                <p>Hotels cost $ {hotelCost} each plus 4 houses</p>
                <p className="fine-print">
                    if a player owns ALL the Lots of any Color-Group, the rent is Doubled on Unimproved Lots in that group.
                </p>
            </section>
        </div>
    </div>
);

PropertyCard.propTypes = {
    property: shape({name: number.isRequired, 
    rent: number.isRequired, 
    houseRentModifier: number.isRequired, 
    hotelPricingModifier: number.isRequired, 
    MortgatgeValue: number.isRequired, 
    housePrice: number.isRequired, 
    hotelCost: number.isRequired,
    hotelTradeInValue: number.isRequired})
};

export default PropertyCard;