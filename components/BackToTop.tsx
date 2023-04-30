import React, { useState } from 'react';
import { ArrowUpCircle } from "@geist-ui/icons";

type Props = {}

export default function BackToTop({}: Props) {
  const isBrowser = () => typeof window !== 'undefined' //The approach recommended by Next.js
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    if (!isBrowser()) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  if (isBrowser()) {
    window.addEventListener('scroll', toggleVisible)
  }

  return (
    <button
      className="flex flex-row gap-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
      children={
        <>
          <ArrowUpCircle size={20} />
          Back to top
        </>
      }
    />
  )
}
