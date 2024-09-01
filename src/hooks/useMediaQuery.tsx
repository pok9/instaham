import { useState, useEffect } from 'react'

type QueryType = 'min-width' | 'max-width'

export function useMediaQuery(type: QueryType, width: number) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const query = `(${type}: ${width}px)`
    const media = window.matchMedia(query)
    const updateMatches = () => setMatches(media.matches)
    updateMatches()

    window.addEventListener('resize', updateMatches)
    return () => window.removeEventListener('resize', updateMatches)
  }, [type, width])

  return matches
}