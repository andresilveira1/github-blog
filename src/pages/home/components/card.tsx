export default function Card() {
  return (
    <div className="h-[260px] w-[416px] space-y-5 rounded-lg bg-base-post p-8">
      <div className="flex items-start">
        <h2 className="w-[283px] text-xl font-bold text-base-title">
          JavaScript data types and data structures
        </h2>
        <span className="text-sm text-base-span">Há 1 dia</span>
      </div>

      <p className="line-clamp-4 text-base-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam
        similique aut excepturi numquam quaerat maxime animi modi aliquam
        molestias nobis rerum ducimus, odit, consequuntur ipsa vero quae?
        Mollitia, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Cumque quisquam similique aut excepturi numquam quaerat maxime
        animi modi aliquam molestias nobis rerum ducimus, odit, consequuntur
        ipsa vero quae? Mollitia, ipsam.
      </p>
    </div>
  )
}
