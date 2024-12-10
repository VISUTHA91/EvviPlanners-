import React from 'react'

function StandardsinDetails() {
        const icons = [
          {
            src: "https://cdn.theartloom.in/wp-content/uploads/2024/09/1.svg",
            alt: "India's No. 1 Planner",
            text: "India's No. 1 Planner",
          },
          {
            src: "https://cdn.theartloom.in/wp-content/uploads/2024/09/2.svg",
            alt: "On time  Delivery",
            text: "On time  Delivery",
          },
        //   {
        //     src: "https://cdn.theartloom.in/wp-content/uploads/2024/09/5.svg",
        //     alt: "Rated 4.88 by 1 Lac+ Customers",
        //     text: "Rated 4.88 by 1 Lac+ Customers",
        //   },
          {
            src: "https://cdn.theartloom.in/wp-content/uploads/2024/09/4.svg",
            alt: "Research backed Planner",
            text: "Research backed Planner",
          },
          {
            src: "https://cdn.theartloom.in/wp-content/uploads/2024/09/6.svg",
            alt: "Improves Time Management",
            text: "Improves Time Management",
          },
          {
            src: "https://cdn.theartloom.in/wp-content/uploads/2024/09/3.svg",
            alt: "Makes you Stress Free",
            text: "Makes you Stress Free",
          },
        ];
  return (
    <div className="flex flex-wrap justify-center gap-16 bg-orange-10 ml-8 mt-8 mr-8 p-6 border rounded">
    {icons.map((icon, index) => (
      <div key={index} className="flex flex-col items-center w-40 text-center">
        <div className="w-20 h-20">
          <img
            src={icon.src}
            alt={icon.alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mt-2 text-sm text-gray-700">{icon.text}</p>
      </div>
    ))}
  </div>
  )
}

export default StandardsinDetails