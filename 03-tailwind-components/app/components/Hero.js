// Hero section component
// This is what visitors see first - make it count!

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Build Your SaaS Fast</h1>
          <p className="py-6 text-lg">
            Stop wasting time on boilerplate. Launch your product in days, not months.
            No PhD required.
          </p>
          <button className="btn btn-primary btn-lg">
            Start Building Free
          </button>
        </div>
      </div>
    </div>
  )
}