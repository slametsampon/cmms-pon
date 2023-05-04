import React from 'react'

export default function shift() {
  const dateNow = new Date()
  if (dateNow.getMinutes() > 1) {
    if (dateNow.getHours() >= 6 && dateNow.getHours() < 14) return 'I'
    else if (dateNow.getHours() >= 14 && dateNow.getHours() < 22) return 'II'
    else if (dateNow.getHours() < 6 && dateNow.getHours() >= 22) return 'III'
    else return 'NS'
  }
}
