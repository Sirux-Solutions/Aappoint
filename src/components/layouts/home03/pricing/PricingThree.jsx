import React, { Component } from 'react';

class PricingThree extends Component {
    constructor(props){
        super(props);
        this.state = {
            listItem: [
                {
                    id: 1,
                    icon: 'fa fa-circle',
                    title: 'Ebook Version',
                },
                {
                    id: 2,
                    icon: 'fa fa-circle',
                    title: 'Audio Book',
                },
                {
                    id: 3,
                    icon: 'fa fa-circle',
                    title: 'PDF version',
                },
                {
                    id: 4,
                    icon: 'fa fa-circle',
                    title: 'hardcover variation',
                },
            ]
        }
    }
   

    render() {
        return (

            <ul className="pricing-features">
                {
                this.state.listItem.map((data,i) => (
                    <li key={i}><i className={data.icon}></i> {data.title}</li>
                    ))
                }
            </ul>
        );
    }

}

export default PricingThree;
