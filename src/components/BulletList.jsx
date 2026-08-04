const BulletList = ({ items, bulletColor = "bg-emerald-500", className = "" }) => (
  <ul className={`space-y-2.5 ${className}`}>
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${bulletColor}`} />
        <span className="text-sm leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

export default BulletList;