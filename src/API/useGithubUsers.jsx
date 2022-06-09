import { useState, useEffect } from 'react'

export default function useGithubUsers() {

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(
        () => {
            setLoading(true)
            fetch(`https://api.github.com/search/users?q=${query}`, { method: 'GET' })
                .then(response => response.json())
                .then((data => setResults(data.items)))
        }, [query]
    )

    return {
        query,
        setQuery,
        setLoading,
        results,
        loading
    }

}