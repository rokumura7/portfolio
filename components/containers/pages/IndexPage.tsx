import Layout from '../layouts/Layout'

const IndexPage = () => (
  <Layout>
    <div className="bg-black z-40">
      <video className="z-0 min-h-full" autoPlay loop muted>
        <source src="/static/mov/jellyfish.mp4" type="video/mp4"></source>
      </video>
      <div className="flex justify-center items-center absolute inset-0 text-white">
        <p className="text-xl">Laziness, Impatience, and Hungry.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage