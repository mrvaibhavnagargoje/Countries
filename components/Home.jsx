import { useContext, useState } from "react"
import SearchBar from "./SearchBar"
import SelectMenu from "./SelectMenu"
import CountriesList from "./CountriesList"
// import useWindowSize from "../Hooks/useWindowSize"
import useTheme from "../Hooks/useTheme"

export default function Home() {
  const [query, setQuery] = useState("")
  const [isDark] = useTheme()
  // const windowSize = useWindowSize()

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      {/* <h1 style={{ textAlign: "center" }}>
        {windowSize.width} X {windowSize.height}
      </h1> */}
      <CountriesList query={query} />
    </main>
  )
}
