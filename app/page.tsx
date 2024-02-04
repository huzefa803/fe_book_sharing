import { MainComponent } from "@/components/main/main.component";
import { Navbar } from "@/components/navbar/navbar.component";
import { SearchComponent } from "@/components/search/search.component";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <Navbar></Navbar>
      <div className="w-2/3">
        <MainComponent></MainComponent>
      </div>
    </div>
  );
}
