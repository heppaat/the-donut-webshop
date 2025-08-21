
export default function Home() {
    return (
        <div className="p-8 space-y-4">
            {/* Font Weight Tests */}
            <h1 className="font-light text-4xl">Light heading</h1>
            <p className="font-normal text-lg">Regular text</p>
            <button className="font-medium px-4 py-2 bg-gray-200 rounded">Medium weight button</button>
            <h2 className="font-semibold text-2xl">SemiBold heading</h2>
            <h1 className="font-bold text-3xl">Bold heading</h1>

            {/* Color Tests */}
            <div className="mt-8 space-y-4">
                <h2 className="font-bold text-xl">Color Palette Test:</h2>

                <div className="bg-primary text-white p-4 rounded font-bold">
                    Primary Magenta Background (#d551c1) 🍩
                </div>

                <div className="bg-secondary text-white p-4 rounded font-medium">
                    Secondary Turquoise Background (#1ccbfd)
                </div>

                <div className="bg-background border border-gray-300 p-4 rounded">
          <span className="text-foreground font-normal">
            Background color with foreground text
          </span>
                </div>

                <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Test Hover Effect (Primary → Secondary)
                </button>
            </div>
        </div>
    );
}