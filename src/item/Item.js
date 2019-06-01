import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

import './Item.scss'

class Item extends Component {
  constructor () {
    super()

    this.state = {
      items: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/items`)
      .then(res => {
        this.setState({ items: res.data.items })
      })
      .catch(console.error)
  }

  // addToCart = user => {
  //   return axios({
  //     url: `${apiUrl}/items`
  //   })
  // }

  render () {
    const { user } = this.props
    const { items } = this.state

    return (
      <Fragment>
        <CardDeck className="col-12">
          {user && items.map((item, i) => (
            <Card key={i} className="col-4" bg="light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img variant="top" src={item.imgUrl} />
                <Card.Title>
                  <h1>{item.name}</h1>
                </Card.Title>
                <Card.Text>
                  <h5>{item.description}</h5>
                  <h5>${item.price}</h5>
                </Card.Text>
                <Button variant="primary">Add To Basket</Button>
              </Card.Body>
            </Card>))}
          {!user && items.map((item, i) => (
            <Card key={i} className="col-4" bg="light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Img variant="top" src={item.imgUrl} />
                <Card.Title>
                  <h1>{item.name}</h1>
                </Card.Title>
                <Card.Text>
                  <h5>Description: {item.description}</h5>
                  <h5>Price: ${item.price}</h5>
                </Card.Text>
              </Card.Body>
            </Card>))}
        </CardDeck>
      </Fragment>
    )
  }
}

export default Item
