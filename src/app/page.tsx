import NavMenu from "../components/navmenu";
import { NewRelease } from "./(components)/NewRelease";
import Providers from "./(components)/providers";
import { ServiceFlexBox } from "./(components)/service";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Providers>
        <NavMenu />
        <ServiceFlexBox />
        {/* <NewRelease /> */}
      </Providers>
    </main>
  );
}
