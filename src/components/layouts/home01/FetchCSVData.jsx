import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function FetchCSVData(props) {

    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        fetchCSVData(); // Fetch the CSV data when the component mounts
    }, []);

    const fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQSOBCgCANr2XA3K5kjl6V1_6UnMRVJavkaAszGjx-UaD7EnplhgvYq63wURI2wANXSunihsV3-cYPn/pub?output=csv';

        axios.get(csvUrl)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setCsvData(parsedCsvData);
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);
        const data = [];
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            data.push(rowData);
        }
        return data;
    }

    // Render the fetched CSV data here
    return (
        <section className="cta-2 clients pb-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="row justify-content-center mb-5">
                            {csvData.map((row, index) => (
                                <div key={index} className="col-lg-2 col-sm-6">
                                    <Link to={row[2]} target='_blank'>
                                        <div className="client-logo mt-3">
                                            <img src={row[0]} alt={`Logo ${index + 1}`} className="img-fluid" width={"150px"} height={"150px"} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
