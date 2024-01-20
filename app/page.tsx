"use client"
import { Metadata, ResolvingMetadata } from "next"
import { useEffect } from "react"

export default function Home() {

  useEffect(() => {

    const handleFetch = async () => {
      await fetch(`/api/test`).then(v => v.json())
        .then(v => console.log(v))
    }
    handleFetch()

  }, [])
  return (
    <main >
      ss
    </main>
  )
}







