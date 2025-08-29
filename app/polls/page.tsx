import PollList from "@/components/polls/poll-list"

export default function PollsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Polls</h1>
      <PollList />
    </main>
  )
}

