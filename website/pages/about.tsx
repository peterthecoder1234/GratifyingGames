import Footer from "../components/Footer"
import Head from "next/head"

const about = () =>
{
  return (
    <>
      {/* HEAD */}
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      {/* STRUCTURE CODE */}
      <main className = "bg-gray-900 h-screen">
        <header className = "flex justify-center">
          <h1 className = "bg-clip-text text-transparent bg-gradient-to-tr from-red-400 to-white text-6xl mt-20 font-bold">About Us.</h1>
        </header>

        <div className = "text-center m-auto lg:w-1/3 w-full mb-20 lg:mb-0 ">
            <p className = "text-xl mr-5 ml-5 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quasi illum officiis, corrupti sunt numquam! Lorem ipsum dolor sit amet.</p>
        </div>

        <div className = "h-2/3">
          <section className = "flex h-full flex-col lg:flex-row items-center lg:items-center space-y-10 lg:space-y-0 lg:space-x-10 mr-6 ml-6">
            <div className = "  lg:w-1/2 w-full lg:h-2/3 bg-gray-800 border bg-cover border-red-400 rounded-xl flex justify-center items-center flex-col text-center h-fit bg-gradient-to-t from-red-400 to-red-200">
              <span className = "text-white text-3xl font-bold mt-10">The Orgin</span>
                
              <p className = "font-semibold mb-10 mt-5 w-4/5 text-white">Jack is a young boy from the streets of Boliva. He grew up with only his mom as his dad was killed by the cartel when he was a young boy. Jack got taken by the cartel and forced to make websites so they could sell their illegal drugs. But after Jack was finsished with the cartel he decided to make video games, and this is the first one he made called Ball Bonkers.</p>
            </div>

            <div className = "lg:w-1/2 w-full h-2/3 bg-gray-800 border border-red-400 rounded-xl flex justify-center items-center flex-col text-center bg-cover bg-gradient-to-t from-red-400 to-red-200">
              <span className = "mt-10 text-white text-3xl font-bold">Our Plans</span>

              <p className = "mt-5 w-4/5 mb-10 font-semibold text-white">Our plan here at Gratifying Games is to try our best to produce only the best games for you, while also taking aas much money with our overpriced in game products. We plan to make mutiple games for you all for free.</p>
            </div>
            
            <div className = " lg:w-1/2 h-2/3 w-full bg-gray-800 border border-red-400 rounded-xl flex justify-center items-center flex-col text-center bg-cover bg-gradient-to-t from-red-400 to-red-200 ">
              <span className = "mt-10 text-white text-3xl font-bold">What We Do</span>

              <p className = "mb-10 mt-5 w-4/5 font-semibold text-white">At Gratifying Games HQ we are all about fun, we make sure that we have no woman employes to make sure that the games are top of the line. We also have a side bussnies where we human trafic little kids with all of our frugs coming out of Boliva and Colombia.</p>
            </div>

          </section>
        </div>
      </main>
    </>
  )
}

export default about