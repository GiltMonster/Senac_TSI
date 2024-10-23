import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header/Header'
import Form from './components/Form/Form'

export default function App() {

  const [cards, setCards] = useState([
    {
      title: 'Card Title 1',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Card Title 2',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Card Title 3',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Card Title 4',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Card Title 5',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Card Title 6',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Card Title 7',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Card Title 8',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
    {
      title: 'Card Title 9',
      description: 'Card Description',
      image: 'https://picsum.photos/200/300',
    },
  ])

  return (
    <main className='app'>
      <Header title="React Revisão" />

      <section className='cards'>

        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          )
        })}
      </section>

      <section >
        <Form />
      </section>

    </main>
  )
}