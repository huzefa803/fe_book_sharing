import { MainComponent } from "@/app/components/main/main.component";
import { Navbar } from "@/app/components/navbar/navbar.component";
import { SearchComponent } from "@/app/components/search/search.component";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-2/3">
        <MainComponent></MainComponent>
      </div>
    </div>
  );
}
