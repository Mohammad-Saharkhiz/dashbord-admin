import React from 'react'
import  { Link } from "react-router-dom"
import Chart from "../../components/chart/Chart"
import { productsData } from "../../data"
import PublishIcon from "@mui/icons-material/Publish"

import "./Product.css"

export default function Product() {
    

    return (
        <div className="product">
            <div className="product-title-container">
                <h2 className="product__title">Product</h2>
                <Link to="/newProduct">
                    <button className="product__button">Create</button>
                </Link>
            </div>
            <div className="product__top">
                <div className="product__top-left">
                    <Chart title="Sale in month" data={productsData} dataKey="sales"/>
                </div>

                <div className="product__top-right">
                    <div className="product-info__top">
                        <img src="/ben-duchac-3fJOXw1RbPo-unsplash.jpg" alt="img" className="product-image" />
                        <span className="product__name">Dell laptop</span>
                    </div>
                    <div className="product-info__button">
                        <div className="product-info-item">
                            <div className="product-info-key">ID: </div>
                            <div className="product-info-value">147</div>
                        </div>
                        <div className="product-info-item">
                            <div className="product-info-key">Name: </div>
                            <div className="product-info-value">Dell laptop</div>
                        </div>
                        <div className="product-info-item">
                            <div className="product-info-key">Sale: </div>
                            <div className="product-info-value">$45760</div>
                        </div>
                        <div className="product-info-item">
                            <div className="product-info-key">Active: </div>
                            <div className="product-info-value">yes</div>
                        </div>
                        <div className="product-info-item">
                            <div className="product-info-key">Stock: </div>
                            <div className="product-info-value">No</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="product__bottom">
                <form className="product-form">
                    <div className="product-form__left">
                        <label className="product-name">Product Name</label>
                        <input type="text" placeholder='MSI Laptop'/>

                        <label>In stoke</label>
                        <select id="inStoke">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select id="inStoke">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="product-form__right">
                        <div className="product-uploader">
                            <img src="/ben-duchac-3fJOXw1RbPo-unsplash.jpg" alt="img" className="product-upload__img" />
                            <label>
                                <PublishIcon />
                            </label>
                            <input type="file" style={{display: "none"}} />
                        </div>
                        <button className="product-button">Upload (Edit)</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
