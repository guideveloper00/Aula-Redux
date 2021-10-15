import React from "react";
import { connect, useDispatch } from "react-redux";
import {summ} from "../store/calculator/calculator.actions";

function Calculator({result}) {

    const dispatch = useDispatch()


    return <>
        <input id="a" placeholder="a"></input>
        <input id="b" placeholder="b"></input>

        <button onClick={() => {
            dispatch(summ(parseInt(document.getElementById("a").value), parseInt(document.getElementById("b").value)))
        }}>Somar</button>

        <button>Subtrair</button>

        <div>{result}</div>
    </>
}

function mapStateToProps(state) {
    return {
        result: state.calculator
    }
}

export default connect(mapStateToProps)(Calculator)