import Silder from "../Components/Silder"
import AssignmentDashboard from "@/Components/AssignmentDashboard";

export default function Home() {
  const assginmentInfo = {
    "duration_in_seconds": 3600,
    "ends_at": 121313,
    "id": "assignment123",
    "link": "https://tiny.url/asdfasdfasdf",
    "status": "Active",
    "title": "Sales BDE"
  }

  return (
    <main className="flex flex-row gap-4 min-h-screen bg-gray-100">
      <Silder />
      <AssignmentDashboard
        duration_in_seconds={assginmentInfo.duration_in_seconds}
        ends_at={assginmentInfo.ends_at}
        id={assginmentInfo.id}
        link={assginmentInfo.link}
        status={assginmentInfo.status}
        title={assginmentInfo.title}
        key={10} />
    </main>
  );
}
