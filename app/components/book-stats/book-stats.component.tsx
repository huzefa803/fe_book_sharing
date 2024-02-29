export default function BookStatsComponent({className}: any) {
  return (
    <div className={`${className} bg-orange-400 flex flex-row`}>
      <p className="font-bold mr-2">5 sharing</p>
      <p className="font-bold">5 asking</p>
    </div>
  )
}