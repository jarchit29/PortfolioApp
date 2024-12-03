"use client";

import { React, useEffect, useState } from 'react'
import axios from 'axios';



const UserDashBoard = () => {


    //  Defined States 

    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);

    // State for manginig cart functinality 

    const [cartItem, setCartItem] = useState({});



    // Defined use Effects 

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')

            .then(function (response) {

                //  On success store this data in State 

                setData(response.data)

                console.log(response.data);

            })

            .catch(function (error) {
                console.log(error);
            });


    }, []);


    useEffect(() => {

        // Picking out categories from Bigger product array
        const newCategoriesArray = data.map(item => ({
            cat: item?.category

        }))

            // Reducing an array hence removing duplicates of categories from the array 
            .reduce((item, current) => {
                const x = item?.find(item => item?.cat === current?.cat);
                if (!x) {
                    return item?.concat([current]);
                } else {
                    return item;
                }
            }, []);

        // Setting category use state after removing duplicates, now this stage has all categories which are unique
        setCategory(newCategoriesArray);


    }, [data]) // On change of data from API this will re render 



    //  Functions for managining cart state 

    let OnRemoveFromCart = (id) => {


        setCartItem(cartItem => {
            const newCart = { ...cartItem };
            if (newCart[id] > 0) {
                newCart[id] -= 1;
            }
            else {

                alert("Add something to cart first")
            }
            return newCart;
        });

    }

    let onAddToCart = (id) => {

        setCartItem({ ...cartItem, [id]: (cartItem[id] || 0) + 1 })

    }

    return (
        <div className='productContainer'>

            {/*Map Categories first so that array Items can be bifurcated based on categories */}

            {category?.map((item, index) => {


                return (

                    <>
                        <div className='sectionSeperator'>

                            <p className='textSectionHeading'>{item.cat}</p>

                            <div className='itemContainer'>

                                {data
                                    ?.filter(dataItem => dataItem?.category === item?.cat)

                                    ?.map(item => (
                                        <div className='itemCards'>
                                            <div>
                                                <div className='imageCont'>

                                                    <img src={item.image} className='card-img'></img>
                                                </div>
                                                <div className='textCont'>

                                                    <div>
                                                        <p>
                                                            {item?.title}

                                                        </p>

                                                        <p className='colorGreen mt-2'>
                                                            Rs {item?.price}
                                                        </p>

                                                    </div>

                                                    <div className='margin-top'>


                                                        <div className='gonnaBeOnTheBottom'>

                                                            <div>

                                                                <div class="number-control">

                                                                    <div className='mx-2'>
                                                                        🛒
                                                                    </div>

                                                                    <div class="number-left" onClick={(id) => { OnRemoveFromCart(item?.id) }}></div>

                                                                    <span type="number" name="number" class="number-quantity">{cartItem[item.id] || 0} </span>

                                                                    <div class="number-right" onClick={(id) => { onAddToCart(item?.id) }}></div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    ))}

                            </div>

                        </div>





                    </>

                )



            })}


        </div>
    )
}

export default UserDashBoard