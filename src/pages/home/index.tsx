import Card from './components/card'
import { Header } from './components/header'
import Search from './components/search'

export function Home() {
  return (
    <div className="p-8 pt-0">
      <Header />

      <Search />

      <article className="grid grid-cols-2 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </article>
    </div>
  )
}
