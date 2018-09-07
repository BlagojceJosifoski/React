import React, { Component } from 'react';
import PieChart from "react-svg-piechart";


class MyDashboard extends Component {
    constructor() {
        super();
        this.state = {
            CountryPopulation: [],
        };
    }
    GetCountryPopulation = () => {
        fetch('http://api.population.io:80/1.0/population/2018/aged/18/')
            .then(response => {
                if(response.status === 200) {
                    return response.json();
                } else {
                    return [];
                }
            })
            .then(data => {
                data.sort(function (a, b)
                 {
                    return b.total - a.total;
                });
                // console.log(data);
                return data.slice(1, 11)
            })
            .then(population => {
                const NewPopulationArray = [];
                const CountriesColors = ["#E9F2F3", "D4E5E8", "#BED9DD", "#A9CCD1", "#94BFC6", "#7EB3BB", "#3E8D99", "#29808E", "#136A78", "#0F5560"];
                population.map((people, index) => {
                    const CountryData = { title: `${people.country} : ${people.total}`, value: people.total, color: CountriesColors[index] }
                    return NewPopulationArray.push(CountryData);
                });
                console.log(population);
                this.setState({
                    CountryPopulation: NewPopulationArray,
                });
            });
    }
    componentDidMount() {
        this.GetCountryPopulation();
    }

    render() {
        return (
            <div className='page_wrapper'>
                <div className='pie-chart_wrapper'>
                <h3>Countries with the highest population.</h3>
                    <PieChart
                        data={this.state.CountryPopulation}
                        expandOnHover={true}
                        expandSize={5}
                        shrinkOnTouchEnd={true}
                        strokeColor=""
                        strokeLinejoin="round"
                        strokeWidth={0}
                        viewBoxSize={100}
                    />
                </div>
            </div>
        );
    }
}

export default MyDashboard;
