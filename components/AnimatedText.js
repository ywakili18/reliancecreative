import React from 'react'
import { motion } from 'framer-motion'

// Word wrapper
const Wrapper = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return (
    <span className="text-2xl md:text-6xl font-thin">{props.children}</span>
  )
}

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2'
}

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedText = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      opacity: 0,
      color: '#121212',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      opacity: 1,
      color: '#fcfcfc',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  }

  //  Split each word of props.text into an array
  const splitWords = props.text.split(' ')

  // Create storage array
  const words = []

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''))
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push('\u00A0')
  })

  // Get the tag name from tagMap
  const Tag = tagMap[props.type]

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span key={index}>
                  <motion.span variants={item}>{element}</motion.span>
                </span>
              )
            })}
          </Wrapper>
        )
      })}
      {/* {} */}
    </Tag>
  )
}

export default AnimatedText
