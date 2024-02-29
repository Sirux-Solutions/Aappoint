import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


export default function FetchCSVData(props) {

    const clientLogos = [];
    const clientURL = [
        "https://maps.app.goo.gl/ZcdfpuUDN1GvNAn76?g_st=ic",
        "https://www.wongnai.com/restaurants/281722Sl-makkasan-coffee-shop-bangkok-palace-hotel",
        "https://www.facebook.com/maadae.slowfish",
        "https://www.cuisinedegarden.com/",
        "https://www.wongnai.com/reviews/a4631b07722c4b35aff5b46201b50531",
        "https://www.marieguimarbkk.com/home",
        "https://www.instagram.com/the_food_trust/?hl=en",
        "https://www.instagram.com/navannavanmaerim/?ref=syn_article_sp&hl=tl",
        "https://www.mutekibkk.com/",
        "https://www.wongnai.com/restaurants/1421870tR-sally-phuket",
        "https://www.facebook.com/MitSamPan2495/?locale=th_TH",
        "https://www.facebook.com/wanwaan.bkk",
        "https://www.facebook.com/chalermburiatsriracha/?locale=th_TH",
        "https://www.klook.com/en-US/activity/98964-durian-papa-durian-cafe-tha-maharaj-bangkok/",
        "https://www.facebook.com/derlajazz",
        "https://fatlambbkk.com/",
        "https://www.facebook.com/somtumlangsuan/",
        "https://www.pestobkk.com/home",
        "https://www.facebook.com/Charsiufanbysml/",
        "https://www.facebook.com/RoiKhan.Restaurant",
        "https://www.facebook.com/Yakinikuyuu/",
        "https://www.facebook.com/charmeatery/?locale=th_TH",
        "https://www.a-onehotel.com/fat-coco/",
        "https://origamirestaurant.co/",
        "https://www.facebook.com/softfood.official/",
        "https://pipparestaurant.com/",
        "https://tossakanthaicurryhouse.business.site/",
        "https://www.facebook.com/shinyoushabu/",
        "https://www.samsenvilla.com/",
        "https://www.facebook.com/mungkornseafood.sukhumvit/",
        "https://www.facebook.com/profile.php?id=100089611934526&mibextid=LQQJ4d",
        "https://guide.michelin.com/us/en/phuket-region/phuket/restaurant/toh-daeng-by-baan-ar-jor-museum-home",
        "https://www.facebook.com/clbclinic/",
        "https://www.clinicrukfun.com/",
        "https://www.facebook.com/SDCsarakham/?locale=th_TH",
        "https://www.facebook.com/ismilelamlukka/?locale=th_TH",
        "https://thebehindsm.com/",
        "https://drccdentalclinic.com/",
        "https://www.facebook.com/PTArchi?mibextid=ZbWKwL",
        "https://www.bangkokgenomics.com/",
        "https://www.dentaldepartures.com/th/dentist/natural-smile-dental-clinic",
        "https://www.facebook.com/PRODENTALCLINIC.TH",
        "https://www.facebook.com/GoodDenta.DentalClinic/",
        "https://www.facebook.com/Dentistnistadentalclinic",
        "https://dentalbuddyclinic.com/",
        "https://www.facebook.com/p/Ryu-Dental-Gallery-By-DrMonnapat-100070888924796/",
        "https://www.facebook.com/herasiscm",
        "",
        "https://www.facebook.com/marveloussmiledentalclinic/",
        "https://petchareegold.com/",


    ];


    for (let i = 1; i <= 50; i++) {
    const logoNumber = i < 10 ? `0${i}` : `${i}`;
    const logoPath = `assets/images/clients/logo shop-${logoNumber}.png`;
    clientLogos.push(logoPath);
    }

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
        const headers = rows[0].split(',');
        const data = [];
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
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
                        {clientLogos.map((logo, index) => (
                            <div key={index} className="col-lg-2 col-sm-6">
                            <Link to={clientURL[index]} target='_blank' >
                            <div className="client-logo mt-3">
                                <img src={logo} alt={`Logo ${index + 1}`} className="img-fluid" width={"150px"} height={"150px"} />
                            </div>
                            </Link>
                            </div>
                        ))}
                            {csvData.map((row, index) => (
                            <div key={index}>
                                {/* Render each row data here */}
                                {/* <p>{JSON.stringify(row)}</p> */}
                            </div>
                        ))}
                        </div>
                        
                    </div>
                    </div>
                    </div>
        </section>
        
    );
}
