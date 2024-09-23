import React from 'react'
import Slide from './slide/slide'



const BlogHome = () => {
    const data = [
        {
          id: 1,
          titleOne: "YOU CAN CHANGE THE WORLD",
          titleTwo: "STRONG STYLE",
          paraOne: "How Women are Redirecting Hollywood",
          paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
          name: "By Jasmin Smith",
          subTitle: "How to Shop Mindfully",
          qrCode: "/images/qrcode.png",
          cover: "/images/blog-cover.jpg",
          cover2: "/images/card-1.jpg",

        },
    ]

  return (
    <>
        <section className='home'>
            <div className="left-content">
                {
                    data.map((value) => {
                        return(
                            <div className="content">
                                <div className="logo">
                                    <h1>M</h1>
                                </div>
                                <div className="home-img">
                                    <img src={value.cover} alt='' />
                                </div>
                                <div className="text">
                                    <h1>{value.titleOne}</h1>
                                    <p>{value.paraOne}</p>
                                    <span>{value.name}</span>
                                </div>
                                <div className="text text2">
                                    <h1>{value.titleTwo}</h1>
                                    <p>{value.paraTwo}</p>
                                    <span>{value.subTitle}</span>
                                </div>
                                <div className="qrcode">
                                    <img src={value.qrCode} alt='' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="right-content">
                <Slide />
            </div>
        </section>
    </>
  )
}

export default BlogHome
