import { useEffect } from 'react'

const BASE = 'Esteban Manrupe'
const DEFAULT = `${BASE} · Frontend Developer`

/** Sets document.title to "<section> · Esteban Manrupe" while the page is mounted. */
export function usePageTitle(section?: string) {
  useEffect(() => {
    document.title = section ? `${section} · ${BASE}` : DEFAULT
    return () => {
      document.title = DEFAULT
    }
  }, [section])
}
