import React from 'react'
import { tours } from '../data'
import Title from './Title'
import { Tour } from './Tour'

const Tours = () => {
    return (
        <section className="section" id="tours">

            <Title subTitle='tours' title='featured' />

            <div className="section-center featured-center">

                {
                    tours.map(tour => {
                        return <Tour key={tour.id} {...tour} />
                    })
                }

            </div>
        </section>
    )
}

export default Tours