import { MainComponent } from "@/app/components/main/main.component";

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
