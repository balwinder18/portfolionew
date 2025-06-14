const ContributionGrid = () => (
  <section className="flex justify-center mt-10">
    <div className="grid grid-cols-30 gap-1">
      {Array.from({ length: 210 }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-sm ${
            [83, 84, 85, 86, 113, 143, 173, 203].includes(i)
              ? 'bg-green-500'
              : 'bg-gray-400'
          }`}
        ></div>
      ))}
    </div>
  </section>
);

export default ContributionGrid;
