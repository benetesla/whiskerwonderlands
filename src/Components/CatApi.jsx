/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react'
import './CatApi.css'


const CatApi = () => {
    const ApiUrl = 'https://catfact.ninja/fact'
    const [cat, setCat] = useState([])
    const [loading, setLoading] = useState(true)
    const randomFact = () => {
        const fetctData = async () => {
            const response = await fetch(ApiUrl)
            const data = await response.json()
            setCat(data)
            setLoading(false)
        }
        fetctData()

    }

    useEffect(() => {
        const fetctData = async () => {
            const response = await fetch(ApiUrl)
            const data = await response.json()
            setCat(data)
            setLoading(false)
        }
        fetctData()
    }, [])
    if (loading) {
        return <h2>
            <div class="spinner">
                <div class="spinner1"></div>
            </div>
        </h2>
    }
    return (
        <div className="card">
            <div>
                <h1 className="cat-title">Cat Fact</h1>
                <p className="cat-text">{cat.fact}</p>
                <p className="cat-text">- {cat.length}</p>
                <button className="cat-button" onClick={randomFact}>Random Fact</button>
            </div>
        </div>
    )
}

export default CatApi