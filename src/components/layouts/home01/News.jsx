import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: []
        };
    }

    componentDidMount() {
        this.fetchCSVData(); // Fetch the CSV data when the component mounts
    }

    fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQqPkzX8ufEB1TIL-mW44V6Ej5ZBb903YTRZzhcKMccopT_RH7zMAMOtfxuL9qRV1bjVDVKo86E7px/pub?output=csv';

        axios.get(csvUrl)
            .then((response) => {
                const parsedCsvData = this.parseCSV(response.data);
                this.setState({ testimonial: parsedCsvData });
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);
        const data = [];
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            data.push({
                id: i + 1,
                img: rowData[0], // Assuming the image URL is in the first column
                alt: 'images',
                quoteText: rowData[1], // Assuming the quote text is in the second column
                link: rowData[2] // Assuming the link URL is in the third column
            });
        }
        return data;
    }

    render() {
        return (
            <section className="testimonial section-padding bg-grey pb-0" id="news">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-heading center-heading text-center mb-60">
                                <h3 className="heading-title">ข่าวสารและกิจกรรม</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {this.state.testimonial.map((data) => (
                            <div className="col-lg-4 mb-5" key={data.id}>
                                <a href={data.link} target='_blank'>
                                    <div className="card-item">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4>{data.quoteText}</h4>
                                                <img src={data.img} alt={data.alt} className="img-fluid pt-3" />
                                            </div>                                            
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default News;
