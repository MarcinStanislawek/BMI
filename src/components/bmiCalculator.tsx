import React from 'react';
import './bmiCalculator.css';

interface Props {

}

interface State {
    weight: number;
    height: number;
    bmi: number;
    info: string;

}

function bmiInformation(bmi: number) {
    if (bmi === 0 || bmi === NaN || bmi === Infinity) {
        return "Twoje BMI jest..."
    } else if(bmi>=25) {
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

 class BMICalculator extends React.Component<Props, State> {


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
        } 
        this.setState(state)
    }
    render() {
        const {weight, height, bmi } = this.state

        return <div className="CalculatorContainer">
            <h1>Policz swoje BMI:</h1>
                 <label className="block">Wpisz wagę (w kg):</label>
                 <input className="block" name="weight" value={weight} onChange={this.handleOnChange} /> 
                 <label className="block">Wpisz wzrost (w cm):</label>
                 <input className="block" name="height" value={height} onChange={this.handleOnChange} /> 
                 <label className="block">Twoje BMI wynosi:</label>
                 <input className="block" name="bmi" value={bmi} onChange={this.handleOnChange} />
                 <input className="info" name="info" value={bmiInformation(bmi)} onChange={this.handleOnChange} />

        </div>

    }
}

export default BMICalculator