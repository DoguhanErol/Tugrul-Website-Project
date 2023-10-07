import React from 'react'
import PageTitleComponent from '../components/PageTitleComponent'
import AboutContent from '../components/AboutPageComponents/AboutContent'
import CommentList from '../components/AboutPageComponents/CommentList'

export default function HakkimizdaPage() {
  return (
    <>
        <PageTitleComponent Title={'Hakkında'} />
        <AboutContent />
        <CommentList />
    </>
  )
}
