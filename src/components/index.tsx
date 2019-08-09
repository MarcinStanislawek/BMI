import React from 'react';
import './index.css';

interface Props {

}

interface State {
    weight: number;
    height: number;
    bmi: number;
    info: string;

}

function bmiInformation(bmi: number) {
    if(bmi>=25) {
        return "Twoje BMI jest za wysokie!"
    } else if (bmi<18.5) {
        return "Twoje BMI jest za niskie!"
    } else {
        return "Twoje BMI jest w normie :)"
    }
}

function Round(n: number, k: number)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}

 class BMICalculator extends React.PureComponent<Props, State> {


    constructor(props: Props) {
        super(props)

        this.state = {
            weight: 0,
            height: 0,
            bmi: 0,
            info: "Twoje BMI jest...",
        }
    }
    handleOnChange = (e: any) => {
        const {name, value} = e.target
        const {weight, height, bmi, info} = Object.assign({}, this.state, {[name]: value})
    
        let state = this.state
        if(name === 'weight' || name === 'height') {
            state = {
                weight,
                height,
                bmi: Round(weight/Math.pow(height/100, 2), 2),
                info: bmiInformation(bmi),
                }
        } else if (name === 'bmi') {
            state = {
                weight,
                height,
                bmi,
                info: bmiInformation(bmi),
            }
        }
        this.setState(state)
    }
    render() {
        const {weight, height, bmi } = this.state

        return <div className="CalculatorContainer">
            <h1>Sprawdź swoje BMI</h1>
                 <label className="block">Wpisz wagę (w kg):</label>
                 <input className="block" name="weight" value={weight} onChange={this.handleOnChange} /> 
                 <label className="block">Wpisz wzrost (w cm):</label>
                 <input className="block" name="height" value={height} onChange={this.handleOnChange} /> 
                 <label className="block">Twoje BMI wynosi:</label>
                 <input className="block" name="bmi" value={bmi} onChange={this.handleOnChange} />
        </div>

    }
}

export default BMICalculator