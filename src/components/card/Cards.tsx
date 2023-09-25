import Card from "./Card"

const Cards = ({result}) => {
  return (
  <>
    {result.map((movie) =>  (
      <Card key={movie.id} result={movie} />
    ))}
  </>
)}

export default Cards