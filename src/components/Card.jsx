import React from 'react';

function Card(userName) {
  // Log props for debugging
  console.log(userName);

  return (
    <>
      {/* Card Section */}
      <div className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 max-w-xs shadow-lg">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/29238664/pexels-photo-29238664/free-photo-of-yellow-wildflowers-in-a-sunlit-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile"
        />
        <div className="pt-6 text-center space-y-4">
          <div className="text-lg font-medium">
            <p>
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </div>
          <div className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
