import React from "react";
import { useState } from "react";

export default function FunctionalComp() {
    const [data, setData] = useState([1, 2, 3]);
    return (
        <div>
            <p>Functional component</p>
            <ul>
                {
                    data.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
                
            </ul>
        </div>
    );
}