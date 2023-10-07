import React from 'react'
import ContactIcons from '../components/ContactPageComponents/ContactIcons'
import ContactInfo from '../components/ContactPageComponents/ContactInfo'
import GoogleMaps from '../components/ContactPageComponents/GoogleMaps'
import PageTitleComponent from '../components/PageTitleComponent'

export default function AboutPage() {
  return (
    <>
    <PageTitleComponent Title={'İletisim'} />
    <GoogleMaps />
    <ContactInfo />
    <ContactIcons />
    </>
  )
}
