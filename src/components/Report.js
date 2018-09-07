import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

class Report extends Component {
    constructor() {
        super();
        this.state = {
            Countries: [],
            DataForCountry: [],
        };
    }
    GetCountries = () => {
        fetch('http://api.population.io:80/1.0/countries')
        .then(response => {
            if(response.status === 200) {
                return response.json();
            } else {
                return {countries: []};
            }
        })
        .then(data => {
            this.setState({
                Countries: data.countries,
            });
        });
    }

    GetDataForCountry = (Country) => {
        fetch(`http://api.population.io:80/1.0/population/2018/${Country}/18/`)
        .then(response => {
            if(response.status === 200) {
                return response.json();
            } else {
                return [];
            }
        })
        .then(data => {
            this.setState({
                DataForCountry: data,
            });
        });
    }

    componentDidMount() {
        this.GetCountries();
    }
    render() {
        return(
            <div className='page_wrapper'>
            <div className='select_wrapper'>
                <h3>Countries</h3>
                <form>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel></ControlLabel>
                    <FormControl
                        componentClass="select"
                        placeholder="Select country"
                        onChange={(e) => {
                            this.GetDataForCountry(e.target.value);
                        }}
                    >
                        {this.state.Countries.map((country, index) => {
                            return <option key={index} value={country}>{country}</option>
                        })}
                    </FormControl>
                    </FormGroup>
                    {(this.state.DataForCountry.length > 0) && (
                        <div>
                            {this.state.DataForCountry.map((population, index) => {
                                return <div key={index}>
                                    <p>Population Females: <span className='floatRight'>{population.females}</span></p>
                                    <p>Population Males: <span className='floatRight'>{population.males}</span></p>
                                    <p>Total Population: <span className='floatRight'> {population.total}</span></p>
                                    </div>
                            })
                            }
                        </div>
                    )}
                </form>
            </div>
            </div>
        );
    }
}

export default Report;