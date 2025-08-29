import PollForm from "@/components/polls/poll-form"

export default function NewPollPage() {
  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a New Poll</h1>
      <PollForm />
    </main>
  )
}

