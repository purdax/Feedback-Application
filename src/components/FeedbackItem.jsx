import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import React from 'react'
import Card from './shared/card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">  
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

Card.defaultProps = {
  reverse: true
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
