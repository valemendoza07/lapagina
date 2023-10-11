import React from 'react'
import Card from './Card'
import imagen1 from '../assets/1.jpg'
import imagen2 from '../assets/2.jpg'
import imagen3 from '../assets/3.jpg'

const cards = [
    {
        id: 1,
        title: 'Mario',
        image: imagen1,
        desc: "Mario Bros"
    },
    {
        id: 2,
        title: 'Paisaje',
        image: imagen2,
        desc: 'Color Rosa'
    },
    {
        id: 3,
        title: 'Bob Esponja',
        image: imagen3,
        desc: 'Con Patricio'

    }
]

export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(c => (
                    <div className='col-md-4' key={cards.id}>
                        <Card
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        desc={c.desc}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}