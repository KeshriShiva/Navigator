import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import PageHead from '../components/PageHead.jsx'
import "animate.css"
import { supremeRegular, supremeMedium, supremeBold } from '../utils/localNextFonts.js'

export default function Home() {
  return (
    <>  
      <PageHead title={"Coming Soon to Navigator"} description={"It's Best to Know Before You Go!"}/>

      <main>
          <div className={"sticky"}>
              <NavBar></NavBar>
          </div>
            <div className={supremeMedium.className + " bg-[url('/error.svg')] flex flex-row w-screen bg-stone-800 bg-no-repeat bg-left-top bg-opacity-90 mt-16 h-screen "}>
                <h2 className={"text-stone-200 text-7xl pt-56 ml-[27.5rem] w-[50rem]"}>Sorry, this page is currently still under construction.</h2>
            </div>
          <div></div>
          <Footer></Footer>
      </main>
    </>
  )
}
